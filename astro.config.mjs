import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel/static'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro']
    }),
    mdx(),
    tailwind()
  ],
  adapter: vercel()
})
