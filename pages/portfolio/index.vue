<template>
        <v-layout class="portfolioPage">
            <v-flex>
                <v-container>
                    
                    <h1 class="title is-1">ผลงานของเรา</h1>
                    <br>
                    <v-divider></v-divider>
                    <br>
                    <JobList :jobs="loadedJobs" />
                    
                </v-container>
            </v-flex>
        </v-layout>
</template>

<script>
    import JobList from "@/components/portfolio/jobs/JobList"
    
    export default {
        
        components: {
            JobList
        },
        computed: {
            
            loadedJobs() {
                return this.$store.getters.loadedJobs
            },

        }
    }
</script>

<style>
    .portfolioPage {
        padding-top: 1rem;
    }
</style>


