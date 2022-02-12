<script setup>
import Article from './article.vue'
import axios from 'axios'

</script>
<script>
export default {

    data() {
        return {
            indexInfo:[]
        }
    },
    methods: {
              
    },
    mounted() {
      // 获取文章列表
      axios
      .get('./data.json')
      .then(response => (
        this.indexInfo = response.data,
        console.log(this.indexInfo)
      ))
    },
    components:{
      Article
    }
}
</script>

<template>

  <Article v-for="(items, index) in indexInfo" :key="index"
              :title="items.Title" 
              :text="items.text_context" 
              :classify="items.Classify" 
              :createTime="items.CreateTime" 
              :changeTime="items.ChangeTime"
              :clickTimes="items.ClickTimes"
              :targetid="items.targetid"></Article>

</template>