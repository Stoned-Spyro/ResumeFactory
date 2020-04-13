<template>
   <div>Sign Up
       <section>
       <b-field>
            <b-input placeholder="Email" type="email" required></b-input>
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
                type="number"
                min="10"
                max="20"
                required>
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Password"
                type="password"
                min="5"
                max="15"
                required>
            </b-input>
        </b-field>
    </section>
   </div>
</template>



<script>
import firebase from 'firebase';


export default {
    name: 'signUp',
    data(){
        return{
            Email: '',
            Name: '',
            Surname: '',
            Number: '',
            Password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.Email,this.Name,this.Surname,this.Number,this.Password).then(
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