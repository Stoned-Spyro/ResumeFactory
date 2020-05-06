
<template>
    <b-navbar type="is-dark" :fixed-top="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                ResumeFactory
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/templates' }">
                Templates
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/myprofile' }" v-if="alreadyMember">
                My Profile
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/login' }" v-else>
                Log In
            </b-navbar-item>
            <b-navbar-item  v-if="alreadyMember">
                <logout></logout>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/sign-up' }" v-else>
                Sign Up
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import firebase from 'firebase'
import logout from '../components/logout'
export default {
    name: 'navbar',
    components: {
        logout,
    },
    data() {
         const currentUser = firebase.auth().currentUser;
         if(currentUser){
             return{
                 alreadyMember:true,
             }
         }else{
             return{
                 alreadyMember:false,
             }
         }
    }
    
}

</script>

<style>

</style>
