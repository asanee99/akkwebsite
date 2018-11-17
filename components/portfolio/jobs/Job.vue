<template>
   <v-flex xs12 sm6 md4 lg4>
      <v-card>
        <v-img
          :src="thumbnailLink[0]"
          :lazy-src="thumbnailLink[0]"
          aspect-ratio="1.2">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="title mb-1 font-weight-medium text-truncate">{{ title }}</div>
            <div>{{ previewText }}<br>{{ previewSpace }}
            <br>{{ previewPrice }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn nuxt :to="{ path: /portfolio/ + this.jobName , query : { 'jobLink' : thumbnailLink }}"  
                 flat color="green"
                 >More Picture</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      /* isAdmin: {
        type: Boolean,
        required: true
      }, */
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      previewPrice: {
        type: String,
        required: true
      },
      previewSpace: {
        type: String,
        required: true
      },
      thumbnailLink: {
        type: Array,
        required: true
      },
      jobName: {
        type: String,
        required: true
      }
    },
    computed: {
      toMorePicture() {
        return '/portfolio/' + this.id;
      }
    }
  }

</script>

<style>

</style>
