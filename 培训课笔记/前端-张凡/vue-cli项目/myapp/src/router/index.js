import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Help from '@/components/Help'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 路由为/，需要显示主页
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      // 路由为/，需要显示主页
      name: 'Help',
      component: Help
    },
    {
      path: '/list',
      // 路由为/，需要显示主页
      name: 'List',
      component: List
    },

  ]
})
