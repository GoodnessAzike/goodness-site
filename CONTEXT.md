# CONTEXT.md

## What the site is

goodnessazike.com is Goodness Azike's job-search site as a data engineer. It shows how she learns
and thinks, not just what she has done: the workflows she draws, the problems she breaks down
(Mission Files), the series she writes on Medium (Episodes), and the pipelines she builds (Projects).

## Who it is for

Hiring managers. Someone deciding whether to interview her should be able to see, quickly,
how she understands a system, how she learns, and how to contact her.

## How it works

- **Astro**, built as a static site (`npm run build` → `dist/`). No backend.
- **Markdown content collections**: Mission Files, Episodes, Projects and books are each a Markdown
  file, so new content is added by adding a file. Schemas live in `src/content.config.ts`.
- **GitHub to Cloudflare**: the repo `GoodnessAzike/goodness-site` is connected to Cloudflare.
  Pushing to `main` rebuilds and deploys the live site at https://goodnessazike.com.

See AGENTS.md for where everything lives and the rules for working on the site,
and DECISIONS.md for the decision log.
