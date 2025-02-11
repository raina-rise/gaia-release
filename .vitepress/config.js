import { defineConfig } from 'vite';

export default defineConfig({
  title: 'Raina Gaia',  
  base: '/gaia-release',
  description: '大规模图形渲染工具', 
  srcDir: './docs',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Server Guide', link: '/server/'},
        { text: 'Client Guide', link: '/client/' },
    ],
    sidebar: {
        '/': [{ text: 'What is Raina Gaia?', link: '/'}],
        '/server/': [
            {text: 'Quick Start', link: '/server/quick-start'},
            {text: 'API Reference', link: '/server/api-reference'},
            {text: 'Other Notes', link: '/server/other-notes'},
            {text: 'About', link: '/server/about'},   
        ],
        '/client/':[
        ]
    },
    footer: {
      message: 'Raina Gaia Released.',
    },
  },

});
