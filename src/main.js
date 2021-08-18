import Vue from 'vue'
import App from './App.vue'

import vueLoopMarquee from './lib/index.js'
Vue.use(vueLoopMarquee)

new Vue({
  render: h => h(App),
}).$mount('#app')
