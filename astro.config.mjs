import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel/serverless'

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
      external: ['astro-heroicons']
    }
  },
  adapter: vercel()
})
