import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Variables from './config/variables'

global.Variables = Variables

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
