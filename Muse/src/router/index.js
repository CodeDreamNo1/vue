import Vue from 'vue'
import Router from 'vue-router'



import home from '@/components/home'
import tolpic from '@/components/tolpic/tolpic'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tolpic',
      name: 'tolpic',
      component: tolpic
    }
  ]
})
