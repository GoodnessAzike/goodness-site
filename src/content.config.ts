import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Add a new Mission File by adding a .md file to src/content/missions/
const missions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/missions' }),
  schema: z.object({
    title: z.string(),
    // Put the image in public/diagrams/ and write its path here, e.g. /diagrams/my-pipeline.svg
    image: z.string(),
    // Describe the image for people using screen readers
    alt: z.string(),
    // The plain-English "what this shows" note
    whatThisShows: z.string(),
    // true = shows on the Home page (keep it to 3)
    featured: z.boolean().default(false),
    // Lower numbers show first
    order: z.number().default(100),
    // true = shows a "sample, replace me" tag
    sample: z.boolean().default(false),

    // ── The three required headings. Every Mission File page has them, in this order. ──
    // "What is causing this?": the problem, and what produces it, not just what is visible
    cause: z.string().min(1, 'Every Mission File needs "What is causing this?" (the cause field)'),
    // "How is it all connected?": a short note that goes with the diagram
    connected: z.string().min(1, 'Every Mission File needs "How is it all connected?" (the connected field)'),
    // "What ripples?": what happens to the whole system if one part changes,
    // including second, third and fourth order effects. Blank line = new paragraph.
    ripples: z.string().min(1, 'Every Mission File needs "What ripples?" (the ripples field)'),

    // Which of the three are still drafts. Shows a "DRAFT, edit me" badge while you work
    // locally (npm run dev). Remove a name from this list once you have rewritten it.
    drafts: z.array(z.enum(['cause', 'connected', 'ripples'])).default([]),
    // Optional: an animated diagram instead of the image (only 'scenario-2' exists so far)
    diagram: z.enum(['scenario-2']).optional(),
    // Optional quote at the bottom of the page
    quote: z.object({ text: z.string(), source: z.string() }).optional(),
  }),
});

// Bookshelf on the Episodes page. Add a book by adding a .md file to src/content/books/
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    // One line: the idea that shaped my diagram this week. Leave '' until written.
    idea: z.string().default(''),
    // Lower numbers show first
    order: z.number().default(100),
  }),
});

// Add a new Episode by adding a .md file to src/content/episodes/
// Every episode starts with three required fields, in this order:
//   question, started, ended
// Then the body: the diagram (optional `diagram`) and the steps (the text below the --- lines).
// Not written yet? Put "DRAFT, edit me". It shows locally with a badge and is hidden on the live site.
const DRAFT = 'DRAFT, edit me';
const required = (name: string) => z.string().min(1, `Every Episode needs "${name}" (write "${DRAFT}" if it is not written yet)`);
const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    season: z.number(),
    episode: z.number(),
    title: z.string(),
    // 1. "The question": one simple question that starts the episode,
    //    e.g. How does a pipeline catch refunds without breaking history?
    question: required('The question'),
    // 2. "Where I started": the problem
    started: required('Where I started'),
    // 3. "Where I ended": what I can do now that I couldn't before
    ended: required('Where I ended'),
    // Optional: the diagram at the top of the body (only 'scenario-2' exists so far)
    diagram: z.enum(['scenario-2']).optional(),
    // Optional line shown under the title, e.g. "Part 1 of 6: ..."
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    // The "what I learn next" line
    cliffhanger: z.string(),
    // Link to the Medium post. Leave empty until it is published.
    medium: z.string().default(''),
    // Optional: the Mission File this episode produced (its file name, e.g. scenario-2)
    missionFile: reference('missions').optional(),
    // Optional: the book whose idea shaped it (its file name in src/content/books/)
    book: reference('books').optional(),
    // Optional: your own recording of this episode, e.g. /audio/s01e05.m4a (file in public/audio/).
    // Without it, the Listen button reads the episode in the browser's voice.
    audio: z.string().optional(),
    sample: z.boolean().default(false),
  }),
});

// Add a new Project by adding a .md file to src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Tools used, e.g. [Python, SQL, Postgres]
    stack: z.array(z.string()).default([]),
    // GitHub repo link. Leave empty until the repo is public.
    github: z.string().default(''),
    // true = shows a "Still building" tag
    building: z.boolean().default(false),
    order: z.number().default(100),
    sample: z.boolean().default(false),
  }),
});

export const collections = { missions, episodes, projects, books };
