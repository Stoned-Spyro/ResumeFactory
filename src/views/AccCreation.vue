<template>
   <div>Sign Up
       <form @submit="addUser(email,Name, Surname, PNumber)"> 
       <section>
       <b-field>
            <b-input v-model="email" 
            placeholder="Email" 
            type="email" 
            required>
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model="Name" 
                placeholder="Name"
                type="text"
                min="2"
                max="15"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model='Surname' 
                placeholder="Surname"
                type="text"
                min="2"
                max="20"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input v-model="PNumber" 
                placeholder="Number"
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
    <button type='submit' @click="signUp">Sign up</button>
    <p>Or <router-link to='/login'>go back to login</router-link> if u have once</p>
    </form>
   </div>
</template>



<script>
import firebase from 'firebase';
import {db} from '../main';

export default {
    name: 'signUp',
    data(){
        return{
            users: [],
            email: '',
            Name: '',
            Surname: '',
            PNumber: '',
            password: ''
        }
    },
    firestore(){
        return{
            users: db.collection('users')
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
        },
        addUser(email, Name, Surname, PNumber){
            db.collection('users').add({email, Name, Surname, PNumber})
        }
    }
}
</script>

<style>

</style>