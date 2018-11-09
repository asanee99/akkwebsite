<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="job in this.$route.query.jobLink" :key="job" xs12 sm4 md4 lg4 d-flex>
                <v-card>
                  <v-img :src="job" :lazy-src="job" aspect-ratio="1" class="grey lighten-2">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style scoped>

</style>
