<template>
    <div class='login'>
        <h2>Sign in</h2>
        <input required type="text" placeholder="Email"><br>
        <input required type="password" placeholder="password"><br>
        <button>Sign in</button>
        <p>If you don’t have an account you can <router-link to='/sign-up'>create it</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data(){
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(){
                    alert('you are now connected')
                },
                function(err){
                    alert('Oops'+err.message)
                }
            );
        }
    }
}
</script>

<style scoped>

</style>