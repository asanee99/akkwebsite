<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <app-job-view 
                v-for="job in jobs"
                :key="job.id"
                :id="job.id"
                :jobName="job.jobName"
                :title="job.title"
                :previewPrice="job.previewPrice"
                :previewSpace="job.previewSpace"
                :previewText="job.previewText"
                :thumbnailLink="job.thumbnailLink"
            ></app-job-view>
        </v-layout>
    </v-container>
</template>

<script>
    import Job from "./Job.vue"

    export default {
        props: {
            jobs: {
                type: Array,
                required: true
            }
        },
        components: {
            'app-job-view': Job
        },
        data() {
            return {
                columnsClass: 
                    'columns is-multiline'
            }
        }
    }
</script>

