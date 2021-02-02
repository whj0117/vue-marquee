import Vue from 'vue'
import App from './App.vue'

import vueMarquee from './lib'
Vue.use(vueMarquee)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
