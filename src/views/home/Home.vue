<template>
  <div class="content">
    <el-row>
    <!--头部-->
    <el-col :span="24">
      <div><router-view name="top"></router-view></div></el-col>
    </el-row>
    <el-row>
    <el-col :span="4">
      <router-view name="aside"></router-view>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }

}
</script>
<style>
  .content{
    width: 100%;
    height:100%;
    text-align: center;
  }
</style>
