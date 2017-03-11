import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import focus from '@/components/focus'
import column from '@/components/column'
import article from '@/components/article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },

    {
      path: '/login',
      component: login
    },

    {
      path: '/focus',
      component: focus
      },

    {
      path: '/column',
      component: column
        },
     {
      path: '/article/:id',
      component: article
        }

  ]
})
