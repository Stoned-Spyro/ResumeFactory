import Vue from 'vue'
import Router  from 'vue-router'
import firebase from 'firebase'

import Login from './views/login.vue'
import signup from './views/AccCreation.vue'
import home from './views/home.vue'
// import templates from './views/templates.vue'
import addInfo from './views/AddInfo.vue'
import userProfile from './views/userProfile.vue'

Vue.use(Router)
export let currentUser='';
const routes = [
    {
        path: '/myprofile',
        name: 'userProfile',
        component: userProfile
    },
    {
        path: '/AddInfo',
        name: 'addInfo',
        component: addInfo,
        meta:{
            requiresAuth: true
        },
        beforeEnter: (to, from, next) =>{
            currentUser = firebase.auth().currentUser;
            const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
            
            if(requiresAuth && !currentUser) next('login');
            else if (!requiresAuth && currentUser) ('addInfo');
            else next();
            }
    },
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
        name: 'home',
        component: home 
    },
    // {
    //     path: '/templates',
    //     name: 'Templates',
    //     component: templates,    
    //     meta:{
    //         requiresAuth: true
    //     },
    //     beforeEnter: (to, from, next) =>{
    //         const currentUser = firebase.auth().currentUser;
    //         const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
            
    //         if(requiresAuth && !currentUser) next('login');
    //         else if (!requiresAuth && currentUser) ('Templates');
    //         else next();
    //         }
    // },
  
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;