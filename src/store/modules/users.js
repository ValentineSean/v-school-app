import axios from "axios"

const state = {
    users: [],
    // project: {}
}

const getters = {
    getUsers: (state) => state.users,
}

const actions = {
    async fetchUsers({ commit }){
        try{
            let response = await axios.get("retrieve-users")

            let users = response.data.data
            
            console.log(response.data)
            // console.log(response.data.message)
            // console.log(response.data.status)
            commit("setUsers", users)

            return{
                status: "success",
                message: "Users successfully fetched"
            }
        }

        catch(error){
            console.log(error)

            return{
                status: "error",
                message: "Failed to fetch users"
            }
        }
    },

    async createUser({ commit }, user){
        let first_name = user["first_name"]
        let last_name = user["last_name"]
        let email = user["email"]
        let role = user["role"]
        let password = user["password"]

        try{
            let response = await axios.post("create-user", {
                first_name,
                last_name,
                email,
                role,
                password,
            })
            
            let new_user = response.data.data
            // console.log(route)

            commit("addUser", new_user)

            return{
                status: "success",
                message: "User successfully created"
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

    
}

const mutations = {
    setUsers: (state, users) => (state.users = users),

    addUser: (state, new_user) => (state.users.unshift(new_user)),
    
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