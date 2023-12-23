import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel/serverless'

import path from 'node:path'
import { fileURLToPath } from 'node:url'
const _dirname = path.dirname(fileURLToPath(import.meta.url))

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
    },
    resolve: {
      alias: {
        'astro-heroicons': path.resolve(
          _dirname,
          './node_modules/astro-heroicons'
        )
      }
    }
  },
  adapter: vercel()
})
