import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Jade from '@/components/Jade'
import Contact from '@/components/Contact'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main/:projectfilter?',
      alias: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/jade',
      name: 'Jade',
      component: Jade
    } ,
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/project/:name',
       name: 'Project',
      component: Project
    }
  ]
})


