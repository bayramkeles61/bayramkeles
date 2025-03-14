# Bayram Keles Portfolio

Bu, [Bayram Keles](https://bayramkeles.com) kişisel portfolio sitesinin kaynak kodudur. Site [Tailwind CSS](https://tailwindcss.com) ve [Next.js](https://nextjs.org) kullanılarak geliştirilmiştir.

## Başlangıç

Bu projeyi yerel makinenizde çalıştırmak için öncelikle npm bağımlılıklarını yükleyin:

```bash
npm install
```

Sonra, projenizin kök dizininde bir `.env.local` dosyası oluşturun ve `NEXT_PUBLIC_SITE_URL` değişkenini sitenizin genel URL'sine ayarlayın:

```
NEXT_PUBLIC_SITE_URL=https://bayramkeles.com
```

Ardından, geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Son olarak, web sitesini görüntülemek için tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Özelleştirme

Bu siteyi düzenlemek için `/src` klasöründeki dosyaları değiştirebilirsiniz. Bu dosyaları düzenledikçe site otomatik olarak güncellenecektir.

## Teknolojiler

Bu portfolio sitesi aşağıdaki teknolojileri kullanmaktadır:

- [Tailwind CSS](https://tailwindcss.com/docs) - stil ve tasarım için
- [Next.js](https://nextjs.org/docs) - React framework
- [Shadcn UI](https://ui.shadcn.com) - UI komponentleri için
- [MDX](https://mdxjs.com) - içerik yönetimi için
