import { OGImageRoute } from 'astro-og-canvas'
import { getCollection } from 'astro:content'

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: async () => await getCollection('blog'),
  getImageOptions: async (_, { data }) => {
    return {
      title: data.title,
      description: data.description,
      dir: 'ltr',
      logo: {
        path: './src/pages/open-graph/_images/logo.png',
        size: [300]
      },
      border: { width: 32, side: 'inline-start' },
      padding: 80,
      bgImage: {
        path: './src/pages/open-graph/_images/background.png'
      },
      font: {
        title: {
          size: 72,
          lineHeight: 1.2,
          families: ['Inter', 'Noto Sans'],
          weight: 'Medium',
          color: [255, 255, 255]
        },
        description: {
          size: 42,
          lineHeight: 1.2,
          families: ['Inter', 'Noto Sans'],
          weight: 'Normal',
          color: [191, 193, 201]
        }
      },
      fonts: [
        './src/pages/open-graph/_fonts/inter/inter-400-normal.ttf',
        './src/pages/open-graph/_fonts/inter/inter-500-normal.ttf',
        './src/pages/open-graph/_fonts/noto-sans/noto-400-normal.ttf',
        './src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf'
      ]
    }
  }
})
