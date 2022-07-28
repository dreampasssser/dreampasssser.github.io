const nav = [
  {
    text: 'Vue',
    link: '/Vue/'
  },
  {
    text: 'React',
    link: '/React/'
  },
  {
    text: 'Algorithm',
    link: '/Algorithm/'
  }
]

export default {
  base: '/',
  lang: 'zh-CN',
  title: "Dreampasssser's Blog",
  description: 'A VitePress site',
  themeConfig: {
    nav,
    sidebar: 'auto',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dreampasssser/blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present dreampasssser'
    }
  }
}
