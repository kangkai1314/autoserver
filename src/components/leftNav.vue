<template>
  <!--左侧导航-->
  <el-menu default-active="1" class="el-menu-vertical-demo"  :collapse="isCollapse" :router="true">
    <el-button type="small" @click="chagestatus">调节</el-button>
    <el-submenu index="1"  >
      <template slot="title">
        <i class="el-icon-time" ></i>
        <span slot="title">测试点</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/step" >测试点创建</el-menu-item>
        <el-menu-item index="/point">
          测试点管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/case" >
      <i class="el-icon-menu"> </i>
      <span slot="title">测试用例</span>
    </el-menu-item>
    <el-menu-item index="/template" >
      <i class="el-icon-document">
      </i>
      <span slot="title">模板管理</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">数据配置</span>
      </template>
      <el-menu-item-group>
        <span slot="title">用户产品</span>
        <el-menu-item index="/product" >{{message}}</el-menu-item>
        <el-menu-item index="1-2">用户配置</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group >
        <span slot="title">话单</span>
        <el-menu-item index="/xdr">清单同步</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-phone"></i>
        <span slot="title">数据配置</span>
      </template>
      <el-menu-item-group>

        <el-menu-item index="/flow" >流程监控</el-menu-item>
        <el-menu-item index="/flow">流程管理</el-menu-item>
      </el-menu-item-group>

    </el-submenu>
    <el-menu-item index="/report" >
    <i class="el-icon-menu"> </i>
    <span slot="title">测试报告</span>
  </el-menu-item>
    <el-menu-item index="/datatest" >
      <i class="el-icon-menu"> </i>
      <span slot="title">数据测试</span>
    </el-menu-item>

  </el-menu>

</template>
<script>
export default {
  name: 'leftNav',
  data () {
    return {
      isCollapse: true,
      message: '产品配置'
    }
  },
  methods: {
    jumpTo (url) {
      this.$router.go(url)
    },
    chagestatus: function () {
      console.log('change status')
      if (this.isCollapse === false) {
        this.isCollapse = true
      } else {
        this.isCollapse = false
      }
    }

  },
  watch: {

  }
}
</script>
