# AGENTS.md

Guide for anyone (person or AI agent) working on this repo. Read CONTEXT.md for what the
site is and who it is for, and DECISIONS.md for why things are the way they are.

## Rules

1. **Never invent facts about Goodness.** Use only her own words: her messages, her Medium posts,
   her LinkedIn, her GitHub. If something is unknown, leave a placeholder and ask.
2. **Mark placeholders clearly.**
   - Missing content: use the `Placeholder` component (`src/components/Placeholder.astro`).
     It shows a dashed "Placeholder: ..." box while working locally and nothing on the live site.
   - Draft wording she still needs to rewrite: mark it with `DraftMark`
     (`src/components/DraftMark.astro`), or for Mission Files list the field in `drafts:`.
     The "DRAFT, edit me" badge shows locally only.
   - Sample entries: `sample: true` in the frontmatter. Samples are hidden on the live site.
3. **Use the frontend-design skill** for every visual design decision. Avoid generic template looks.
4. **Keep the build passing.** Run `npm run build` before every commit. It must finish without errors
   and output to `dist/`.
5. **Log decisions.** Whenever Goodness makes a design or content decision, add a dated entry to
   DECISIONS.md (newest at the bottom).
6. Write in her voice when drafting copy: plain, honest, first person, short sentences, no em dashes.

## Where everything lives

| What | Where |
|---|---|
| Pages | `src/pages/`: `index.astro` (Home), `episodes.astro`, `projects.astro`, `about.astro`, `mission-files/index.astro` (grid), `mission-files/[id].astro` (Mission File template) |
| Shared layout, header, footer | `src/layouts/Base.astro`, `src/components/Header.astro`, `src/components/Footer.astro` |
| Content collections (schemas) | `src/content.config.ts` |
| Mission Files | `src/content/missions/*.md`. Required headings: `cause` (What is causing this?), `connected` (How is it all connected?), `ripples` (What ripples?) |
| Episodes | `src/content/episodes/sNNeNN.md` (season, episode, Medium link, cliffhanger, optional `missionFile` and `book` links) |
| Projects | `src/content/projects/*.md` |
| Bookshelf | `src/content/books/*.md` (title, author, one-line idea) |
| Her details, seasons, clock, How I think, Outside work, About film | `src/data/site.ts` |
| Songs I listen to, favourite quote | `src/data/songs.ts` |
| What people say (real quotes only) | `src/data/testimonials.ts` |
| Scenario 2 diagram coordinates (shared) | `src/data/scenario2.ts` |
| Diagrams and images | `public/diagrams/` |
| Book PDFs | `public/books/` |
| Episode recordings, About film audio and photos | `public/audio/`, `public/talk/` |
| CV | `public/cv.pdf` (still a placeholder) |
| Global styles and colour tokens | `src/styles/global.css` |
| Browser scripts (clock sound, iPhone audio unlock) | `src/scripts/` |
| Site address and build output | `astro.config.mjs` (`site: https://goodnessazike.com`, output `dist`) |

## Commands

```
npm install
npm run dev      # local preview at http://localhost:4321, shows placeholders and DRAFT badges
npm run build    # production build into dist/, placeholders hidden
```

## Deploy

GitHub repo `GoodnessAzike/goodness-site` is connected to Cloudflare. Every push to `main`
rebuilds and deploys to https://goodnessazike.com (also goodness-site.goodnessazike.workers.dev).
