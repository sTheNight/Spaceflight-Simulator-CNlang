import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "航天模拟器汉化包",
  lang: 'zh-CN',
  description: 'Simplified Chinese language pack for Spaceflight simulator',
  lastUpdated: true,
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '了解详细', link: '/get' }
    ],

    sidebar: [
      {
        text: 'Gei it',
        items: [
          { text: '了解详细', link: '/get' },
          { text: '更新日志', link: '/changelog' },
          { text: '关于更多', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang' }
    ],
    
    footer: {
      message: 'Released under the MIT License'
    },
    
    lastUpdated: {
      text: '此文章上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
