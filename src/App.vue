
<template>
  <div id="app">
      <navbar></navbar>
      <router-view/>
  </div>
</template> 

<script>
 import navbar from './views/navbar'
  export default {
    name: 'app', 
    components: {
      navbar     
      } 
  }
  
 
 
</script>

<style>
		#app {
		background: #38324E;
		}
</style>


