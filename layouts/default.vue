<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <app-nav-side :navdata="links" />
    </v-navigation-drawer>

      <app-header @sideNavToggle="drawer = !drawer" />

    <v-container class="contents" fluid>
      <nuxt />
    </v-container>
    <app-footer :icondata="icons"/>
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
        icons: [
        'mdi-facebook',
        'mdi-instagram'
        ],
        links: [{
            title: 'Home',
            navLink: '/',
            icon: 'home'
          },
          {
            title: 'Portfolio',
            navLink: '/portfolio',
            icon: 'image'
          },
          {
            title: 'Contract',
            navLink: '/contract',
            icon: 'call'
          },
        ],
      }
    },
  }

</script>

<style>
  .contents {
    margin-top: 1.5rem;
  }

</style>
