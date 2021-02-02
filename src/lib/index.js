import './components/main.css'
import vueLoopMarquee from './components/main.vue'

const comment = {
    install : function (Vue) {
        Vue.component('vue-loop-marquee',vueLoopMarquee);
    }
};

if(typeof window !== 'undefined' && window.vue){
    window.Vue.use(comment);
}

export default comment