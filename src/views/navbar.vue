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

</style>
