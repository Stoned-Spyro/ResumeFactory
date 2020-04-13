<template>
  <div>
     <nav class ="navbar navbar-expand-lg navabr-dark my-bg-navbar fixed-top">
         <div class="container">
            <router-link to='/'>
                 <strong>Resume</strong>
                 Factory
            </router-link>
             <ul class="navbar-nav ml-auto">
                 <li class="nav-item">
                     <router-link to='/templates'>Templates</router-link>
                 </li>
                 <li class="nav-item">
                     <router-link to='/faq'>FAQ</router-link>
                 </li>
                 <li class="nav-item">
                    <router-link to='/login'>Log In</router-link>
                 </li>
                 <li class="nav-item">
                     <router-link to='/sign-up'>Sign Up</router-link>
                 </li>    
             </ul>    
         </div>
     </nav>
   </div>
</template>
<script>

export default {
    name: 'navbar'
}
</script>

<style>
    .my-bg-navbar {
		background-color: rgba(24, 22, 22, 0.66);
    }

</style>
