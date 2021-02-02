import Vue from 'vue'
import App from './App.vue'

import vueLoopMarquee from './lib/index'
Vue.use(vueLoopMarquee);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
