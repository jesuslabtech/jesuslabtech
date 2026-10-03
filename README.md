# 💼 jesuslabtech — Personal Repository

Welcome to my personal repository. Here I collect projects, experiments, configurations, and resources that I use to learn, practice, and work with different technologies. This space functions as a lab where I organize ideas, develop prototypes, and document my growth as a DevOps engineer and developer.

### 🚀 About Me

I'm a developer interested in:

- 🔧 AWS, docker, typescript, bash, terraform, ...

- 📚 Continuous learning and best practices

- 🧪 Exploring new tools and frameworks

- 🤝 Contributing to open-source projects

You can learn more about my work on my GitHub profile or reach out through my professional networks.

### 📂 Repository Contents

This repo includes:

- 📝 Learning notes and snippets

- 🧩 Small projects and prototypes

- ⚙️ Configurations and utilities

- 📦 Reusable examples and templates

The structure may change over time, as this repository evolves according to my interests and needs.

### 🛠️ Featured Technologies

Some of the technologies you'll commonly see in my projects:

1. Cloud (AWS)

2. Astro

3. Docker

4. TypeScript

5. Bash / Terraform

### 🤝 Contributions

This repository is primarily personal, but I'm open to suggestions or ideas.
If you find something you'd like to discuss, feel free to open an issue or send me a message.

### 📜 License

Unless otherwise noted, the content of this repository is licensed under the MIT license.

## Design system (layouts, skins, languages)

The site is a freelance landing page in Spanish and English. Content lives in `src/i18n/{es,en}.ts` (same shape, typed in `types.ts`); non-translatable data in `src/data/site.ts`.

- **Languages:** `/es/` and `/en/`. The root `/` redirects client-side: the language chosen with the ES/EN toggle, else the browser language, else Spanish. Each page has `hreflang` alternates.
- **Layouts** (which sections and in what order): `servicios`, `casos`, `diagrama` (`src/components/f/Landing.astro`).
- **Skins** (visual style, CSS only in `src/styles/skins.css`): `classic`, `terminal`, `editorial`, `dashboard`.
- **Production build:** `LAYOUT=casos SKIN=terminal pnpm build` (defaults: `servicios` + `classic`).
- **Preview / comparison** (any env except Vercel production, including `pnpm dev`): `/preview/<lang>/<layout>/` with a floating switcher. Skins change instantly without reloading (the choice is remembered; press `s` to cycle them, or use `?skin=terminal`). These routes are `noindex` and are not generated in production.
