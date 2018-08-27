import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/main'
import Apply from '@/components/apply'
import Manage from '@/components/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: 'apply',
          component: Apply
        },
        {
          path: 'manage',
          component: Manage
        }
      ]
    }
  ]
})
