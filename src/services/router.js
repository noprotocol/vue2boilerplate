import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: routes
})

export default router
