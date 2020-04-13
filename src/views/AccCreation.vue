<template>
   <div>Sign Up
       <section>
       <b-field>
            <b-input v-model="email" placeholder="Email" type="email" required></b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Name"
                type="text"
                min="2"
                max="15"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Surname"
                type="text"
                min="2"
                max="20"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Number"
                type="text"
                min="10"
                max="20"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Password"
                v-model="password"
                type="password"
                min="5"
                max="15"
                required>
            </b-input>
        </b-field>
    </section>
    <button @click="signUp">Sign up</button>
    <p>Or <router-link to='/login'>go back to login</router-link> if u have once</p>
   </div>
</template>



<script>
import firebase from 'firebase';


export default {
    name: 'signUp',
    data(){
        return{
            email: '',
            Name: '',
            Surname: '',
            Number: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (){
                    alert('Nice! Your account has been creared !');
                    this.$router.replace('Home')
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