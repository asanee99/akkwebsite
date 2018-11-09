<template>
    <div>
        <app-job-list />
    </div>
</template>

<script>
    import JobList from "@/components/portfolio/jobs/Joblist"
    export default {
        components: {
            'app-job-list': JobList
        }
    }
</script>

