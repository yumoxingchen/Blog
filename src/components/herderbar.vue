<script setup>
import { reactive ,ref } from 'vue';
import 'element-plus/dist/index.css'
const drawer = ref(false)
</script>
<script>

export default {
  data() {
    return {
      username: "登录",
      drawername: '登录',
      admin: false,
      
    }
  },
  methods: {

    loginreq() {
      //向服务器验证身份 
      //成功则创建cookie ，判断是否为admin ，drawername: '个人中心'

    }

  },
  mounted() {
    //先检查cookie
  },
}
const logform = reactive({
  loginname: '',
  password: ''
})
</script>
<template>
  <div>
    <el-row gutter="20" justify="space-between">
      <router-link to="/">
        <h1>YMXC Blog</h1>
      </router-link>  
      
      <el-button @click="drawer = true">{{ username }}</el-button>
      <!-- 抽屉主体 -->
      <el-drawer v-model="drawer" :title="drawername">
        <!-- 未登录时 -->
        <div v-if="drawername == '登录'">
          <el-form
            label-position="top"
            :model="logform"
          >
          <el-form-item label="邮箱">
            <el-input v-model="logform.loginname" >

            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="logform.password" type="password">

            </el-input>
          </el-form-item>
          <el-button type="second" @click="loginreq">登录</el-button>
          </el-form>

        </div>
        <!-- 登陆后 -->
        <div v-if="drawername != '登录'">
          <router-link to="/admin">
            <el-button v-if="admin">管理面板</el-button>
          </router-link>
        </div>

      </el-drawer>
    </el-row>
  </div>
</template>