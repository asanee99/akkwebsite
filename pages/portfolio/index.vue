<template>
   
        <v-layout>
            <v-flex>
                <h1 class="title is-1">ผลงานของเรา</h1>
                <JobList :jobs="loadedJobs" />
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
            }
        }
    }
</script>

