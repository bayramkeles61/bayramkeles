# Bayram Keleş - Personal Website

Welcome to the source code of my personal website, [bayramkeles.com](https://bayramkeles.com).

Build with **Astro**, **Tailwind CSS**, and **Cloudflare Pages**.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) - High performance static site builder.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- **Icons:** [Lucide](https://lucide.dev/) - Beautiful & consistent icons.
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) - Fast and secure global hosting.
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (inspired) patterns.
- **Font:** [Inter](https://fonts.google.com/specimen/Inter)

## 🛠️ Features

- **Multi-language Support (i18n):** Native support for Turkish (First class) and English.
- **Dark Mode:** System preference detection and manual toggle.
- **Responsive Design:** Mobile-first approach, looks great on all devices.
- **SEO Optimized:** Meta tags, Open Graph, Sitemap, and structured data.
- **High Performance:** Minimal JS, static generation, Cloudflare CDN caching.
- **Security:** DNSSEC enabled, secure headers configured.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📂 Project Structure

```text
/
├── public/             # Static assets (fonts, images, robots.txt)
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Data files (projects, games, movies)
│   ├── i18n/           # Translation strings and utilities
│   ├── layouts/        # Page layouts (Base, Simple)
│   ├── pages/          # Routing (Auto-generated from files)
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
