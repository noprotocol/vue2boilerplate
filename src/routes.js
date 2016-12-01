import Homepage from './components/Homepage'
import NotFound from './components/NotFound'

const routes = [
    { path: '/', component: Homepage },
    { path: '*', component: NotFound }
]

export default routes