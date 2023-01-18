import { defineConfig } from 'vitepress'
import katex from 'katex'
import texmath from 'markdown-it-texmath'
import customElements from './custom-elements'

const nav = [
  // { text: 'Vue', link: '/Vue/' },
  // { text: 'React', link: '/React/' },
  // { text: 'Algorithm', link: '/Algorithm/' },
  {
    text: 'LaTeX In Markdown',
    link: '/latex/basics',
    activeMatch: '/latex/'
  },
  // {
  //   text: 'Others',
  //   items: [
  //     { text: 'TODO_1', link: '/Others/TODO_1' },
  //     { text: 'TODO_2', link: '/Others/TODO_2' }
  //   ]
  // }
]

const sidebar = {
  '/latex/': [
    {
      text: 'LaTeX In Markdown',
      items: [
        { text: '基础', link: '/latex/basics' },
        { text: '字体', link: '/latex/fonts' },
        { text: '希腊字母', link: '/latex/greek-letters' },
        { text: '标准函数名', link: '/latex/standard-function-names' },
        { text: '特殊符号', link: '/latex/special-symbols' },
        { text: '高级用法', link: '/latex/advanced-usage' }
      ]
    }
  ]
}

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "Dreampasssser's Blog",
  description: 'A VitePress site',
  // lastUpdated: true,
  cleanUrls: 'without-subfolders',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css'
      }
    ]
  ],
  markdown: {
    headers: {
      level: [0, 0]
    },
    config: (md) => {
      md.use(texmath, {
        engine: katex,
        delimiters: 'dollars',
        katexOptions: { macros: { '\\RR': '\\mathbb{R}' } }
      })
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  themeConfig: {
    nav,
    sidebar,
    outline: [2, 4],
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dreampasssser/dreampasssser.github.io'
      }
    ],
    footer: {
      copyright: 'Copyright © 2022-present dreampasssser'
    }
  }
})