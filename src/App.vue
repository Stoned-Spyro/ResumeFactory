
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
<style lang="scss">

.card{
 border-radius: 12px;
 background-color:rgba(0,0,0,0.6) !important;
 padding:10px;
}
</style>
<style>
		#app {
		background: #38324E;
		}
</style>


