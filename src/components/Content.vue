<template>
    <div class="cardview">
      <el-card class="box-card" :body-style="{'padding':'10px','height':'auto','width':'auto','background-color':'blue'}">
        <div slot="header" class="clearfix">
         <span>子卡片容器</span>
        </div>
        <div v-for="o in 4" :key="o">
          <p>这是自卡片的内容</p>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped>
  .cardview{
    height: auto;
    width: 50%;
  }
  .clearfix{
    background-color: #007bff;
  }

</style>
