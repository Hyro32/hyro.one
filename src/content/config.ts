import { defineCollection, z } from 'astro:content'

const siteCollection = defineCollection({
  schema: z.object({
    title: z.string()
  })
})

export const collections = { site: siteCollection }
