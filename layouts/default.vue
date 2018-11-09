<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <app-nav-side :navdata="links"/>
    </v-navigation-drawer>
    <app-header @sideNavToggle="drawer = !drawer" />
    <nuxt />
    <app-footer />
  </v-app>
</template>

<script>
  import Header from "@/components/Header"
  import Footer from "@/components/Footer"
  import NavSide from "@/components/NavSide"

  export default {
    components: {
      'app-footer': Footer,
      'app-header': Header,
      'app-nav-side': NavSide
    },
    data() {
      return {
        
        drawer: null,

        links: [{
            title: 'Home',
            navLink: '/'
          },
          {
            title: 'Portfolio',
            navLink: '/portfolio'
          },
          {
            title: 'Contract',
            navLink: '/contract'
          },
        ],
      }
    },
  }

</script>

<style>

</style>
