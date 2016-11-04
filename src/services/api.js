import {Observable} from "rxjs/Observable";
const API_PATH = 'https://jsonplaceholder.typicode.com/'

const api = {
    get(path) {
        return Observable.ajax(API_PATH + path).map(res => res.response)
    }
}

api.users$ = api.get('users')
api.posts$ = api.get('posts')

export default api;