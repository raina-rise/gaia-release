import { defineConfig } from 'vite';

export default defineConfig({
  title: 'Raina Gaia',  
  base: '/gaia-release/', 
  description: '大规模图形渲染工具',
  srcDir: './docs',

  locales: {
    root: {
        label: '简体中文',
        lang: 'zh',
        themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                { text: '服务端指南', link: '/server/'},
                { text: '客户端指南', link: '/client/' },
            ],
            sidebar: {
                '/': [{ text: '什么是 Raina Gaia?', link: '/'}],
                '/server/': [
                    {text: '概述', link:'/server/'},
                    {text: '快速开始', link: '/server/quick-start'},
                    {text: 'API 说明文档', link: '/server/api-reference'},
                    {text: '其他说明', link: '/server/other-notes'},  
                ],
                '/client/':[
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
                { text: 'Server Guide', link: '/en/server/'},
                { text: 'Client Guide', link: '/en/client/' },
            ],
            sidebar: {
                '/en/': [{ text: 'What Raina Gaia?', link: '/en/'}],
                '/en/server/': [
                    {text: 'Overview', link:'/en/server/'},
                    {text: 'Quick Start', link: '/en/server/quick-start'},
                    {text: 'API Reference', link: '/en/server/api-reference'},
                    {text: 'Other Notes', link: '/en/server/other-notes'},  
                ],
                '/en/client/':[
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
