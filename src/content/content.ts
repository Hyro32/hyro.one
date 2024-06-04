import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    decription: z.string(),
    date: z.date()
  })
})

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
})

export const collections = {
  blog: blogCollection,
  thoughts: thoughtsCollection
}
