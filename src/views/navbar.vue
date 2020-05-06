<template>
    <b-navbar type="is-dark" :fixed-top="true" :transparent="true" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <span class="has-text-weight-bold">Resume</span>
                Factory
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/templates' }">
                Templates
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/faq' }">
                FAQ
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/login' }">
                Log In
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/sign-up' }">
                Sign Up
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>

export default {
    name: 'navbar'
}
</script>

<style>
    .my-bg-navbar {
		background-color: rgba(24, 22, 22, 0.66);
    }
    nav.navbar.is-fixed-top {
        background-color: rgba(24, 22, 22, 0.66);
    }
    body{
        padding-top: 0px!important;
    }
</style>
