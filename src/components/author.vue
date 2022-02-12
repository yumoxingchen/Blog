<script setup>
import axios from 'axios'

</script>
<script>
export default{
  data() {
    return {
      sidebar:"http://localhost:8000/static/sidebar.jpg",
      Avatar:"http://localhost:8000/static/Avatar.jpg",
      aMottos:"",
      aName:""
    }
  },
  mounted() {
    axios.get('http://localhost:8000/static/AuthorInfo.json')
    .then(response => {
      this.aMottos = response.data.authorMottos
      this.aName = response.data.authorName
      console.log(this.aName,this.aMottos)
    })
  },

}
</script>
<template>
    <el-affix :offset="60">
        <div style="box-shadow:0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    text-align: center;
    ">
    
        <el-image fit="contain" :src="sidebar" style="width: 98%;margin-top: 1%;border-radius: 1%;"></el-image>
        <el-image :src="Avatar" style="border-radius: 50%;margin-top: -20%;width: 25%;"></el-image>
        <h3>{{aName}}</h3>
        <p>{{aMottos}}</p>
     
        </div>
    </el-affix>   
</template>