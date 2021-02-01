import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index'
        },
        {
            name:'index',
            path:'/index',
            component:resolve => require(['../components/index'])
        }
    ]
});