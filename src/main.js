import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import vant from '@/plugins/vant'
Vue.config.productionTip = false
Vue.use(vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
