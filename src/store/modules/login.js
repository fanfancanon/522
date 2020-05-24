import {post} from '../utils/request'
import api from '../services/api'

export default {
    namespaced: true,
    state: {
        isLogin:''
    },



    mutations: {
        DECIDE_LOGIN (state, action) {
          state.isLogin = action;
          sessionStorage.setItem('isLogin', action)
        }
    },

    actions: {
       DECIDE_ACTIONS_LOGIN({commit}, payload) {
          post(api.login).then(res => {
            if(res.code === 200) {
                commit('DECIDE_LOGIN', res.data.token)
            }
          })
       }
    }

    

}