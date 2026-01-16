import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';

export async function getStaticPaths() {
    return [
        { params: { lang: 'tr' } },
        { params: { lang: 'en' } },
    ];
}

export async function GET(context: any) {
    const lang = context.params.lang as keyof typeof ui;
    const posts = await getCollection('blog', ({ data }) => !data.draft);

    const title = lang === 'en' ? 'Bayram Keleş Blog' : 'Bayram Keleş Blog';
    const description = lang === 'en' 
        ? 'Blog posts about software, technology and personal thoughts.' 
        : 'Yazılım, teknoloji ve kişisel düşünceler hakkında blog yazıları.';

    return rss({
        title: title,
        description: description,
        site: context.site!,
        items: posts
            .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                // Link'i dile göre ayarla: /tr/blog/slug veya /en/blog/slug
                // Not: Blog yazılarının içerik dili şu an karışık olabilir, 
                // ileride content collection'a 'lang' filtresi eklenebilir.
                link: `/${lang}/blog/${post.slug}/`,
                categories: post.data.tags,
            })),
        customData: `<language>${lang}</language>`,
    });
}
