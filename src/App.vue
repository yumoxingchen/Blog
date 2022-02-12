<script setup>

import Author from './components/author.vue'
import Headerbar from './components/herderbar.vue'

</script>

<script>
export default {
  name:'index',
    data() {
        return {
            leftSpace:4,
            articleSpace:12,
            authorSpace:4,
            rightSpace:4,
            condition:true,

        }
    },
    components:{
      Author,
      Headerbar
    }
}


</script>

<template>
  <el-container>
    <!-- 顶栏 -->
    <el-header height="80px">
      <!-- <div style="color: brown;background-color: burlywood;">123123233223</div> -->
      <Headerbar></Headerbar>
    </el-header>

    </el-container>
          <el-row>
            <el-col :span="leftSpace"></el-col>
            <el-col :span="articleSpace">
              
              <!-- 填充主体内容 -->
              <router-view ></router-view>

            </el-col>
            
            <el-col :span="authorSpace" v-if="condition">
            <Author>
              
            </Author>
            </el-col>

            <el-col :span="rightSpace"></el-col>
          </el-row>
</template>


