<template>
  <div class='logout'>
      <button @click="logout">SignOut</button>
  </div>   
</template>

<script>
import firebase from 'firebase';


export default {
    name: 'logout',
    methods:{
        logout: function(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace('login')
            })
        }
    }
}
</script>

<style>

</style>