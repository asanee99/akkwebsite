<template>
    <v-container>
    <v-layout row wrap class="contactPage">
            <v-flex xs12 md6 :class="createdMap">
                <GmapMap
                :center="{lat:13.649214, lng:100.252777}"
                :zoom="15"
                map-type-id="terrain"
                style="width: auto; height: 25rem"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>
                
            </v-flex>
            <v-flex xs12 md6 style="padding : 1rem;">
                <div class="title">บริษัท เอ เค แอนด์ เค การก่อสร้าง จำกัด <br> <br></div>
                <div class="subheading"> 271/20 ถ.สุคนธวิท ต.ตลาดกระทุ่มแบน <br>
                อ.กระทุ่มแบน จ.สมุทรสาคร 74110 <br> <br>
                โทร. 092-350-5505 <br>
                E-mail : akk.construct@gmail.com <br>
                Facebook Page : <a href="https://www.facebook.com/akkconstruction">@facebook/akkconstrcution</a>
                </div>
                
               
            </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            paddingValue () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'pa-1'
                case 'sm': return 'pa-3'
                case 'md': return 'pa-5'
                case 'lg': return 'pa-5'
                case 'xl': return 'pa-5'
                }
            }
        }
    }
</script>

<style scoped>
    .contactPage {
         padding-top: 1rem;
    }
</style>


