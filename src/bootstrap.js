import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'
const app = new Vue({
    router,
    store,
    ...App
})

app.$mount('my-app')

if (INJECT_WEBPACK_DEV_SERVER_SCRIPT && location.hostname === 'localhost') {
    const s = document.createElement('script')
    s.async = true
    s.src = 'http://localhost:8080/webpack-dev-server.js'
    document.head.appendChild(s)
}
