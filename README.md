# Goodness: personal site

Static site built with Astro. Hosted on Cloudflare Pages.

## Run it on your computer

```
npm install
npm run dev      # opens a local preview at http://localhost:4321
npm run build    # builds the site into dist/
```

## Where your content lives

| What | Where |
| --- | --- |
| Name, intro lines, bio, LinkedIn, email, episode day and time | `src/data/site.ts` |
| Theme Songs (titles, links, notes) | `src/data/songs.ts` |
| Mission Files | `src/content/missions/` (one `.md` file each) |
| Episodes | `src/content/episodes/` (one `.md` file each) |
| Projects | `src/content/projects/` (one `.md` file each) |
| Diagram images | `public/diagrams/` |
| Your CV | `public/cv.pdf` (replace the placeholder file, keep the name) |

Anything left empty shows on the site as a dashed "Placeholder" box, so you can see what is still to do.
Sample entries have `sample: true` and show a "Sample, replace me" tag. Delete them or set `sample: false` once you have real content.

### Add a Mission File

1. Put your diagram in `public/diagrams/`, e.g. `my-pipeline.png`.
2. Copy any file in `src/content/missions/` and rename it.
3. Change `title`, `image` (e.g. `/diagrams/my-pipeline.png`), `alt`, and `whatThisShows`.
4. Set `featured: true` to show it on the Home page (keep it to 3).

### Add an Episode

Copy a file in `src/content/episodes/`, e.g. `s01e03.md`. Update `season`, `episode`, `title`, `date`,
`cliffhanger`, and `medium` (your Medium post link). Write your notes below the second `---` line.
The newest episode shows first, and the Home page clock shows the next episode number.

### Add a Project

Copy a file in `src/content/projects/`. Update `title`, `summary`, `stack`, and `github`.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
