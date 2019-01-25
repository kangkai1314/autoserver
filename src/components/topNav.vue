<template>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true"
             text-color="blue" background-color="#ed795a" active-text-color="green" >
      <el-menu-item index="/" style="background-color: #007bff">自动化测试平台</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的测试任务</template>
        <el-menu-item index="/point">提交工单</el-menu-item>
        <el-menu-item index="/point">查看工单</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" ><a href="login.html">消息中心</a> </el-menu-item>
      <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">baidu</a></el-menu-item>
      <el-menu-item index="origin">后台</el-menu-item>

      <el-menu-item index="/setting" style="float: right">设置</el-menu-item>

        <el-menu-item index="/person" style="float: right">个人中心</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
      <el-badge :value="10" class="el-menu-item"><el-button type="small">消息中心</el-button></el-badge>
      <el-menu-item index="/nav" style="float: right">导航</el-menu-item>
      <el-menu-item index="/django/view">Django</el-menu-item>
    </el-menu>

</template>
<script>

export default {
  data () {
    return {
      activeIndex: '2'

    }
  },
  created () {

  },
  methods: {
    handleSelect: function () {
      console.log('this is select')
    }

  },
  watch: {

  }
}
</script>

<style>
  .el-menu-demo{
    background-color: white;
    top:0;
    left: 0;
    width: 100%;
    position: fixed;
  }

</style>
