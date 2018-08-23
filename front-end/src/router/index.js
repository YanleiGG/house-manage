import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/main'
import Apply from '@/components/apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'apply',
          component: Apply
        }
      ]
    }
  ]
})
