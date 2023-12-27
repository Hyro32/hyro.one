import { defineCollection, z } from 'astro:content'

const siteCollection = defineCollection({
  schema: z.object({
    title: z.string()
  })
})

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tag: z.string()
  })
})

export const collections = { site: siteCollection, blog: blogCollection }
