<template>
  <div>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            [ U SBAYICON ]
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile 
          v-for="link in navdata" 
          :key="link.title">
        <v-list-tile-action>
          
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <nuxt-link :to="link.navLink">
              <h3 class="">{{ link.title }}</h3>
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      navdata: {
        type: Array,
      }
    }
  }

</script>
