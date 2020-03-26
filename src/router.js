import Vue from 'vue'
import Router  from 'vue-router'
import Login from './component/login.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home 
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = new Router({
    routes
}) 
const app = new Vue({
    router 
}).$mount('#app')