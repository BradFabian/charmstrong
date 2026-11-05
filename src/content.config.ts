import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const beers = defineCollection({
  loader: file('src/content/beers.json'),
  schema: z.object({
    name: z.string(),
    /** Display order on the Beers page. */
    order: z.number().int(),
    /** Up to two short lines printed on the placeholder can. */
    canLabel: z.array(z.string()).min(1).max(2),
    canColor: z.enum(['cream', 'pub', 'malt', 'celtic']),
    style: z.string(),
    description: z.string(),
    /** null means the value varies by release. */
    abv: z.number().nullable(),
    ibu: z.number().nullable(),
    tastingNotes: z.array(z.string()),
    ingredients: z.array(z.string()),
    availability: z.string(),
  }),
});

export const collections = { beers };
