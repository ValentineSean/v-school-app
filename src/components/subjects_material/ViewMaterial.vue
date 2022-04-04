<template>
    <div>
        <h1>Mathematics: Sets 1: Venn Diagram</h1>

        <h1>Uploaded Audio</h1>

        <a-row>
            <a-col :span="12">
                <audio
                    controls
                    :style="{ background: '#1890ff' }"
                >
                    <source
                        src="audios/Introduction to Set Theory.mp3"
                        type="audio/mp3"
                    >
                </audio>
            </a-col>

            <a-col :span="12">
                <a-button
                    type="primary"
                    @click.prevent="downloadMaterial"
                    :loading="downloadMaterialLoading"
                    :style="{ float: 'right' }"
                    icon="download"
                >
                    download
                </a-button>
            </a-col>
        </a-row>

        <h1>Generated Text</h1>
        <div class="pdf-viewer">
            <!-- <pdf
                class="pdf-page"
                :src="src"
                v-for="x in page_count"
                :key="x"
                :page="x"
            ></pdf> -->

            <embed
                class="pdf-viewer-util"
                src="pdfs/SetTheory.pdf"
                :style="{ color: '#1890ff' }"
            >
        </div>
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
    .pdf-viewer{
        /* border: solid 1px red; */
        /* width: 100%; */
        /* overflow-y: scroll !important; */
    }

    .pdf-viewer-util{
        /* border: solid 1px lime; */
        width: 100%;
        height: 400px;
        /* overflow-y: scroll !important; */
    }
</style>