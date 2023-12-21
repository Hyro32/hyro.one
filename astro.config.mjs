import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro']
    }),
    mdx()
  ]
})
