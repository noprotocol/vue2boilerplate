import Vue from 'vue'
import CounterReactStyle from './components/CounterReactStyle'
import CounterVueStyle from './components/CounterVueStyle'

Vue.component('counter-vue-style', CounterVueStyle)

new Vue({
    el: document.querySelector('my-app'),
    render(h) {
        return <div>
            <CounterReactStyle label="Reacty" />
            <counter-vue-style label="Vuey" />
        </div>
    }
})

if (INJECT_WEBPACK_DEV_SERVER_SCRIPT && location.hostname === 'localhost') {
    const s = document.createElement('script')
    s.async = true
    s.src = 'http://localhost:8080/webpack-dev-server.js'
    document.head.appendChild(s)
}
