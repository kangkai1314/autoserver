<template>
   <div class="login-page">
     <div class="nav-menu">
       <el-menu mode="horizontal">
         <el-menu-item v-for="menu in menus" :key="menu.id" :index="menu.path">{{menu.name}}</el-menu-item>
       </el-menu>
     </div>
     <img :src="image" style="width:100%"/>
     <h1 style="text-align: center">登录</h1>

     <div class="login-form">
       <el-form :inline="true" >
         <el-form-item label="用户名" style="width: 100%">
           <el-input></el-input>
         </el-form-item>
         <el-form-item label="密码" style="width: 100%">
           <el-input></el-input>
         </el-form-item>
         <el-form-item >
           <el-button>确认</el-button>
           <el-button>注册</el-button>
         </el-form-item>
       </el-form>
     </div>
     <div class="footer">

     </div>
   </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menus: [{id: 1, name: '主站', path: '/home'},
        {id: 2, name: '音频', path: '/home'},
        {id: 3, name: '游戏中心', path: '/home'},
        {id: 4, name: '直播', path: '/home'},
        {id: 5, name: '会员购', path: '/home'},
        {id: 6, name: '漫画', path: '/home'}],
      image: require('../../../static/pics/bilibili/logo2.png')
    }
  }
}
</script>

<style scoped >
.login-page{
  background-color: white;
}
  .login-form{
    text-align: center;
  }
</style>
