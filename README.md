# Harish — Portfolio (formal)

**Live:** https://portfolio-pro-harish.vercel.app/ (Vercel) · creative version: https://creative-portfolio-harish.vercel.app/

A clean, professional one-page portfolio suitable for job applications and client-facing use. Plain HTML, CSS and JavaScript. No build step, no runtime dependencies.

The creative, themed version lives in the sibling `portfolio` folder and is linked from the Projects section here.

## Run locally

```bash
npm run dev          # serves on http://localhost:3001
```

Or open `index.html` directly in a browser.

## Checks

```bash
npm install          # once, for ESLint and Prettier
npm run lint
npm run format:check
```

## Customise

- **Projects**: edit `js/data.js`.
- **Everything else** lives in `index.html`: hero, profile, experience, skills, education and contact.
- **Photo**: replace `assets/harish.jpg` and `assets/harish.webp` (4:5 crop).
- **Colours**: tokens at the top of `css/style.css`. Light is the default; dark follows the system or the toggle.

## Features

Sticky navigation with active-section highlighting, mobile menu, light/dark theme, subtle scroll reveals, expandable project details, contact form that opens the mail app, and a print stylesheet so the page prints as a tidy one-page summary.

## Deploy for free

### GitHub Pages

1. Create a public repo (e.g. `portfolio-pro`) and push this folder to `main`.
2. Settings → Pages → Source: **GitHub Actions**. The included workflow deploys on every push.
3. The site appears at `https://<user>.github.io/portfolio-pro/`.

If you use a different repo name, update the `og:image` and `og:url` tags in `index.html`.
