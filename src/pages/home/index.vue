<template>
    <div class="pages-home">
        <div class="home-seach">
            <input type="text" placeholder = "搜索" ref = 'input0'>
            <button @click = "onSearch">搜索</button>
        </div>
         <div class="home-add">

            <button class = "but" @click = "onAddshow">添加</button>
            <div class = "home-add-Details" v-show = "isShow">
                <p> 用户名：<input type = "text" ref = 'input1'></p>
                <p> 密码：<input type = "text" ref = 'input2'></p>
                <button @click="onAdd">确定</button>

            </div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>用户名</th>
                    <th>密码</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "item in data" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>
                        <button @click = "onDel(item.id)">删除</button>
                        <button @click = " onModificationmodel(item)">修改</button>
                    </td>
                </tr>
            </tbody>
            <div class = "table-model" v-show = "isShow1">
                <p>用户名:<input type="text" ref = 'input3'></p>
                <p>密码:<input type="text" ref = 'input4'></p>
                <button @click = "onModification">确定</button>
            </div>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import './style.css'
export default {
        data() {
            return {
                isShow:false,
                isShow1:false
            }
        },
        created () {
            //data数据
            this.$store.dispatch('DECIDE_ACTION')
        },

        methods: {
          //添加框的显示与隐藏
            onAddshow () {
                if (this.isShow) {
                    this.isShow = false
                }
                else {
                    this.isShow = true
                }
            }  ,
          //添加
            onAdd (name,age) {
                let Added = {name,age}
                Added.name = this.$refs.input1.value,
                Added.age = this.$refs.input2.value,
                this.$store.dispatch('DECIDE_ADD', Added)
                this.isShow = false
            },

          //删除
            onDel (id) {
                let Delda = {id: id}
                this.$store.dispatch('DECIDE_DEL', Delda)
            },
            
          //搜索
            onSearch (name) {
                name = this.$refs.input0.value
                console.log(name)
                this.$store.dispatch('DECIDE_SEARCH',name)
            },
          //修改模态框的显示隐藏
            onModificationmodel (data) {
                this.$refs.input3.value=data.name
                this.$refs.input4.value=data.address
                if (this.isShow1) {
                    this.isShow1 = false
                }
                else {
                    this.isShow1 = true
                }
            },
          //修改
            onModification (name,address) {
                let Modification = {name,address}
                Modification.name = this.$refs.input3.value,
                Modification.address = this.$refs.input4.value,
                this.isShow1 = false
                this.$store.dispatch('DECIDE_MODI', Modification)
            }
        },
        computed: {
            ...mapState(['data'])
        }
      }
</script>

