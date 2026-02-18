# ⚡ Nuxt 4 Starter Template

<p align="center">
  <strong>Production-ready Nuxt 4 starter with TypeScript, TailwindCSS 4 & ESLint</strong>
</p>

<p align="center">
  <a href="https://nuxt-starter-template-seven.vercel.app/">🌐 Live Demo</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a>
</p>

<p align="center">
  <a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white" alt="Nuxt 4"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/github/stars/MaximeBignolet/nuxt-starter-template?style=social" alt="GitHub stars">
</p>

---

## 🎯 Why This Template?

A clean, modern, and **production-tested** Nuxt 4 starter that saves you hours of initial setup. Built with best practices and the latest versions of your favorite tools.

✅ **Nuxt 4** – Latest stable release with all new features  
✅ **TypeScript** – Full type safety configured out of the box  
✅ **TailwindCSS 4** – Bleeding-edge styling with modern features  
✅ **Zero Config** – ESLint, Vite, and auto-imports ready to go  
✅ **Clean Architecture** – Organized folder structure for scalability  
✅ **Battle-Tested** – Used in real production projects

---

## 🚀 Quick Start

### [🎯 Use This Template](https://github.com/MaximeBignolet/nuxt-starter-template/generate)
**Get started in 30 seconds** ← Click to create your own repository

### Or clone manually:

```bash
# Clone the repository
git clone https://github.com/MaximeBignolet/nuxt-starter-template.git
cd nuxt-starter-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs on `http://localhost:3000` 🚀

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

> 💡 **Tip:** Use either `npm` or `yarn` consistently to avoid lockfile conflicts.

---

## 📦 What's Included

```
nuxt-starter-template/
├─ 🎨 TailwindCSS 4 with optimized config
├─ 🔒 TypeScript strict mode enabled
├─ ⚡ Vite for lightning-fast HMR
├─ 🧹 ESLint + formatting rules configured
├─ 📁 Clean folder structure ready to scale
├─ 🔄 Auto-imports (composables)
├─ 🛣️ File-based routing configured
├─ 📝 Example app config and composables
└─ 🚀 Vercel/Netlify deployment ready
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Nuxt 4](https://nuxt.com) | Latest | Hybrid rendering & SSR |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [TailwindCSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Vite](https://vitejs.dev) | Latest | Fast bundling & HMR |
| [ESLint](https://eslint.org) | Latest | Code quality & formatting |

---

## 📁 Project Structure

```
nuxt-starter-template/
├─ app/
│  ├─ app.vue                      # App shell
│  ├─ app.config.ts                # App-level config (SEO/site metadata)
│  ├─ assets/
│  │  └─ css/main.css              # Tailwind entrypoint
│  ├─ composables/
│  │  ├─ api-client/               # API client helpers
│  │  └─ env/                      # Runtime config accessor
│  ├─ layouts/default.vue          # Default layout
│  └─ pages/index.vue              # Home page
├─ public/              # Static assets
├─ server/              # Server-side code
├─ .env.example         # Environment variables template
├─ nuxt.config.ts       # Nuxt configuration
└─ tsconfig.json        # TypeScript configuration
```

---

## ✨ Features

### Core Features
- ✅ **Nuxt 4** with latest features and performance improvements
- ✅ **TypeScript** with strict mode for maximum type safety
- ✅ **TailwindCSS 4** with JIT compiler and modern utilities
- ✅ **ESLint** configured for Nuxt, Vue, and TypeScript
- ✅ **Auto-imports** for components, composables, and utilities
- ✅ **Path aliases** using `@` for clean imports

### Developer Experience
- 🔥 **Hot Module Replacement** for instant updates
- 📝 **Code examples** included to get you started
- 🎨 **Responsive design** patterns ready to use
- 🔧 **Extensible** architecture for easy customization
- 📦 **Production-optimized** build configuration

### Deployment Ready
- ☁️ **Vercel** deployment configured
- 🌐 **Netlify** compatible
- 🐳 **Docker** ready (add Dockerfile if needed)
- 🚀 **SSR** and **SSG** modes available

---

## 🆚 Comparison

| Feature | This Template | Official Nuxt Starter | Other Templates |
|---------|---------------|----------------------|-----------------|
| Nuxt 4 | ✅ | ❌ (v3) | ❌ |
| TailwindCSS 4 | ✅ | ❌ | Partial |
| TypeScript Strict | ✅ | Partial | ❌ |
| ESLint Configured | ✅ | ❌ | Partial |
| Production Examples | ✅ | ❌ | ❌ |
| Clean Architecture | ✅ | Basic | Varies |

---

## 🎨 Customization

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### TailwindCSS

Tailwind is loaded from `app/assets/css/main.css` and configured through Nuxt/Vite in `nuxt.config.ts`.
Add your custom tokens/utilities directly in `main.css`:

```css
@import "tailwindcss";

@theme {
	--color-primary: #00dc82;
}
```

### ESLint

Adjust linting rules in `eslint.config.mjs` to match your preferences.

---

## 🧩 Roadmap

### Coming Soon
- [ ] Authentication module (optional)
- [ ] Dashboard layout examples
- [ ] Dark mode toggle component
- [ ] SEO meta module integration
- [ ] i18n configuration example
- [ ] Unit testing setup (Vitest)
- [ ] E2E testing setup (Playwright)

### Premium Version (Optional)
- 🔐 Auth flow with session management
- 📊 Dashboard with charts and analytics
- 🎨 Extended UI components library
- 🌙 Advanced dark mode with persistence
- 📱 Mobile-optimized layouts
- 🔌 CMS integration examples

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Free to use, modify, and distribute.** If you use this commercially, a attribution or link back is appreciated but not required.

---

## 🙏 Acknowledgments

- [Nuxt Team](https://nuxt.com) for the amazing framework
- [TailwindCSS Team](https://tailwindcss.com) for the utility-first CSS
- [TypeScript Team](https://www.typescriptlang.org) for type safety

---

## 👨‍💻 Author

**Maxime Bignolet**  
Front-End Developer – La Rochelle, France

[![GitHub](https://img.shields.io/badge/GitHub-MaximeBignolet-181717?logo=github)](https://github.com/MaximeBignolet)
[![Portfolio](https://img.shields.io/badge/Portfolio-maximedev.fr-00DC82)](https://maximedev.fr)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maxime_Bignolet-0A66C2?logo=linkedin)](https://www.linkedin.com/in/maxime-bignolet-8228bb219/)

---

<p align="center">
  <strong>⭐ If this template helped you, consider giving it a star!</strong>
</p>

<p align="center">
  <a href="https://nuxt-starter-template-seven.vercel.app/">🌐 View Live Demo</a>
</p>
