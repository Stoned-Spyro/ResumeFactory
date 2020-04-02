<template>
  <div>
     <nav class ="navbar navbar-expand-lg navabr-dark my=bg-navbar fixed-top">
         <div class="container">
             <a class="navbar-brand" href="#">
                 <strong>Resume</strong>
                 Factory
             </a>
             <ul class="navbar-nav ml-auto">
                 <li class="nav-item">
                     <a class="nav-link" href="#">Template</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">FAQ</a>
                 </li>
                 <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-expanded="false" aria-hospopup="true" href="#" data-toggle="dropdown">English</a>
                     <div class="dropdown-menu" aria-lebelledly="navbarDropdown">
                         <a class="dropdown-item" href="#">Ukranian</a>
                         <a class="dropdown-item" href="#">Russian</a>
                     </div>   
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Log In</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Sign Up</a>
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
