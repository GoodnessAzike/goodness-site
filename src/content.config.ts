import { defineCollection } from 'astro:content';
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
  }),
});

// Add a new Episode by adding a .md file to src/content/episodes/
// The text below the --- lines becomes the episode notes.
const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    season: z.number(),
    episode: z.number(),
    title: z.string(),
    date: z.coerce.date(),
    // The "what I learn next" line
    cliffhanger: z.string(),
    // Link to the Medium post. Leave empty until it is published.
    medium: z.string().default(''),
    sample: z.boolean().default(false),
    // Optional whiteboard drawing that plays at the top of the episode page.
    // Each step becomes a box. `note` is an optional red side note.
    drawing: z
      .object({
        title: z.string(),
        steps: z.array(z.object({ label: z.string(), note: z.string().optional() })),
      })
      .optional(),
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
    order: z.number().default(100),
    sample: z.boolean().default(false),
  }),
});

export const collections = { missions, episodes, projects };
