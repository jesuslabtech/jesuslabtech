import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        lang: z.enum(['en', 'es']).default('es'),
        author: z.string().default('Jesús Merlo'),
        email: z.string().email().default('jesus.lab.tech@gmail.com'),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: 'Invalid date format',
        }),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
        coverImage: z.string().optional(),
    }), 
});

export const collections = { posts };
