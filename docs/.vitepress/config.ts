import { defineConfig } from 'vitepress'
import katex from 'katex'
import texmath from 'markdown-it-texmath'
import customElements from './custom-elements'

const nav = [
  // { text: 'Vue', link: '/Vue/' },
  // { text: 'React', link: '/React/' },
  // { text: 'Algorithm', link: '/Algorithm/' },
  {
    text: 'DevOps',
    link: '/devops/set-up-ci-cd-env',
    activeMatch: '/devops/',
  },
  {
    text: 'LaTeX In Markdown',
    link: '/latex/basics',
    activeMatch: '/latex/',
  },
  // {
  //   text: 'Interview',
  //   items: [
  //     {
  //       text: '手撕代码',
  //       link: '/interview/handwrite-code/currying-of-function'
  //     }
  //   ],
  //   activeMatch: '/interview/'
  // },
  {
    text: 'Others',
    link: '/others/install-config-ohmyzsh-on-ubuntu',
    activeMatch: '/others/',
  },
]

const sidebar = {
  '/devops/': [
    {
      text: 'DevOps',
      items: [
        {
          text: '用 Docker-Nginx-Jenkins-Gitlab 搭建 CI/CD 环境',
          link: '/devops/set-up-ci-cd-env',
        },
      ],
    },
  ],
  '/latex/': [
    {
      text: 'LaTeX In Markdown',
      items: [
        { text: '基础', link: '/latex/basics' },
        { text: '字体', link: '/latex/fonts' },
        { text: '希腊字母', link: '/latex/greek-letters' },
        { text: '标准函数名', link: '/latex/standard-function-names' },
        { text: '特殊符号', link: '/latex/special-symbols' },
        { text: '高级用法', link: '/latex/advanced-usage' },
      ],
    },
  ],
  // '/interview/': [
  //   {
  //     text: '手撕代码',
  //     items: [
  //       {
  //         text: '函数柯里化',
  //         link: '/interview/handwrite-code/currying-of-function'
  //       },
  //       {
  //         text: 'call、apply 与 bind',
  //         link: '/interview/handwrite-code/call-apply-bind'
  //       },
  //       {
  //         text: '防抖与节流',
  //         link: '/interview/handwrite-code/debounce-throttle'
  //       },
  //       {
  //         text: 'promise',
  //         link: '/interview/handwrite-code/promise'
  //       },
  //       {
  //         text: '扁平结构转树状结构',
  //         link: '/interview/handwrite-code/array-to-tree'
  //       }
  //     ]
  //   }
  // ],
  '/others/': [
    {
      text: 'Others',
      items: [
        {
          text: 'Ubuntu 上安装、配置 oh-my-zsh',
          link: '/others/install-config-ohmyzsh-on-ubuntu',
        },
        {
          text: 'nodejs 版本管理',
          link: '/others/nodejs-version-management',
        },
        // { text: 'TODO', link: '/others/TODO' }
      ],
    },
  ],
}

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "Dreampasssser's Blog",
  description: 'A VitePress site, markdown中的数学公式, LaTeX, nodejs版本管理',
  // lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'keywords', content: 'LaTeX In Markdown, nodejs版本管理' }],
    ['link', { rel: 'icon', href: '/K.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/katex/katex.min.css',
        // href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
        // href: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.8/katex.min.css'
      },
    ],
  ],
  markdown: {
    // theme: 'one-dark-pro',
    // lineNumbers: true,
    headers: {
      level: [0, 0],
    },
    config: (md) => {
      md.use(texmath, {
        engine: katex,
        delimiters: 'dollars',
        katexOptions: { macros: { '\\RR': '\\mathbb{R}' } },
      })
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    nav,
    sidebar,
    outline: [2, 4],
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dreampasssser/dreampasssser.github.io',
      },
    ],
    footer: {
      copyright: 'Copyright © 2022-present dreampasssser',
    },
  },
})
