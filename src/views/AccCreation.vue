<template>
  <div class='sign-up'>
      <p>Create your account</p>
      <input v-model='email' type="text" placeholder="Email" required><br>
      <input v-model='password' type="password" placeholder="password" required><br>
      <button @click="signUp">Create my account</button>
      <p>Or <router-link to='/login'>go back to login </router-link>if you have once</p>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
    name: 'signUp',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (){
                    alert('Nice! Your account has been creared !');
                },
                function (err){
                    alert('Oops. '+ err.message)
                } 
            );
        }
    }
}
</script>

<style>

</style>