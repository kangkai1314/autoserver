<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-row class="container">
    <el-col :span="24" >
      <el-menu :default-active="activeIndex" class="el-menu-origin" mode="horizontal" @select="handleSelect" :router="true"
               background-color="black"
               text-color="white"
               active-text-color="blue"
               >
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">虚拟网元</template>
          <el-menu-item index="/origin/history">功能历史数据</el-menu-item>
          <el-menu-item index="/origin/sms">短信业务</el-menu-item>
          <el-menu-item index="/origin/gsm">语音业务</el-menu-item>
          <el-menu-item index="/origin/data">数据业务</el-menu-item>
          <el-menu-item index="/origin/message">报文</el-menu-item>
          <el-menu-item index="/migu">咪咕</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">项目管理</template>
          <el-menu-item index="/define">项目定义</el-menu-item>
          <el-menu-item index="/project">项目列表</el-menu-item>
          <el-menu-item index="/origin/template">模板管理</el-menu-item>

        </el-submenu>
        <el-submenu index="4">
          <template slot="title">用例管理</template>
          <el-menu-item index="/case">用例列表</el-menu-item>
          <el-menu-item index="/execute">执行用例</el-menu-item>
          <el-menu-item index="/task">工单管理</el-menu-item>
          <el-menu-item index="/ontime">定时执行</el-menu-item>

        </el-submenu>
        <el-submenu index="5">
          <template slot="title">批量管理</template>
          <el-menu-item index="/case">在线批量任务定义</el-menu-item>
          <el-menu-item index="/execute">账务批量任务定义</el-menu-item>
          <el-menu-item index="/task">标准数据</el-menu-item>

        </el-submenu>
        <el-submenu index="6">
          <template slot="title">系统管理</template>
          <el-menu-item index="/case">前置机管理</el-menu-item>
          <el-menu-item index="/execute">密码加密</el-menu-item>
          <el-menu-item index="/task">用户定义</el-menu-item>

        </el-submenu>
        <el-submenu index="7">
          <template slot="title">性能管理</template>
          <el-menu-item index="/case">计划列表</el-menu-item>
          <el-menu-item index="/execute">新建计划</el-menu-item>
          <el-menu-item index="/task">性能指标</el-menu-item>

        </el-submenu>
        <el-submenu index="8">
          <template slot="title">在线回归</template>
          <el-menu-item index="/case">报文展示</el-menu-item>
        </el-submenu>
      </el-menu>

    </el-col>
    <el-col :span="4">
      <router-view name="subleftview"></router-view>
    </el-col>
    <el-col :span="20">
      <router-view name="subview" ></router-view>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
