<template>
  <div>

    <a-modal
      title="Create Subject Form"
      :visible="createSubjectVisible"
      @cancel="$emit('handleHide')"
      :footer="null"
    >
      <div  :style="{ margin: '12px 12px 0' }">
        <a-form>
            <a-row>
                <a-col :span="24">
                    <a-form-item class="a-form-item" label="Subject Name" :style="{ marginRight: '6px' }">
                        <a-input
                            type="text"
                            v-model="subject_name"
                            placeholder="Subject Name"
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
                        <a-button type="primary" @click.prevent="saveSubject" :loading="createBtnLoading">save</a-button>
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
        name: "CreateSubject",

        data() {
            return {
                createBtnLoading: false,
                disabled: true,

                // Subject Details
                subject_name: "",
            };
        },

        props: {
            createSubjectVisible: Boolean,
        },

        emits: ["handleHide"],

        methods: {
            // ...mapActions(["createSubject"]),
            
            //   Create Subject
            async saveSubject(){
                this.createBtnLoading = true

                let subject = {
                    subject_name: this.subject_name,
                }

                // console.log(trip)

                await this.createSubject(subject).then((response) => {
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