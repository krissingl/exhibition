# Exhibition — Portfolio Site Plan

## Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | React 18 + TypeScript | Primary web app experience |
| Bundler | Vite | Modern CRA replacement, near-zero config |
| Styling | Tailwind CSS v3 | Utility-first, fast iteration, responsive-friendly |
| Hosting | GitHub Pages | Free, ties to existing GitHub workflow |
| CI/CD | GitHub Actions | Auto-deploy on push to `main` |

---

## Project Structure

```
exhibition/
├── public/
│   └── assets/              # static images, resume PDF, favicon
├── src/
│   ├── components/          # reusable UI (Navbar, Button, Badge, ProjectCard, etc.)
│   ├── sections/            # Hero, Projects, Contact (one file per section)
│   ├── data/
│   │   └── projects.ts      # project entries live here — edit to update content
│   ├── types/
│   │   └── index.ts         # shared TypeScript types (Project, etc.)
│   ├── App.tsx              # composes sections in order
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml       # build + push to gh-pages branch on merge to main
├── vite.config.ts           # base set to /exhibition/ for GitHub Pages sub-path
├── tailwind.config.ts
└── tsconfig.json
```

---

## Sections

### 1 — Hero / About
- Name + title ("Senior Full-Stack Software Engineer")
- Short bio paragraph (2–3 sentences)
- CTA buttons: GitHub, LinkedIn, email
- Optional: profile photo

### 2 — Projects
- Card grid (responsive: 1 col mobile → 2–3 col desktop)
- Each card: project name, short description, tech stack badges, repo link, live link (if any)
- Cards driven by `src/data/projects.ts` — add/remove entries to update the page
- Separate visual treatment for volunteer work vs. personal projects (e.g. tag/badge)

### 3 — Contact
- Email link (mailto)
- GitHub, LinkedIn icons/links
- No server-side form (keeps it fully static)

---

## Build Steps

1. **Scaffold** — `npm create vite@latest . -- --template react-ts`
2. **Tailwind** — install + configure (`tailwind.config.ts`, `postcss.config.js`, import in `index.css`)
3. **Vite config** — set `base: '/exhibition/'` for GitHub Pages sub-path routing
4. **GitHub Actions** — `.github/workflows/deploy.yml` builds and pushes `dist/` to `gh-pages` branch
5. **Layout skeleton** — `App.tsx` with `<Navbar>` + section anchors, basic responsive shell
6. **Hero section** — name, title, bio, social links
7. **Projects section** — `ProjectCard` component + data file, responsive grid
8. **Contact section** — links + icons
9. **Polish** — consistent color palette, typography scale, transitions, favicon, meta tags
10. **Content** — populate with real projects, bio, links
11. **Deploy** — push to `main`, verify GitHub Pages live URL

---

## Design Notes

- Single-page app with smooth scroll between sections
- Anchor links in navbar (`#hero`, `#projects`, `#contact`)
- Color palette: TBD — suggest a dark/neutral professional theme with one accent color
- Typography: a clean sans-serif (Inter or similar via Google Fonts or Fontsource)
- No animations required for MVP; subtle hover states on cards/buttons is sufficient

---

## Content Checklist (to fill in during step 10)

- [ ] Bio / about text
- [ ] Projects list (name, description, tech stack, URLs)
- [ ] Profile photo (optional)
- [ ] Resume PDF (drop in `public/assets/`)
- [ ] LinkedIn URL
- [ ] GitHub username
- [ ] Contact email (or alias)
