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
                            <div> 
                                <h4 class="title is-4 has-text-danger">Sign in</h4>
                                <div class="field">
                                    <div class="control">
                                        <label>Email</label>
                                        <input type="email" class="input " v-model.trim="$v.email.$model" :class="{
                                                'is-valid':$v.email.$error, 'is-valid':!$v.email.$invalid}">
                                        <div class="valid-feedback" v-if="$v.email.$valid">Your email is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.email.required">Email is required.</span>
                    
                                        </div>            
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <label>First Name </label>
                                        <input type="text" class="input "
                                        v-model.trim="$v.Name.$model" :class="{
                                            'is-valid':$v.Name.$error, 'is-valid':!$v.Name.$invalid}">
                                        <div class="valid-feedback">Your first name is valid!</div>
                                        <div class="invalid-feedback"> 
                                            <span v-if="!$v.Name.required">First name is required. </span>
                                            <span v-if="!$v.Name.minLength">First name must be at least {{
                                                $v.Name.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.Name.maxLength">First name must have at most {{
                                                $v.Name.$params.maxLength.max}} letters.</span>   
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <label>Last Name </label>
                                        <input type="text" class="input "
                                        v-model.trim="$v.Surname.$model" :class="{
                                            'is-valid':$v.Surname.$error, 'is-valid':!$v.Surname.$invalid}">
                                        <div class="valid-feedback">Your Surname name is valid!</div>
                                        <div class="invalid-feedback"> 
                                            <span v-if="!$v.Surname.required">Surname name is required. </span>
                                            <span v-if="!$v.Surname.minLength">Surname name must be at least {{
                                                $v.Surname.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.Surname.maxLength">Surname name must have at most {{
                                                $v.Surname.$params.maxLength.max}} letters.</span>   
                                        </div>
                                    </div>
                                </div>
                               <div class="field">
                                    <div class="control">
                                        <label>Phone Number</label>
                                        <input type="number" class="input " v-model.number.lazy="$v.PNumber.$model" :class="{
                                                'is-valid':$v.PNumber.$error, 'is-valid':!$v.PNumber.$invalid}">
                                        <div class="valid-feedback">Your phone number is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.PNumber.required">Phone number is required.</span>
                                            <span v-if="!$v.PNumber.numeric">This phone number only numeric accepted.</span>
                                        </div>            
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <label>Specialization</label>
                                        <input type="text" class="input " v-model.trim="$v.Specialization.$model" :class="{
                                                'is-valid':$v.Specialization.$error, 'is-valid':!$v.Specialization.$invalid}">
                                        <div class="valid-feedback">Your Specialization is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.Specialization.required">Specialization is required.</span>
                                            <span v-if="!$v.Specialization.minLength">Specialization must be at least {{
                                                $v.Specialization.$params.minLength.min}} symbols.</span>
                                        </div>            
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <label>Password</label>
                                        <input type="text" class="input "
                                        v-model.trim="$v.password.$model" :class="{
                                            'is-valid':$v.password.$error, 'is-valid':!$v.password.$invalid}">
                                        <div class="valid-feedback">Your password is valid!</div>
                                        <div class="invalid-feedback"> 
                                            <span v-if="!$v.password.required">Password is required. </span>
                                            <span v-if="!$v.password.minLength">Password must be at least {{
                                                $v.password.$params.minLength.min}} symbols.</span>
                                            <span v-if="!$v.password.maxLength">Password must have at most {{
                                                $v.password.$params.maxLength.max}} symbols.</span>   
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-text-right">
                                        <button class="button is-danger" type='submit' @click="signUp">Register now</button>
                                    </div>
                                </div>
                                <p class="has-text-white has-text-centered">Or <router-link to='/login' class="has-text-danger">go back to login</router-link> if you have once</p>
                            </div>
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
import {required, minLength, maxLength,email,numeric} from 'vuelidate/lib/validators'

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
    validations:{
        email:{
            required,
            email,
            isUnique (value) {
                if (value === '') return true

                // eslint-disable-next-line
                var email_regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(email_regex.test(value))
                    }, 350 + Math.random() * 300)
                })
            }
        },
        Name:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(10)
        },
        Surname:{
            required,
            minLength: minLength(5),
            maxLength: maxLength(12)
        },
        password:{
            required,
            minLength: minLength(6),
            maxLength: maxLength(20)
        },
        PNumber:{
            required,
            numeric,
            minLength: minLength(12)
        },
        Specialization:{
            required,
            minLength: minLength(3)
        }
    },
    firestore(){
        return{
            users: db.collection('users')
        }
    },
    methods: {
       async signUp(){
           this.$v.$touch()
           if(this.$v.$invalid){
               this.$buefy.toast.open({
                    duration: 5000,
                    message: `Missing Field`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
           }
           else{
            await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (res)=>{
                    db.collection('Users').doc().set({
                        name:this.Name,
                        id:res.user.uid,
                        email:this.email,
                        surname:this.Surname,
                        PNumber:this.PNumber,
                        specialization:this.Specialization
                    })
                    this.signIn(this.email,this.password)
                     this.$buefy.toast.open({
                    message: 'Account Created',
                    type: 'is-success'
                })
            },
                (err)=>{
                    this.$buefy.toast.open({
                    duration: 5000,
                    message: err.message,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
                    // alert('Oops. '+ err.message)
                } 
            );
           }
        },
        signIn(email,pass){
             firebase.auth().signInWithEmailAndPassword(email, pass).then(
                () => {
                    this.$buefy.toast.open({
                    message: 'Login Succes',
                    type: 'is-success'
                })
                    this.$router.push({path:'/'})
                },
                (err)=>{
                    this.$buefy.toast.open({
                    duration: 5000,
                    message: err.message,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
                }
            );
        }
    }
}
</script>

<style>
label{
    color:white;
}
.invalid-feedback{
color:red;
}
.valid-feedback{
    color:green

}



</style>