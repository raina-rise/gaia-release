import { defineConfig } from 'vite';

export default defineConfig({
  title: 'raina-gaia',  
  description: '大规模图形渲染工具', 
  srcDir: './docs',
  themeConfig: {
    nav: [
        { text: 'Overview', link: '/' },
        { text: 'Server Docs', link: '/server/'},
        { text: 'Client Docs', link: '/client/' },
    ],
    sidebar: {
        '/': [{ text: 'Overview', link: '/'}],
        '/server/': [
            {text: 'Quick Start', link: '/server/quick_start'},
            {text: 'API Reference', link: '/server/api_reference'},
            {text: 'Other Notes', link: '/server/other_notes'},
            {text: 'About', link: '/server/about'},   
        ],
        '/client/':[

        ]
    },
    footer: {
      message: 'raina-gaia release',
    },
  },

});
