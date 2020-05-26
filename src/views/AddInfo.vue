<template>
<body>
    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <div class="container has-text-centered">
				<h1 class="title is-1">Enter your data</h1>
			</div>
        </div>
	</section>

    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <b-field label="Name">
                <b-input placeholder="John"></b-input>
            </b-field>
            <b-field label="Surname">
                <b-input placeholder="Doe"></b-input>
            </b-field>
            <b-field label="Phone number">
                <b-input placeholder="+380123456789"></b-input>
            </b-field>
        </div>
	</section>
    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <b-field label="Specializing in:">
                <b-input maxlength="200" type="textarea" placeholder="Web-design"></b-input>
            </b-field>
        </div>
	</section>
    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <b-field label="Skills:">
                <b-input placeholder="UI Design, Animation"></b-input>
            </b-field>
            <b-field label="Languages:">
                <b-input placeholder="Ukrainian, English"></b-input>
            </b-field>
            <b-field label="Platforms:">
                <b-input placeholder=""></b-input>
            </b-field>
        </div>
	</section>
    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <b-field label="Education:">
                <b-input placeholder=""></b-input>
            </b-field>
            <b-field label="Institution:">
                <b-input placeholder=""></b-input>
            </b-field>
            <b-field label="B.S:">
                <b-input placeholder=""></b-input>
            </b-field>
            <b-field label="Minor:">
                <b-input placeholder=""></b-input>
            </b-field>
        </div>
	</section>
    <section class="hero is-tiny is-white">
		<div class="hero-body">
            <b-field label="Employment:">
                <b-input maxlength="200" type="textarea" placeholder=""></b-input>
            </b-field>
            <b-field label="Projects:">
                <b-input maxlength="200" type="textarea" placeholder=""></b-input>
            </b-field>
        </div>
	</section>
    <section class="hero is-tiny is-white">
		<div class="hero-body has-text-right">
            <button class="button is-danger" type='submit' @click="addInfo">Download</button>
        </div>
	</section>
</body>
</template>

<script>
import {db} from '../main';
import {currentUser} from '../router'   
export default {
    name: 'addInfo',
    data(){
        return{
            name: '',
            surname: '',
            specialization: '',
            email:'',
            PNumber: '',
            languages: '',
            platforms:'',
            institution: '',
            b_s:'',
            minor:'',
            employment:'',
            project: ''
        }
    },
    methods: {
         addInfo(){
            db.collection('users-resume').doc().set({
                id: currentUser.uid,
                name: this.name,
                surname:this.surname,
                specialization:this.specialization,
                email:this.email,
                PNumber:this.PNumber,
                languages:this.languages,
                platforms:this.platforms,
                institution:this.institution,
                b_s:this.b_s,
                minor:this.minor,
                employment:this.employment,
                project:this.project
            })

            alert('your information has been successfully added')

            this.$router.push({path:'/myprofile'})
        }
    } 
}
</script>

<style>
</style>