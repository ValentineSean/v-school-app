<template>
    <div>
        <a-layout-content :style="{ margin: '0 12px', border: '' }">
            <div :style="{ background: '#fff' }">

                <div :style="{ background: '', padding: '', textAlign: '' }">
                    <a-row :gutter="16" :style="{ margin: '12px auto 0 auto', border: '' }">
                        <a-col :span="8" v-for="subject in subjects" :key="subject['_id']" :style="{ margin: '12px auto' }">
                            <a-card hoverable style="width: 300px" @click="openSubjectDetails(subject)" :style="{ border: '' }">

                                <!-- <template slot="actions" class="ant-card-actions">
                                    <span :style="{ display: 'flex', border: '', padding: '0 24px' }">
                                        <a-icon type="edit"></a-icon>
                                    </span>
                                </template> -->

                                <a-card-meta :title="subject['subject_name']" :description="`Progress: ${subject['progress']}%`">
                                </a-card-meta>
                            </a-card>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-layout-content>
    </div>
</template>

<script>
    let subjects = [
        {
            _id: 1,
            subject_name: "Mathematics",
            progress: 59,
            students_enrolled: 98,
        },

        {
            _id: 2,
            subject_name: "English",
            progress: 59,
            students_enrolled: 67,
        },

        {
            _id: 3,
            subject_name: "Web Engineering",
            progress: 59,
            students_enrolled: 82,
        },
    ]

    export default{
        name: "Subjects",

        components: {},

        data(){
            return{
                subjects,
            }
        },

        methods: {},

        async created(){},

        mounted(){},

        // computed: mapGetters([]),
    }
</script>