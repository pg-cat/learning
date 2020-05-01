export default {
  singular: true,
  plugins: [
    ['umi-plugin-react',
      {
        antd: true,
        dva: true,
        locale: {
          enable: true
        }
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: './index'
    },
    {
      path: '/hello',
      component: './hello/index',
    },
    {
      path: '/admin',
      component: '../layout',
      routes: [
        {
          path: '/admin',
          component: './list/index'
        },
        {
          path: '/admin/index',
          component: './index'
        },
        {
          path: '/admin/puzzlecards',
          component: './dashboard/puzzlecards'
        },
        {
          path: '/admin/dashboard',
          routes: [
            { path: '/admin/dashboard/analysis', component: './dashboard/Analysis' },
            { path: '/admin/dashboard/monitor', component: './dashboard/Monitor' },
            { path: '/admin/dashboard/workplace', component: './dashboard/Workplace' }
          ]
        }
      ]
    }
  ],
  proxy: {
    'dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true
    }
  },
  // 加入 theme 定义
  theme: {
    // 绿色
    "@primary-color": "#30b767",
  }
}

// exports.routes = [
//   {
//     path: '/',
//     component: 'App',
//     routes: [{
//       path: 'list',
//       component: 'List'
//     },
//     {
//       path: 'admin',
//       component: 'Admin'
//     }]
//   },
//   {
//     path: '/user',
//     component: 'User'
//   }
// ];