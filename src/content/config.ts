import { defineCollection, z } from 'astro:content'

const siteCollection = defineCollection({
  schema: z.object({
    title: z.string()
  })
})

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    githubUsername: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = { site: siteCollection, blog: blogCollection }
