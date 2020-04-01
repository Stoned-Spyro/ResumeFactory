import Vue from 'vue'
import Router  from 'vue-router'
import Login from './views/login.vue'
import signup from './views/AccCreation.vue'
import home from './views/home.vue'
Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: signup
    },
    {
        path: '/',
        name: 'Home',
        component: home 
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;