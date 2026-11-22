# DECISIONS.md

A dated log of design and content decisions for goodnessazike.com. Newest at the bottom.
Add an entry whenever a design or content decision is made.

Format: date, the decision, and why (if known).

---

## 2026-11-20: Thriller theme
Suspense thriller style: dark blueprint navy, a countdown-clock feel, blueprint-style diagrams,
red-pen handwritten notes. Style only: no real show posters, show images or show logos.
Why: to show how she thinks and learns in a way that is memorable, not a generic template.

## 2026-11-20: Hosting on Cloudflare
Chosen as Cloudflare Pages (build `npm run build`, output `dist`, no GitHub Pages base path),
with the code on GitHub. In the dashboard the project was created as a Cloudflare Worker connected
to the GitHub repo, which works the same way: every push to `main` deploys. Custom domain
goodnessazike.com bought on Cloudflare and connected the same day.

## 2026-11-20: Theme Songs link out only, no hosted audio
Songs link out to Spotify or YouTube. The site never embeds or hosts music.
(Later renamed "Songs I listen to". Her own voice recordings are a separate case: hosting her own
audio for the About film and episode read-outs was agreed.)

## 2026-11-21: Mission File template
Every Mission File page has three headings, in this order:
1. What is causing this? (the problem, and what produces it, not just what is visible)
2. How is it all connected? (the diagram)
3. What ripples? (what happens to the whole system if one part changes, including second,
   third and fourth order effects)
They are required fields in the content collection, so the build fails if one is missing.
Scenario 2 (Stripe to S3 with a 3-day lookback) is the first real Mission File, with draft text
marked "DRAFT, edit me" for her to rewrite.
