<template>
    <div>
        <h1>Math Topics</h1>

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

        <a-list item-layout="horizontal" :data-source="topics" bordered>
            <a-list-item slot="renderItem" slot-scope="topic">
                <a-list-item-meta>
                    <span slot="title">{{ topic['topic_name'] }}</span>
                </a-list-item-meta>

                <a-button
                    type="primary"
                    @click.prevent="toWatchVideo(topic)"
                    :style="{ float: 'right' }"
                    title="Click to watch video"
                    v-if="topic['upload_status'] === 'uploaded'"
                >
                    watch video
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

        components: {},

        data(){
            return{
                topics,
            }
        },

        methods: {
            toWatchVideo(){
                this.$router.push({ name: "Watch Video" })
            }
        },

        async created(){},

        mounted(){},

        // computed: mapGetters([]),
    }
</script>