import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import vercel from '@astrojs/vercel/static'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { languages, defaultLang } from './src/i18n/languages'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro']
    }),
    mdx(),
    tailwind(),
    icon()
  ],
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages)
  }
})
