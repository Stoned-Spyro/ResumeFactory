<template>
  <div id="app">
    <img alt="Logo" src="./assets/logo.png">
    <home></home>
      <div id="nav">
          <router-link to='/login'>Login</router-link><br>
          <router-link to='/sign-up'>Create your account</router-link>    
      </div>
      <router-view></router-view>
  </div>
</template> 

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
