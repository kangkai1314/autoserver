<template>
  <div class="content">
    <div class="main-header">
      <!--头部-->
      <el-col :span="24">
       <router-view name="top" ></router-view>
        </el-col>
      <el-col :span="4">
        <router-view name="leftnav"></router-view>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </div>

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
<style >
</style>
