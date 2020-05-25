<template>

<div class="my-bg-violet">
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
                            <div class='login'>
                                <h4 class="title is-4 has-text-danger">Sign in</h4>
                                <div class="field">
                                    <div class="control">
                                        <label>Email</label>
                                        <input type="email" class="input " v-model.trim="$v.email.$model" :class="{
                                                'is-valid':$v.email.$error, 'is-valid':!$v.email.$invalid}">
                                        <div class="valid-feedback" v-if="!$v.email.$invalid">Your email is valid!</div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.email.required">Email is required.</span>
                                        </div> 
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <label>Password</label>
                                        <input type="text" class="input "
                                        v-model.trim="$v.password.$model" :class="{
                                            'is-valid':$v.password.$error, 'is-valid':!$v.password.$invalid}">
                                        <div class="valid-feedback" v-if="!$v.password.$invalid">Your password is valid!</div>
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
                                        <button class="button is-danger is-inverted" @click="login">Sign in</button>
                                    </div>
                                </div>
                                <p class="has-text-centered has-text-white">I am not registered - <router-link to='/sign-up' class="has-text-danger">Sign Up</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</section> 
        <section class="hero is-medium">
			<div class="hero-body"></div>
		</section>
</div>
</template>

<script>
import {required, minLength, maxLength,email} from 'vuelidate/lib/validators'
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
                () => {
                    this.$router.push({path:'/'})
                     this.$buefy.toast.open({
                    duration: 5000,
                    message: "Login Succes",
                    type: 'is-succes'
                })
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
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(20)
        }
    }
}
</script>

<style scoped>

</style>