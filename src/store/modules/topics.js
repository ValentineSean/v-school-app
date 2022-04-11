import axios from "axios"

const state = {
    subject_topics: [],
    // project: {}
}

const getters = {
    getSubjectTopics: (state) => state.subject_topics,
}

const actions = {
    async fetchSubjectTopics({ commit }, subject_id){
        try{
            let response = await axios.get(`retrieve-subject-topics/${subject_id}`)

            let subject_topics = response.data.data
            
            console.log(response.data)
            // console.log(response.data.message)
            // console.log(response.data.status)
            subject_topics = {
                subject_id,
                subject_topics
            }
            commit("setSubjectTopics", subject_topics)

            return{
                status: "success",
                message: "subject topics successfully fetched"
            }
        }

        catch(error){
            console.log(error)

            return{
                status: "error",
                message: "Failed to fetch subject topics"
            }
        }
    },

    async createTopic({ commit }, topic){
        let subject_id = topic["subject_id"]
        let topic_name = topic["topic_name"]

        try{
            let response = await axios.post("create-topic", {
                subject_id,
                topic_name,
            })
            
            let new_topic = response.data.data
            // console.log(route)

            commit("addTopic", new_topic)

            return{
                status: "success",
                message: "Topic successfully created"
            }

        }

        catch(error){
            console.log(error)
            return{
                status: "error",
                message: "We are facing technical challenges"
            }
        }
    },

    async uploadMaterial({ commit }, material){
        let topic_id = material["topic_id"]
        let audio_file = material["audio_file"]

        material = new FormData()
        material.append("topic_id", topic_id)
        material.append("audio_file", audio_file)

        try{
            let response = await axios.post(`upload-material`, material)
            
            if(response["data"]["status"] === "200"){
                let updated_topic = response["data"]["data"]
                
                commit("setUpdatedTopic", updated_topic)

                return{
                    "status": "success",
                    "message": "Material successfully uploaded"
                }
            }

            else{

                return{
                    "status": "error",
                    "message": "Failed to upload material"
                }
            }
        }
        
        catch(error){
            return{
                "status": "error",
                "message": "Server technical problem"
            }
        }
    }

    // async refreshSubject_topic({ commit }, refreshed_subject_topic){
    //     console.log(refreshed_subject_topic)
    //     commit("setRefreshedSubject_topic", refreshed_subject_topic)
    // },

    
}

const mutations = {
    setSubjectTopics: (state, subject_topics) => (state.subject_topics = subject_topics),

    addTopic: (state, new_topic) => (state.subject_topics.subject_topics.unshift(new_topic)),
    
    setUpdatedTopic: (state, updated_topic) => {
        const index = state.subject_topics.subject_topics.findIndex(x => x._id.$oid === updated_topic["_id"]["$oid"])

        if(index !== -1){
            state.subject_topics.subject_topics.splice(index, 1, updated_topic)
        }
    },

    // setRefreshedSubject_topic: (state, refreshed_subject_topic) => {
    //     const index = state.subject_topics.findIndex(x => x._id.$oid === refreshed_subject_topic["_id"]["$oid"])

    //     if(index !== -1){
    //         state.subject_topics.splice(index, 1, refreshed_subject_topic)
    //     }
    // },
}

export default{
    state,
    getters,
    actions,
    mutations
}