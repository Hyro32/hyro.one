import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro']
    }),
    mdx()
  ],
  vite: {
    ssr: {
      noExternal: ['astro-heroicons']
    }
  }
})
