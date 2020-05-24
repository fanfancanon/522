<template>
    <div class="pages-login">
        <div class="pages-login-mask">
            
            <div class="pages-login-mask-child">
              <p>管理员登录</p>
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.pwd"></el-input>
                  </el-form-item>
              </el-form>
              <div class="buts">
                  <el-button type="primary" round @click="login">登录</el-button>
                  <el-button round>注册</el-button>
              </div>
              
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import './style.css'
export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              pwd: '',
            }
        };
    },
    computed: {
        ...mapState('login',['isLogin'])
    },
    methods: {
        ...mapActions('login', ['DECIDE_ACTIONS_LOGIN']),
        login () {
          // console.log(this.formLabelAlign)
          this['DECIDE_ACTIONS_LOGIN'](this.formLabelAlign)

        }
    },
    watch: {
        isLogin(isLogin) {
            isLogin ? this.$router.push('/home'):null
        }
    }
    
}

</script>

