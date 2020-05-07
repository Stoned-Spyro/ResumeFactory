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
                                        <input class="input is-rounded" v-model='email' required type="text" placeholder="Email">
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-rounded" v-model='password' required type="password" placeholder="password">
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
                },
                (err)=>{
                    alert('Oops'+err.message)
                }
            );
        }
    }
}
</script>

<style scoped>

</style>