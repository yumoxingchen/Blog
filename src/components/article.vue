<script setup>

defineProps({
  title: String,
  text: String,
  createTime: String,
  classify: String,
  changeTime: String,
  clickTimes: String,
  targetid:String,
});

</script>
<script>
export default{
  data() {
    return {
      targeturl:"/ap/"+this.targetid
    }
  },
}


</script>

<template>

  <router-link :to="targeturl">
  <el-row style="margin-bottom: 0.5%">
    <el-col :span="3"></el-col>
    <el-col :span="20">
      <el-card shadow="hover">
        <div>
          <div id="content">
            <el-row>
              <span
                style="
                  color: #66ccff;
                  position: relative;
                  left: 0.5%;
                  overflow: hidden;
                  margin-left: 1%;
                "
              >
                <h1 style="margin-top: -10%; margin-bottom: -1%">
                  {{ title }}
                </h1>
              </span>
            </el-row>
            <el-row>
              <el-col :span="1"></el-col>
              <el-col :span="22">
                <span
                  style="
                    color: #838585;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    margin-bottom: 2%;
                  "
                  >{{ text }}</span
                >
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>

            <el-row style="margin-bottom: -2%; font-size: 0.8%; color: #c4cbcf">
              <el-col :span="12">
                发布时间：{{ createTime }}&nbsp;最后修改于：{{ changeTime }}
              </el-col>
              <el-col :span="4">
                <p v-if="classify">分类:{{ classify }}</p>
              </el-col>
              <el-col :span="8" style="text-align: right">点击量：{{clickTimes}} </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
  </router-link>

</template>

<style>
a{
  text-decoration:none;
}
</style>
