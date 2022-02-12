<script setup>


defineProps({
    authorName:String,
    authorEmail:String,
    authorIcon:String,
    authorMottos:String,
    backgroundImg:String
})

</script>
<template>
    <el-affix :offset="60">
        <div style="box-shadow:0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    text-align: center;
    ">
    
        <el-image fit="contain" :src="backgroundImg" style="width: 98%;margin-top: 1%;border-radius: 1%;"></el-image>
        <el-image :src="authorIcon" style="border-radius: 50%;margin-top: -20%;width: 25%;"></el-image>
        <h3>{{authorName}}</h3>
        <p>{{authorMottos}}</p>
     
        </div>
    </el-affix>   
</template>