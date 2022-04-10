<template>
  <div>

    <a-modal
      title="Upload Material Form"
      :visible="uploadMaterialVisible"
      @cancel="$emit('handleHide')"
      :footer="null"
    >
      <div  :style="{ margin: '12px 12px 0' }">
        <a-form>
            <a-row>
                <a-col :span="24">
                    <a-form-item class="a-form-item" label="Audio File" :style="{ marginRight: '6px' }">
                        <a-input
                            type="file"
                            @change="previewAudio"
                            placeholder="Audio File"
                        />
                    </a-form-item>
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="12">
                    <a-form-item>
                        <a-button type="danger" @click.prevent="$emit('handleHide')">cancel</a-button>
                    </a-form-item>
                </a-col>

                <a-col :span="12">
                    <a-form-item :style="{ float: 'right' }">
                        <a-button type="primary" @click.prevent="saveMaterial" :loading="createBtnLoading">save</a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script>
    // import { mapActions, mapGetters } from "vuex"
    
    export default {
        name: "UploadMaterial",

        data() {
            return {
                createBtnLoading: false,
                disabled: true,

                // Material Details
                audio_file: null,
            };
        },

        props: {
            uploadMaterialVisible: Boolean,
        },

        emits: ["handleHide"],

        methods: {
            // ...mapActions(["createSubject"]),

            previewAudio(event){
                this.audio_file = event.target.files[0]
            },
            
            //   Upload Material
            async saveMaterial(){
                this.createBtnLoading = true

                let material = {
                    audio_file: this.audio_file,
                }

                // console.log(trip)

                await this.uploadMaterial(material).then((response) => {
                    if(response.status === "info"){
                        this.$message.info(response.message);
                    }
                    
                    else if(response.status === "success"){
                        this.$message.success(response.message);
                    }
                    
                    else if(response.status === "warn"){
                        this.$message.warn(response.message);
                    }
                    
                    else if(response.status === "error"){
                        this.$message.error(response.message);
                    }
                })

                // this.$router.push({ name: "My Trip" })

                this.createBtnLoading = false
                
                this.$emit('handleHide')
            },
            
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false;
            },
        },

        // computed: mapGetters(["getStations", "getFleets", "getConductors"]),
    };
</script>