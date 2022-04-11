<template>
  <div>

    <a-modal
      title="Create Topic Form"
      :visible="createTopicVisible"
      @cancel="$emit('handleHide')"
      :footer="null"
    >
      <div  :style="{ margin: '12px 12px 0' }">
        <a-form>
            <a-row>
                <a-col :span="24">
                    <a-form-item class="a-form-item" label="Topic Name" :style="{ marginRight: '6px' }">
                        <a-input
                            type="text"
                            v-model="topic_name"
                            placeholder="Topic Name"
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
                        <a-button type="primary" @click.prevent="saveTopic" :loading="createBtnLoading">save</a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script>
    import { mapActions } from "vuex"
    
    export default {
        name: "CreateTopic",

        data() {
            return {
                createBtnLoading: false,
                disabled: true,

                // Subject Details
                topic_name: "",
            };
        },

        props: {
            createTopicVisible: Boolean,
            subject_id: String,
        },

        emits: ["handleHide"],

        methods: {
            ...mapActions(["createTopic"]),
            
            //   Create Topic
            async saveTopic(){
                this.createBtnLoading = true

                let topic = {
                    subject_id: this.subject_id,
                    topic_name: this.topic_name,
                }

                // console.log(trip)

                await this.createTopic(topic).then((response) => {
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