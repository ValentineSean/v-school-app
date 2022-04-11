<template>
    <div>
        <CreateTopic @handleHide="hideCreateTopic" :createTopicVisible="createTopicVisible" :subject_id="topics['subject_id']" />
        <UploadMaterial @handleHide="hideUploadMaterial" :uploadMaterialVisible="uploadMaterialVisible" />

        <a-row>
            <a-col :span="12" v-if="topics['subject_topics'].length > 0">
                <h1 v-for="subject in getSubjects.filter((subject) => subject['_id']['$oid'] === topics['subject_id'])" :key="subject['_id']['$oid']">{{ subject["subject_name"] }} Topics</h1>
            </a-col>

            <a-col :span="12" v-if="topics['subject_topics'].length <= 0">
                <h1 v-for="subject in getSubjects.filter((subject) => subject['_id']['$oid'] === topics['subject_id'])" :key="subject['_id']['$oid']">{{ subject["subject_name"] }} Topics</h1>
            </a-col>

            <a-col :span="12">
                <a-button
                    type="primary"
                    :style="{ float: 'right' }"
                    @click="openCreateTopic"
                >
                    create topic
                </a-button>
            </a-col>
        </a-row>
        <!-- <a-collapse>
            <a-collapse-panel v-for="chapter in syllabus['chapters']" :key="chapter['chapter_id']" :header="chapter['chapter_name']">
                <a-list item-layout="horizontal" :data-source="chapter['subheads']">
                    <a-list-item slot="renderItem" slot-scope="subhead">
                        <a-list-item-meta @click="toViewMaterial(chapter)">
                            <span slot="title">{{ subhead['subhead_name'] }}</span>
                        </a-list-item-meta>
                    </a-list-item>
                </a-list>
            </a-collapse-panel>
        </a-collapse> -->

        <a-list item-layout="horizontal" :data-source="topics['subject_topics']" bordered>
            <a-list-item slot="renderItem" slot-scope="topic">
                <a-list-item-meta>
                    <span slot="title">{{ topic['topic_name'] }}</span>
                </a-list-item-meta>

                <!-- <a-button
                    type="primary"
                    @click.prevent="toWatchVideo(topic)"
                    :style="{ float: 'right' }"
                    title="Click to watch video"
                    v-if="topic['upload_status'] === 'uploaded'"
                >
                    watch video
                </a-button> -->

                <a-button
                    type="primary"
                    @click.prevent="openUploadMaterial(topic)"
                    :style="{ float: 'right' }"
                    title="Click to upload material"
                    v-if="topic['upload_status'] === 'uploaded'"
                >
                    upload material
                </a-button>

                <h4
                    title="No media uploaded"
                    v-if="topic['upload_status'] === 'no_media'"
                >
                    <i>No media</i>
                </h4>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import CreateTopic from "../../data_entry/topics/CreateTopic"
    import UploadMaterial from "../../data_entry/topics_material/UploadMaterial"

    let topics = [
        {
            _id: {
                $oid: "6252e45816d4da1348396efd"
            },
            creation_date: "2022-04-10 16:06:16",
            record_status: "ACTIVE",
            subject_id: "6252e08f60becbaf983f0a8e",
            topic_name: "Factorization",
            upload_status: "no_media",
        },

        {
            _id: {
                $oid: "6252e44116d4da1348396efc"
            },
            creation_date: "2022-04-10 16:06:16",
            record_status: "ACTIVE",
            subject_id: "6252e08f60becbaf983f0a8e",
            topic_name: "Set Theory",
            upload_status: "uploaded",
        },
    ]

    export default{
        name: "Topics",

        components: {
            CreateTopic,
            UploadMaterial,
        },

        data(){
            return{
                createTopicVisible: false,
                uploadMaterialVisible: false,
                topics,
            }
        },

        methods: {
            openCreateTopic(){
              this.createTopicVisible = true
              // console.log("Create employee")
            },

            hideCreateTopic(){
              this.createTopicVisible = false
            },

            openUploadMaterial(){
              this.uploadMaterialVisible = true
            },

            hideUploadMaterial(){
              this.uploadMaterialVisible = false
            },

            toWatchVideo(){
                this.$router.push({ name: "Watch Video" })
            }
        },

        async created(){
            this.topics = this.getSubjectTopics
        },

        mounted(){},

        computed: mapGetters(["getSubjectTopics", "getSubjects"]),
    }
</script>