<template>
  <v-toolbar 
    
    fixed dense flat scroll-off-screen lights-out>
    <v-toolbar-side-icon @click="$emit('sideNavToggle')" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>U SBAY HOUSE</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <nuxt-link to="/">
        <h3 class="">Home</h3>
        </nuxt-link>
      </v-btn>
      <v-btn flat>
        <nuxt-link to="/portfolio">
          <h3 class="">Portfolio</h3>
        </nuxt-link>
      </v-btn>
      <v-btn flat>
        <nuxt-link to="/contract">
          <h3 class="">Contract</h3>
        </nuxt-link>
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
