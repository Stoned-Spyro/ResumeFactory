<template>
  <div class='logout'>
      <p @click="logout">SignOut</p>
  </div>   
</template>

<script>
import firebase from 'firebase';


export default {
    name: 'logout',
    methods:{
        logout: function(){
            firebase.auth().signOut().then(()=>{
                this.$router.push('login')
            })
        }
    }
}
</script>

<style>
    .logout:hover{
        text-decoration: underline;
    }
</style>