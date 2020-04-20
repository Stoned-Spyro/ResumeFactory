import Vue from 'vue'
import Router  from 'vue-router'
import firebase from 'firebase'

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
        component: templates,    
        meta:{
            requiresAuth: true
        },
        beforeEnter: (to, from, next) =>{
            const currentUser = firebase.auth().currentUser;
            const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
            
            if(requiresAuth && !currentUser) next('login');
            else if (!requiresAuth && currentUser) ('Templates');
            else next();
            }
    }
]

const router = new Router({
    mode: 'history',
    routes
})


export default router;