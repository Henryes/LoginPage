import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons/index.js'
import '@/styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})