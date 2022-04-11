import axios from "axios"

const state = {
    subjects: [],
    // project: {}
}

const getters = {
    getSubjects: (state) => state.subjects,
}

const actions = {
    async fetchSubjects({ commit }){
        try{
            let response = await axios.get("retrieve-subjects")

            let subjects = response.data.data
            
            console.log(response.data)
            // console.log(response.data.message)
            // console.log(response.data.status)
            commit("setSubjects", subjects)

            return{
                status: "success",
                message: "subjects successfully fetched"
            }
        }

        catch(error){
            console.log(error)

            return{
                status: "error",
                message: "Failed to fetch subjects"
            }
        }
    },

    // async refreshSubject({ commit }, refreshed_subject){
    //     console.log(refreshed_subject)
    //     commit("setRefreshedSubject", refreshed_subject)
    // },

    
}

const mutations = {
    setSubjects: (state, subjects) => (state.subjects = subjects),
    
    // setRefreshedSubject: (state, refreshed_subject) => {
    //     const index = state.subjects.findIndex(x => x._id.$oid === refreshed_subject["_id"]["$oid"])

    //     if(index !== -1){
    //         state.subjects.splice(index, 1, refreshed_subject)
    //     }
    // },
}

export default{
    state,
    getters,
    actions,
    mutations
}