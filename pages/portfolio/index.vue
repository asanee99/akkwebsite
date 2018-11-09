<template>
    <div>
        <h1 class="title is-1">Portfolio components</h1>
        <JobList :jobs="loadedJobs" />
    </div>
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

