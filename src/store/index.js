import Vue from 'vue'
import Vuex from 'vuex'
import {get, post} from '../utils/request'
import api from '../services/api'
// import { login } from './modules'


Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
      data: []
  },

  mutations: {
      DECIDE_DATA (state, action) {
        state.data = action
      }
  },


  actions: {
      //获取数据
      DECIDE_ACTION ({commit}) {
          get(api.homeData).then(res => {
            // console.log(res.data)
            commit('DECIDE_DATA', res.data)
          })
      },
      //添加数据
      DECIDE_ADD (addData, action) {
        console.log(addData,action)
          post(api.homeAdd, action).then(res => {
              if(res.code === 200) {
                  addData.dispatch('DECIDE_ACTION')
              }
          })
      },
      //删除数据
      DECIDE_DEL (addDel, action) {

          post(api.homeDel, action) .then(res => {
              if(res.code === 200) {
                addDel.dispatch('DECIDE_ACTION')
              }
          })
      },
      //修改数据
      DECIDE_UPDATE (addDel, action) {

        post(api.homeUpdate, action) .then(res => {
            if(res.code === 200) {
              addDel.dispatch('DECIDE_ACTION')
            }
        })
      },
  },
  // modules: {
  //     login
  // }

})