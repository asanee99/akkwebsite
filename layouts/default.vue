<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <app-nav-side :navdata="links" :navlogo="logo" />
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
        logo: '/akkconstruction-website-logo.png',
        icons: [{
          name: 'mdi-facebook',
          link: 'https://www.facebook.com/akkconstruction'
          },
          {
          name: 'mdi-instagram',
          link: 'https://www.instagram.com/akk.construction/'
          }
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
            navLink: '/contact',
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
