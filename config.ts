import { z, defineCollection, reference } from 'astro:content';

const links = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    link: z.optional(z.string()),
    description: z.string()
  }),
});

const starterCodes = defineCollection({
  type: 'content',
});

const preCodes = defineCollection({
  type: 'content',
});

const postCodes = defineCollection({
  type: 'content',
});

const problems = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    tags: z.array(z.string()).optional(),
    languages: z.record(
      z.string(), // language ID (e.g. "python", "javascript")
      z.object({
        entryPoint: z.string(),
        starterCodeId: reference('starterCodes').optional(),
        preCodeId: reference('preCodes').optional(),
        postCodeId: reference('postCodes').optional(),
      })
    ),
  })
});

const testcases = defineCollection({
  type: 'data',
  schema: z.object({
    input: z.any(),
    expected: z.any(),
    hidden: z.boolean().optional().default(false),
  })
});

export const collections = { links, problems, testcases, starterCodes, preCodes, postCodes };
