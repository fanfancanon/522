<template>
    <div class="pages-home">
        <div class="pages-home-le">
            <el-row class="tac">
                <el-col :span="50">
                    <el-menu
                      default-active="2"
                      class="el-menu-vertical-demo"
                      background-color="rgb(230, 230, 230)"
                      text-color="grey"
                      active-text-color="grey">
                      <el-submenu index="1">
                          <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                          </template>
                          <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                          </el-menu-item-group>
                          <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                          </el-menu-item-group>
                          <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                          </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="pages-home-ri">
            <el-button type="primary" @click="onAdd">添加</el-button>
            <div class="tj-home-model" v-show="isShow">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="供应商名称">
                    <el-input v-model="formLabelAlign.supplierName"></el-input>
                </el-form-item>
                <el-form-item label="供应商联系人">
                    <el-input v-model="formLabelAlign.supplierContact"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formLabelAlign.phone"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="formLabelAlign.address"></el-input>
                </el-form-item>
                <el-form-item label="备注信息">
                    <el-input v-model="formLabelAlign.description"></el-input>
                </el-form-item>
                </el-form>
                <el-button type="primary" @click="mastAdd">立即添加</el-button>
            </div>
            <div class="tj-home-model" v-show="isShow1">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="供应商名称">
                    <el-input v-model="formLabelAlign1.supplierName"></el-input>
                </el-form-item>
                <el-form-item label="供应商联系人">
                    <el-input v-model="formLabelAlign1.supplierContact"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formLabelAlign1.phone"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="formLabelAlign1.address"></el-input>
                </el-form-item>
                <el-form-item label="备注信息">
                    <el-input v-model="formLabelAlign1.description"></el-input>
                </el-form-item>
                </el-form>
                <el-button type="primary" @click="onModificationyes">立即修改</el-button>
            </div>
            <el-table
                :data="data"
                border
                style="width: 100%">
                <el-table-column
                    prop="supplierName"
                    label="供应商"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="supplierContact"
                    label="联系人"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="联系电话">
                </el-table-column>
                 <el-table-column
                    prop="supplierId"
                    label="预付款">
                </el-table-column>
                 <el-table-column
                    prop="address"
                    label="应付款">
                </el-table-column>
                 <el-table-column
                    prop="status"
                    label="状态">
                </el-table-column>
                 <el-table-column
                    prop="description"
                    label="描述">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button type="text" @click="onDel(scope.$index,data)">删除</el-button>
                        <el-button type="text" @click="onModification(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import './style.css'
export default {
       data() {
      return {
          isShow: false,
          isShow1: false,
          labelPosition: 'right',
          formLabelAlign: {
                supplierName: '',
                supplierContact: '',
                phone: '',
                address: '',
                description: ''
          },
          formLabelAlign1: {
                supplierName: '',
                supplierContact: '',
                phone: '',
                address: '',
                description: ''
          },
      }
    },
     methods: {
        //点击添加出现模态框
        onAdd () {
            if (this.isShow) {
                this.isShow = false
            }
            else {
                this.isShow = true
            }
        },
        //立即添加按钮
        mastAdd () {
            this.isShow = false
            this.$store.dispatch('DECIDE_ADD', this.formLabelAlign)
        },
        //删除
        onDel (id) {
            this.$store.dispatch('DECIDE_DEL', id)
        },
        //点击修改出现模态框
        onModification (data) {
            if (this.isShow1) {
                    this.isShow1 = false
                }
                else {
                    this.isShow1 = true
                }
                // console.log(data)
                this.formLabelAlign1=data
            },
        //立即修改按钮
        onModificationyes () {
            this.$store.dispatch('DECIDE_UPDATE', this.formLabelAlign1)
            this.isShow1 = false
        }
     },
    created () {
      this.$store.dispatch('DECIDE_ACTION')
    },
    computed: {
        ...mapState(['data'])
    }
}
</script>

