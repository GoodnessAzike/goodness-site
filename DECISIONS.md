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

## 2026-11-21: About page opens with a 10-second silent film
A short visual story at the top of About, no voice needed: letterbox and film grain, her childhood
photo (as an old tilted print on wide screens, full frame on phones) with "It started here.", quick
title cards through her real milestones (Maths teacher and book, Food Technology Distinction,
supervisor, telesales, bank desk, Verification Analyst, Team Lead, MSc Distinction), then
"Data Engineer." and the end title. Plays once when scrolled into view, with Watch again.
Caption wording is a draft for her to edit. The longer voice film stays planned for later.

## 2026-11-21: More of her photos in the opening film
Added three of her photos as film beats: her Leeds Trinity graduation speech (MSc, Distinction),
her BCSWomen Lovelace poster selfie (flipped so the poster reads the right way), and her Teens in AI
SDGs talk (cropped to show only her, so no teenagers' faces appear on the site). All photos are
resized and stripped of hidden metadata (the poster selfie had GPS location). The film is now about
15 seconds. "The Big Picture" presentation photo is held back until she says what it was.

## 2026-11-21: Leaves scattered across the grey branches
The glowing leaves no longer sit on their own short stems near the start. Each one sits on an
existing grey branch, spread across the whole past side of the drawing, clear of her path, the
MSc line and every milestone label (on both the wide and phone layouts). They still run left to
right in time order: Maths teacher, Food Technology, Supervisor, Outbound telesales.

## 2026-11-21: Opening film rebuilt as a thriller opening, with our own score
The About opening film now plays like a TV thriller opener (in our own style, nothing copied from
any show): an amber typewriter line "The following events are real.", a seven-segment clock that
ticks in the bottom letterbox bar, her childhood photo, a quad split screen of the paths she has
crossed, fast cuts (bank desk, Verification Analyst, Team Lead), a three-way split of her photos,
"Data Engineer." as the clock freezes, then a GOODNESS title slam with a screen shake.
Original score made live in the browser with Web Audio (no audio files, nothing copyrighted):
low hum, a heartbeat that speeds up, a tick each second, hits on every cut, two beeps when the
clock freezes, and a boom on the title. It autoplays muted (browsers block autoplay sound);
"Sound on" restarts it with the score. All wording is a draft for her to edit.

## 2026-11-21: Film score is a heartbeat only
The layered score (hum, ticks, hits, beeps, boom) overlapped too much. The film now uses only a
heartbeat: slow at first, speeding up as the film builds, and stopping dead the moment the
GOODNESS title appears, so the title lands in silence.
