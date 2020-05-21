import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import qs from 'qs'


Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
      data: []
  },


  mutations: {
      'DECIDE_DATA' (state, action) {
        state.data = action
      },
  },


  actions: {
    //获取数据
      'DECIDE_ACTION' ({commit}) {
          Axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
              .then(res => {
                  commit('DECIDE_DATA', res.data.users)
              })
      },
    //添加数据
      'DECIDE_ADD' (addData, action) {
          Axios.post('https://api.baxiaobu.com/index.php/home/v5/add',
              qs.stringify(action))
              .then(res => {
                  if (res.data.status === '200') {
                      addData.dispatch('DECIDE_ACTION')
                  }
              })
      },
    //删除数据
      'DECIDE_DEL' (delData, action) {
          Axios.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser',
              qs.stringify(action))
              .then(res => {
                  if (res.data.status === '200') {
                    delData.dispatch('DECIDE_ACTION')
                  }
              })
      },
    //搜索数据
      'DECIDE_SEARCH' (seaData,action) {
          Axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser')
              .then(res => {
                  let data = res.data.users
                  data = data.filter(v => {
                      return v.name === action
                  })
                  seaData.commit('DECIDE_DATA', data)
                 
              })
      },
    //修改数据
      'DECIDE_MODI' (modiData,action) {
          Axios.post('https://api.baxiaobu.com/index.php/home/v5/updateUser',
              qs.stringify(action))
              .then(res => {
                  if (res.data.status === '200') {
                    modiData.dispatch('DECIDE_ACTION')
                  }
              })
      }
    
  }



})
