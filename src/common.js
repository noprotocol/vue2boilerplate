import 'babel-polyfill' // IE11 compatibility
// Import vendor scripts here to speed up compilation.
import 'vue'
import 'vue-router'
import 'vuex'
import 'vuex-router-sync'
import 'vue-rx'
import 'rxjs/Observable'
import 'rxjs/Subscription'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/toPromise'
import Promise from 'promise-polyfill'; 

if (!window.Promise) {
  window.Promise = Promise;
}

if (IS_PRODUCTION === false) {
    // Import styles (with large assets) that slow down the compilation. 
    require('./sass/main.scss')
}
