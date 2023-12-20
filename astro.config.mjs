import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      themes: ['one-dark-pro']
    }),
    mdx()
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  }
})
