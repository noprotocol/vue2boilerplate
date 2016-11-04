import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueRx from 'vue-rx'
import {Observable} from "rxjs/Observable"
import {Subscription} from "rxjs/Subscription"

Vue.use(VueRx, {Observable, Subscription})

import App from './components/App'

const app = new Vue(App)
app.$mount('my-app')

if (INJECT_WEBPACK_DEV_SERVER_SCRIPT && location.hostname === 'localhost') {
    // Inject th livereload script it's not embedded into the bundle
    const s = document.createElement('script')
    s.async = true
    s.src = 'http://localhost:8080/webpack-dev-server.js'
    document.head.appendChild(s)
}
