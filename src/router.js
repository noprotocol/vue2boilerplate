import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: Homepage }
    ]
})

export default router
