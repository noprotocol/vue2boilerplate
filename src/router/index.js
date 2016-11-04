import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CounterVueStyle from '../components/CounterVueStyle.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: CounterVueStyle
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes
})

export default router
