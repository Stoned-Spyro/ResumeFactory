import Vue from 'vue'
import Router  from 'vue-router'
import Login from './views/login.vue'
import signup from './views/AccCreation.vue'
import home from './views/home.vue'
import faq from './views/FAQ.vue'
import templates from './views/templates.vue'
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
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: faq
    },
    {
        path: '/templates',
        name: 'Templates',
        component: templates    
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;