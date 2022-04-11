<template>
    <div>
        <a-row>
            <a-col :span="18">
                <div class="media-container">
                    <h1>{{ topic_name }}</h1>

                    <!-- <video
                        controls
                        class="video-player"
                    >
                        <source
                            class="audio-source"
                            :src="mp3_shared_link"
                            type="audio/mp3"
                        >

                        <track kind="subtitles" label="English" :src="vtt_shared_link" type="text/vtt" srclang="en" default>
                    </video> -->

                    <video
                        controls
                        class="video-player"
                    >
                        <source
                            class="audio-source"
                            src="audios/Introduction to Set Theory.mp3"
                            type="audio/mp3"
                        >

                        <track kind="subtitles" label="English" src="audios/set_theory.vtt" type="text/vtt" srclang="en" default>
                    </video>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default{
        name: "ViewMaterial",

        components: {
            // pdf
        },

        data(){
            return{
                // src: loading_task,
                page_count: undefined,
                topic_name: "",
                mp3_shared_link: "",
                vtt_shared_link: "",
            }
        },

        methods: {},

        async created(){
            this.topic_name = this.getCurrentVideo["topic_name"]
            this.mp3_shared_link = this.getCurrentVideo["mp3_shared_link"]
            this.vtt_shared_link = this.getCurrentVideo["vtt_shared_link"]
        },

        mounted(){
            // this.src.promise.then(pdf => {
            //     this.page_count = pdf.numPages
            // })
        },

        computed: mapGetters(["getCurrentVideo"]),
    }
</script>

<style>

    .media-container{
        max-height: 50%;
        min-height: 50%;
        max-width: 100%;
        min-width: 50%;
        /* border: solid 1px blue; */
    }

    video{
        border: solid 1px #2E3440;
        width: 100%;
        max-height: 50% !important;
    }

    .audio-source{
        /* border: solid 3px lime; */
    }

    ::cue{
        font-size: 24px;
        color: #2E3440;
        background: white;
        top: 50%;
        /* margin: auto; */
        transform: translateY(-100%);
    }

    .app-image{
        transform: rotate(90deg);
        border: solid 1px lime;
        max-height: 100%;
    }
</style>