import { defineCollection, z } from 'astro:content';

// Film schema
const movieSchema = z.object({
    title: z.string(),
    year: z.number(),
    score: z.number().min(1).max(10),
    genre: z.string(),
    poster: z.string().optional(),
    review: z.string(),
    director: z.string().optional(),
});

// Film koleksiyonu - dizi olarak
const moviesCollection = defineCollection({
    type: 'data',
    schema: z.array(movieSchema),
});

// Oyun schema
const gameSchema = z.object({
    title: z.string(),
    year: z.number(),
    score: z.number().min(1).max(10),
    platform: z.string(),
    cover: z.string().optional(),
    review: z.string(),
    genre: z.string().optional(),
});

// Oyun koleksiyonu - dizi olarak
const gamesCollection = defineCollection({
    type: 'data',
    schema: z.array(gameSchema),
});

// Proje schema
const projectSchema = z.object({
    title: z.object({
        tr: z.string(),
        en: z.string(),
    }),
    description: z.object({
        tr: z.string(),
        en: z.string(),
    }),
    github: z.string().url(),
    demo: z.string().url().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
});

// Proje koleksiyonu - dizi olarak
const projectsCollection = defineCollection({
    type: 'data',
    schema: z.array(projectSchema),
});

// Tech Stack schema
const techStackItemSchema = z.object({
    name: z.string(),
    category: z.enum(['language', 'frontend', 'backend', 'database', 'devops', 'tools']),
    icon: z.string().optional(),
    proficiency: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
    description: z.string().optional(),
});

// Tech Stack koleksiyonu - dizi olarak
const techStackCollection = defineCollection({
    type: 'data',
    schema: z.array(techStackItemSchema),
});

// Blog koleksiyonu
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

// Galeri schema
const galleryItemSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    date: z.string(),
    location: z.string().optional(),
    category: z.string().optional(),
});

// Galeri koleksiyonu - dizi olarak
const galleryCollection = defineCollection({
    type: 'data',
    schema: z.array(galleryItemSchema),
});

export const collections = {
    movies: moviesCollection,
    games: gamesCollection,
    projects: projectsCollection,
    'tech-stack': techStackCollection,
    blog: blogCollection,
    gallery: galleryCollection,
};
