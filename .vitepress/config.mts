import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sport Club Corinthians Paulista",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

      nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],
  
    sidebar: [
      {
        text: 'Origem',
        items: [
          { text: 'Fundação e primeiros anos (1910–1929)', link: '/src/historia' },
          { text: 'Feitos marcantes', link: '/src/feitos' },
          { text: 'Conquistas', link: '/src/titulos' }

        ]
      },
      {
        text: 'Bastidores',
        items: [
          { text: 'Política interna', link: '/src/politica' },
          { text: 'Curiosidades', link: '/src/curiosidade' },
          { text: '', link: '' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
