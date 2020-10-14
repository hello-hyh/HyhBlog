module.exports = {
  title: 'Hello World',
  description: 'Just Do It',
  dest: './dist',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: {
      '/frontend/': [
        {
          title: 'frontend',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            'vue-docs',
            'essays',
            'interview'
          ]
        }
      ],
      '/backend/': [
        {
          title: 'backend',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,
          children: [
            'cs'
          ]
        }
      ]
    },
    nav: [{
      text: '前端', link: '/frontend/'
    }, {
      text: '后端', link: '/backend/cs'
    }]
  }
}