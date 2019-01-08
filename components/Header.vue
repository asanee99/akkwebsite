<template>
  <v-toolbar 
    
    fixed dense flat scroll-off-screen lights-out>
    <v-toolbar-side-icon @click="$emit('sideNavToggle')" class="hidden-md-and-up">

    </v-toolbar-side-icon>
    <v-toolbar-title>
      <strong>AK&K</strong>CONSTRUCTION
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat nuxt to="/"> 
        Home
      </v-btn>
      <v-btn flat nuxt to="/portfolio">  
          Portfolio
      </v-btn>
      <v-btn flat nuxt to="/contact">
          Contact Us
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  
</template>

<script>
  

  export default {
    name: 'Header',
    components: {
    
    },
    data() {
      return {
        isActive: false,
        /* animationClass: 'slideInDown faster' */
      }
    },
    methods: {
      
    }
  }

</script>

<style>
  a {
    text-decoration: none;
  }
  
</style>
