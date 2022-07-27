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

module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: "Dreampasssser's Blog",
  description: 'A VitePress site',
  themeConfig: {
    nav,
    sidebar: 'auto'
  }
}
