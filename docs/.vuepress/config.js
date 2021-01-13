module.exports = {
  title: '快乐摸鱼',
  description: 'Just Do It',
  dest: './dist',
  theme: '@vuepress/blog',
  head: [
    ['link', { rel: 'icon', href: '/xhj1.jpg' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [{
      text: '快乐摸鱼', link: 'https://stackoverflow.com/questions'
    }, {
      text: 'GitHub', link: 'https://github.com/hello-hyh'
    }]
  }
}