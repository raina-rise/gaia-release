import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Raina Gaia',  
  base: '/gaia-release/', 
  description: '大规模图形渲染工具',
  srcDir: './docs',

  head:[
    'script',
    {
        defer: true,
        'data-website-id':'24f5eed9-7f4b-42e4-a1d2-8d3247e67163',
        src: 'https://cloud.umami.is/script.js'
    }
  ],

  locales: {
    root: {
        label: '简体中文',
        lang: 'zh',
        themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                { text: '指南', link: '/guide/what-is-rainagaia' },
                { text: 'API参考', link: '/api-reference/server-api' }
            ],
            sidebar: {
                '/': [
                    {
                        text: '简介',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: '什么是 Raina Gaia?', link: '/guide/what-is-rainagaia' },
                            { text: '快速开始', link: '/guide/quick-start'}
                        ]
                    },
                    {
                        text: '服务端渲染引擎',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: '使用场景', link: '/guide/server-usage-scenarios' },
                            { text: '解决的问题', link: '/guide/server-solved-problem'},
                            { text: '其他说明', link: '/guide/server-other-notes'}
                        ]
                    },
                    {
                        text: '客户端渲染引擎',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: '使用场景', link: '/guide/client-usage-scenarios' },
                            { text: '解决的问题', link: '/guide/client-solved-problem' }
                        ]
                    }
                ],
                '/api-reference/': [
                    {
                        text: 'API参考',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: '服务端API', link: '/api-reference/server-api' },
                            { text: '客户端API', link: '/api-reference/client-api' }
                        ]
                    }
                ]
            },
          },
    },
    en: {
        label: 'English',
        lang: 'en',
        link: '/en/',
        themeConfig: {
            search :{
                provider: 'local',
            },
            nav: [
                { text: 'Home', link: '/en/' },
                { text: 'Guide', link: '/en/guide/what-is-rainagaia'},
                { text: 'API Reference', link: '/en/api-reference/server-api' },
            ],
            sidebar: {
                '/en/guide/': [
                    {
                        text: 'Introduction',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: 'What is Raina Gaia?', link: '/en/guide/what-is-rainagaia' },
                            { text: 'Quick Start', link: '/en/guide/quick-start' },
                        ]
                    },
                    {
                        text: 'Gaia-server',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            // { text: 'Overview', link: '' },
                            // { text: 'Usage scenarios', link: ''}
                        ]
                    },
                    {
                        text: 'Gaia-client',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            // { text: 'Overview', link: '' },
                            // { text: 'Usage scenarios', link: '' },
                        ]
                    } 
                ],
                '/en/api-reference/':[
                    {
                        text: 'API Reference',
                        collapsible: true,
                        collapsed: false,
                        items: [
                            { text: 'Server API Reference', link: '/en/api-reference/server-api' },
                            { text: 'Client API Reference', link: '/en/api-reference/client-api' },
                        ]
                    }
                ]
            },
          },
    }
  },

  themeConfig:{
    search:{
        provider: 'local'
    },
    footer: {
        message: 'Raina Gaia Released.',
    },
    socialLinks: [
        {
            icon: 'github',
            link: 'https://github.com/raina-rise/gaia-release'
        }
    ]
  }
});
