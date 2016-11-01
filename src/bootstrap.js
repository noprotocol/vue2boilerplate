import Vue from 'vue'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

new Vue({
    el: document.querySelector('my-app'),
    render(h) {
        return <div>
            <Counter1 label="Counter1" />
            <Counter2 label="Counter2" />
        </div>
    }
})
            
