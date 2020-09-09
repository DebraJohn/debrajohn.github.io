import Vue from 'vue'
import App from './App.vue'
import router from './router'
import API from '@/core/api'
window.API = API

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
