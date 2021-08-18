import "./components/main.css";
import vueLoopMarquee from './components/main.vue'
import _Vue from 'vue'

vueLoopMarquee.install = Vue => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    Vue.component(vueLoopMarquee.name,vueLoopMarquee)
}

export default vueLoopMarquee

