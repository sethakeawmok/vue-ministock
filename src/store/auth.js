import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },

    getters: {
        autenticated (state){
            return state.token && state.user 
        },
        user (state){
            return state.user.data
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async signIn ({ dispatch }, credentials) {
            let respone = await axios.post('/login', credentials)
            
            //dispatch
            return dispatch('attempt', respone.data.user.auth_jwt) 
        },
        
        async attempt ({ commit, state }, token) {

            if (token){
                commit('SET_TOKEN', token)
            }
            
            if (!state.token){
                return
            }

            try {
                let respone = await axios.get('/api/user/me')

                commit('SET_USER', respone.data)
            } catch(e){
                
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        signOut ({commit}) {
            //return axios.post('api/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            //})
        }
    } 
}
