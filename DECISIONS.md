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

## 2026-11-21: Projects page opens with a dance epigraph, after Alan Watts
Above the project cards: "You don't dance in order to finish the dance. You dance to be in the dance."
credited "After Alan Watts" (a paraphrase of his idea, so not presented as an exact quote).
Line beneath, marked DRAFT for her to edit: "Shipped or still building, the learning is the point."
Chosen over "Every project here is shipped" because both current projects are still being built.

## 2026-11-21: Epigraph made playful; credit reworded
The epigraph is set in the red-pen handwriting font, and every "dance" gently sways (still for
reduced motion). Credit changed from "After Alan Watts" to "Inspired by Alan Watts, philosopher",
because "After" read as if it were part of his name.

## 2026-11-21: "How I got here" becomes a life-paths drawing
Replaces the boxes-and-arrows career pipeline on About. Inspired by a Tim Urban (Wait But Why)
drawing she shared, redrawn in the site's style, not copied, and credited "Drawing inspired by
Tim Urban, Wait But Why." Her green path runs through her real milestones (customer-service desk,
Verification Analyst, Team Lead, MSc joining in) to TODAY as a Data Engineer. Grey lines are
paths closed to her. After TODAY the side starts empty and fills with green paths open to her.
The old CareerPipeline component is kept in the repo, unused, in case she wants it back.

## 2026-11-21: Glowing leaves for paths she has crossed
On the life-paths drawing, four grey branches end in a glowing leaf, in time order before the bank
(no years shown, to avoid age bias): Maths teacher (between schools, when she wrote her book),
Food Technology (HND, Distinction), Supervisor at Shandee's Fastfood, Outbound telesales at IrokoTV.
Tapping a leaf shows a short note that disappears after 5 seconds, so the drawing never gets
cluttered. The one-sentence notes are drafts for her to edit. The key gains "paths I've crossed
(tap a leaf)" and moves to the bottom-left on wide screens.
