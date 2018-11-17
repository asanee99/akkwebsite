<template>
  <v-footer height="auto" >
    <v-card 
            flat 
            tile
            class="flex indigo lighten-1 white--text text-xs-center">
      
      <!-- This contents Part -->
      <v-card-text>
      <!-- Icons Part -->
        <v-btn v-for="icon in icondata" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <p><strong>AK&K Construction Co,.Ltd</strong></p>
        <p>271/20 ถ.สถคนธวิท ต.ตลาดกระทุ่มแบน</p>
        <p>อ.กระทุ่มแบน จ.สมุทรสาคร 74110</p>
      </v-card-text>
      <!-- Bottom Footer Part -->
      <v-card-actions class="grey darken-3 justify-center">
        &copy;{{ new Date().getFullYear() }} — <strong>number09 Dev</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    props: {
      icondata : {
        type: Array
      }
    },
    data() {
      return {
        
        }
      }
    }
  

</script>

<style>
  .footer {
    margin-top: 10px;
    background-color: #9FF45A;
  }

</style>
