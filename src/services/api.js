import {Observable} from 'rxjs/Observable'

const api = {
    get(path) {
        return Observable.ajax.getJSON(path)
    },
    post(path, data) {
        return Observable.ajax.post(path, JSON.stringify(data, null, 4), {
            'Content-Type': 'application/json; charset=UTF-8'
        }).map(res => res.response)
    }
}

export default api
