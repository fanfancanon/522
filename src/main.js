import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'
import Login from './pages/login'
import Home from './pages/home' 


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);



const routes=[
    {
        path: '/login',
        name: 'login',
        component: Login,
        props:true
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        props:true
    }
]


const router=new VueRouter({
    linkActiveClass: 'active',
    routes,
    mode: 'history'
})
//全局路由守卫
 router.beforeEach((to,from,next)=>{
        const {fullPath}=to
        if(!localStorage.getItem('token')&&fullPath!=='/login'){
            next('/login')
        }else{
            next()
        }
    })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')