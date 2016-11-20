import {Observable} from 'rxjs/Observable'

const api = {
    get (path) {
        return Observable.ajax(path).map(res => res.response)
    }
}

export default api
