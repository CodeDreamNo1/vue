// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'muse-components/styles/base.less' // 加载基础的样式
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
Vue.component(appBar.name, appBar)
Vue.component(avatar.name, avatar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
