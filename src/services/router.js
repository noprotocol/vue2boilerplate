import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes'

Vue.use(VueRouter)

// Use <base>
var base = document.getElementsByTagName('base')[0].href;
let match = base.match(/^https?:\/\/[^\/]+\//)
if (match !== null) {
    base = base.substr(match[0].length - 1);
}
const router = new VueRouter({
    mode: 'history',
    base: base, 
    routes: routes
})

export default router
