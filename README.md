# Goodness: personal site

Static site built with Astro. Live at https://goodnessazike.com (Cloudflare, rebuilds on every push to `main`).

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

### Start a new season

Each series is a season (Season 1 is Understanding S3). To start Season 2:
1. In `src/data/site.ts`, add a line under `seasons`, e.g. `2: { title: 'Understanding Lambda' },`
   Add `episodes: 6` (or however many) if you know how long the season will be.
2. Add `src/content/episodes/s02e01.md` with `season: 2` and `episode: 1`.

The Episodes page groups episodes by season, newest first. When a season's last episode is out,
the Home clock moves on to the next season's Episode 1.

### Add a Project

Copy a file in `src/content/projects/`. Update `title`, `summary`, `stack`, and `github`.

## Sound

### Listen to an episode
Every episode has a Listen button. It reads the episode in the browser's own voice.
To use your own recording instead, put the file in `public/audio/` (e.g. `s01e05.m4a`)
and add `audio: /audio/s01e05.m4a` to that episode's file. The button then says "Listen in my voice".

### The About page talk
1. Record yourself (60 to 90 seconds is plenty). An `.m4a` or `.mp3` from your phone is fine.
2. Put the recording and 4 to 8 photos in `public/talk/`.
3. In `src/data/site.ts`, fill in `talk`: the audio path, one line per photo with the second it should appear, and the transcript.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
