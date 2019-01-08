<template>
  <v-footer height="auto" class="footer" color="transparent">
    <v-card 
            flat 
            tile
            class="flex lighten-1 black--text text-xs-center">
      
      <!-- This contents Part -->
      <v-card-text>
      <!-- Icons Part -->
        <v-btn v-for="icon in icondata" :key="icon" class="mx-3" light icon :href="icon.link">
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="green--text pt-0 footer-bg">
        <v-img 
          class="img-opacity"
          src="" aspect-ratio="15" max-width
        >         
          <div class="text-opacity">
            <p><strong>AK&K Construction Co,.Ltd</strong></p>
            <p>271/20 ถ.สถคนธวิท ต.ตลาดกระทุ่มแบน</p>
            <p>อ.กระทุ่มแบน จ.สมุทรสาคร 74110</p>
            <p>โทร. 092-350-5505</p>
          </div>
        </v-img>
        
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
    margin-top: 1.8rem;
   
  }
  .footer-bg {
    background-image: url('/footer/construct-outline-bg.png');

  }
  
</style>
