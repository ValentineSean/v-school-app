<template>
    <div class="media-container">
        <h1>Math: Set Theory</h1>

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

        <!-- <h1>Generated Text</h1>
        <div class="pdf-viewer">
            <pdf
                class="pdf-page"
                :src="src"
                v-for="x in page_count"
                :key="x"
                :page="x"
            ></pdf>

            <embed
                class="pdf-viewer-util"
                src="pdfs/SetTheory.pdf"
                :style="{ color: '#1890ff' }"
            >
        </div> -->
    </div>
</template>

<script>
    // import pdf from "vue-pdf"

    // let loading_task = pdf.createLoadingTask("pdfs/SetTheory.pdf")

    export default{
        name: "ViewMaterial",

        components: {
            // pdf
        },

        data(){
            return{
                // src: loading_task,
                page_count: undefined,
            }
        },

        methods: {},

        async created(){},

        mounted(){
            // this.src.promise.then(pdf => {
            //     this.page_count = pdf.numPages
            // })
        },

        // computed: mapGetters([]),
    }
</script>

<style>

    .media-container{
        max-height: 100%;
        min-height: 100%;
    }

    video{
        border: solid 1px blue;
        width: 100%;
        max-height: 50% !important;
    }

    .audio-source{
        border: solid 3px lime;
    }

    ::cue{
        font-size: 24px;
        color: blue;
        background: white;
        top: 50%;
        /* margin: auto; */
        transform: translateY(-100%);
    }
</style>