<template>
  <v-layout row wrap class="page">
    <v-container fluid class="sectionFirst">
      <v-layout row wrap>
          <v-flex xs12 sm6 md6 lg6 xl6>
            <v-img :src="picData.buildingCartoon" aspect-ratio="1.4" alt="" contain>
            </v-img>
          </v-flex>
          <v-flex xs12 sm6 md6 lg6 xl6 :class="paddingValue" >
            <v-card-text class="text-xs-center" :class="displayTitleChange">อยู่สบาย เฮาส์</v-card-text>
            <v-card-text class="text-xs-center" :class="displayTextChange">รับสร้างบ้าน <br> และงานก่อสร้างทั่วไป</v-card-text>
          </v-flex> 
      </v-layout>
    </v-container>
    <v-container fluid class="sectionSeconde">
      <v-layout row wrap>
          <v-flex xs12 sm6 md6 lg6 xl6 :class="paddingValue">
            <v-card-text class="text-xs-center" :class="displayTitleChange">สร้างบ้านราคาประหยัด - หรู</v-card-text>
            <v-card-text class="text-xs-center" :class="displayTextChange">หรือตามงบของลูกค้า</v-card-text>
          </v-flex> 
          <v-flex xs12 sm6 md6 lg6 xl6>
            <v-img :src="picData.advisor" aspect-ratio="1.4" alt="" contain>
            </v-img>
          </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="sectionThird">
      <v-layout row wrap>
          <v-flex xs12 sm6 md6 lg6 xl6>
            <v-img :src="picData.engineer" aspect-ratio="1.4" alt="" contain>
            </v-img>
          </v-flex>
          <v-flex xs12 sm6 md6 lg6 xl6 :class="paddingValue">
            <v-card-text class="text-xs-center" :class="displayTitleChange">ผลงานของเรา</v-card-text>
            <v-card-actions>
              <v-btn color="light-green headline" block>ชมผลงาน</v-btn>
            </v-card-actions>
            <v-card-text class="text-xs-center" :class="displayTextChange">สอบถามเพิ่มเติมติดต่อ 
              <br>
              คุณอัสนี
              <br> 
              090-9849029</v-card-text>
          </v-flex> 
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>




export default {
  data() {
    return {
      picData: {
        buildingCartoon: '/homepage/building-cartoon.png',
        advisor: '/homepage/cartoon-adviser.png',
        engineer: '/homepage/cartoon-engineer.png'
      },
      
    }
  },
  components: {

  },
  computed: {
    paddingValue () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'pa-1'
        case 'sm': return 'pa-3'
        case 'md': return 'pa-5'
        case 'lg': return 'pa-5'
        case 'xl': return 'pa-5'
      }
    },
    displayTitleChange () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'display-1'
        case 'sm': return 'display-1'
        case 'md': return 'display-2'
        case 'lg': return 'display-3'
        case 'xl': return 'display-4'
      }
    },
    displayTextChange () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'headline'
        case 'sm': return 'headline'
        case 'md': return 'headline'
        case 'lg': return 'display-1'
        case 'xl': return 'display-1'
      }
    },
  }
}
</script>

<style>
  .page {
    background-color: lightgreen;
  }
  .sectionFirst {
    background-color: whitesmoke;
  }
  .sectionSeconde {
    background-color: white;
  }
  .sectionThird {
    background-color: whitesmoke;
  }

</style>
