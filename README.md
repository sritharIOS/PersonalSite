# Srithar Rajendran — Personal Site

A personal portfolio/resume site built with React, Vite, and Tailwind CSS. Built to
support job interviews: About, Experience timeline, Selected Work highlights, Skills,
Education/Certifications, and a downloadable resume PDF.

## Edit your content

Almost everything on the site is driven by one file:

```
src/data/resume.js
```

Update your name, summary, experience, skills, education, and links there — no need to
touch the component files unless you want to change layout/design.

Two placeholders you should fill in:
- `profile.links.linkedin`
- `profile.links.medium`

To update the resume PDF, replace `public/resume.pdf` with a new file (keep the same
filename, or update `profile.resumeFile` in `src/data/resume.js`).

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

**Vercel (recommended, easiest):**
1. Push this repo to GitHub (already connected to `srithar21/PersonalSite`).
2. Go to https://vercel.com/new, import the repo. Vercel auto-detects Vite — no config needed.
3. Every push to `main` auto-deploys.

**Netlify:**
1. https://app.netlify.com/start, connect the repo.
2. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages:**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://srithar21.github.io/PersonalSite"` to `package.json`.
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`.
4. Set `base: '/PersonalSite/'` in `vite.config.js`.
5. Run `npm run deploy`.

## Stack

- [Vite](https://vitejs.dev) — build tool / dev server
- [React](https://react.dev) — UI
- [Tailwind CSS](https://tailwindcss.com) — styling
