<template>
    <div>
        <CreateSubject @handleHide="hideCreateSubject" :createSubjectVisible="createSubjectVisible" />

        <a-layout-content :style="{ margin: '0 12px', border: '' }">
            <div :style="{ background: '' }">
                <a-row>
                    <a-col :span="12">
                        <h1>Subjects</h1>
                    </a-col>
                    
                    <a-col :span="12">
                        <a-button
                            type="primary"
                            :style="{ float: 'right' }"
                            @click="openCreateSubject"
                        >
                            create subject
                        </a-button>
                    </a-col>
                </a-row>

                <div :style="{ background: '', padding: '', textAlign: '' }">
                    <a-row :gutter="16" :style="{ margin: '12px auto 0 auto', border: '' }">
                        <a-col :span="8" v-for="subject in subjects" :key="subject['_id']" :style="{ margin: '12px auto' }">
                            <a-card hoverable style="width: 300px" @click="openTopics(subject)" :style="{ border: '' }">

                                <!-- <template slot="actions" class="ant-card-actions">
                                    <span :style="{ display: 'flex', border: '', padding: '0 24px' }">
                                        <a-icon type="edit"></a-icon>
                                    </span>
                                </template> -->

                                <a-card-meta
                                    :title="subject['subject_name']"
                                    :style="{ border: '', textAlign: 'center' }"
                                >
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
    import CreateSubject from "../../data_entry/subjects/CreateSubject"

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

        components: {
            CreateSubject,
        },

        data(){
            return{
                createSubjectVisible: false,
                subjects,
            }
        },

        methods: {
            openCreateSubject(){
              this.createSubjectVisible = true
              // console.log("Create employee")
            },

            hideCreateSubject(){
              this.createSubjectVisible = false
            },

            openTopics(){
                this.$router.push({ name: "Topics" })
            }
        },

        async created(){},

        mounted(){},

        // computed: mapGetters([]),
    }
</script>