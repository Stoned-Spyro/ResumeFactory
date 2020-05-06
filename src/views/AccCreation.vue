<template>
    <body class="my-bg-violet">
        <section class="hero is-tiny">
			<div class="hero-body"></div>
		</section>
        <section class="hero is-tiny">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title is-1 has-text-white"><span class="has-text-weight-bold">Resume</span><span class="has-text-weight-normal">Factory</span></h1>
				</div>
			</div>
		</section>
        
        <section class="hero is-tiny">
			<div class="hero-body">
                <div class="container">
                    <div class="columns is-mobile">
                        <div class="column is-one-third is-offset-one-third">
                            <form @submit="addUser(email,Name, Surname, PNumber)"> 
                                <h4 class="title is-4 has-text-danger">Sign in</h4>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model="email" placeholder="Email" type="email" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model="Name" placeholder="Name" type="text" min="2" max="15" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model='Surname' placeholder="Surname" type="text" min="2" max="20" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model="PNumber" placeholder="Number" type="text" min="10" max="20" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model="Specialization" placeholder="Specialization" type="text">
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" placeholder="Password" v-model="password" type="password" min="5" max="15" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-text-right">
                                        <button class="button is-danger" type='submit' @click="signUp">Register now</button>
                                    </div>
                                </div>
                                <p class="has-text-white has-text-centered">Or <router-link to='/login' class="has-text-danger">go back to login</router-link> if you have once</p>
                            </form>
                        </div>
                    </div>
                </div>
			</div>
		</section> 
        <section class="hero is-medium">
			<div class="hero-body"></div>
		</section>
    </body>
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
            password: '',
            Specialization: ''
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
                ()=>{
                    this.$router.replace({path:'/login'})
                },
                (err)=>{
                    alert('Oops. '+ err.message)
                } 
            );
        },
        addUser(email, Name, Surname, PNumber, Specialization){
            db.collection('users').add({email, Name, Surname, PNumber, Specialization})
        }
    }
}
</script>

<style>

</style>