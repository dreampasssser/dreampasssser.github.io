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
    text: '算法',
    link: '/算法/'
  }
]

export default {
  lang: 'zh-CN',
  title: "Dreampasssser's Blog",
  description: 'A VitePress site',
  themeConfig: {
    nav,
    sidebar: 'auto'
  }
}
