import Vue from 'vue'
import App from './App.vue'

import vueMarquee from './components/lib/marquee'
Vue.use(vueMarquee)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
