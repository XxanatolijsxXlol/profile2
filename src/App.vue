<template>
  
  
      
        <NavBar />
        
      
     
  
  <RouterView />
</template>

<script setup>
// Import RouterLink and RouterView directly in the template section
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'; // Import NavBar component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
 

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

 
</style>
