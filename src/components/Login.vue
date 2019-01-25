<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="login_module" >
    <el-row >
      <el-row>
      <el-col :span="8">
        <h3>登录中心</h3>
      </el-col>
      <el-col :span="8">
        <img :src="loginform.image2" style="width: 50px;height: 50px"/>
      </el-col>
      <el-col :span="8">
        <h4>设置中心</h4>
      </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="imageview">
            <p>this is other view</p>
            <el-tabs type="card">
              <el-tab-pane label="login">value</el-tab-pane>
              <el-tab-pane label="register">pest</el-tab-pane>
            </el-tabs>
          </div>

        </el-col>
        <el-col :span="6">
          <div class="login_items" style="float: right">
            <el-form v-model="loginform" inline>
              <el-form-item label="用户名"  >
                <el-input v-model="loginform.username" prefix-icon="el-icon-user" aria-placeholder="请输入您的用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码a" >
                <el-input v-model="loginform.passwd" prefix-icon="el-icon-setting" placehodler="请输入您的密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="dologin">注册</el-button>
                <el-button @click="dologin">登录</el-button>
              </el-form-item>

            </el-form>
          </div>

        </el-col>

      </el-row>
     <el-row >
    <div class="login_footers">
      <Content v-for="o in 4" :key="o"></Content>
      <img :src="loginform.image"/>
    </div>
     </el-row>
    </el-row>
  </div>
</template>

<script>
import Content from './Content'
export default {
  name: 'Login',
  components: {Content},
  data () {
    return {
      status: true,
      activeIndex: '1',
      loginform: {
        username: '',
        passwd: '',
        image: require('../assets/1.jpg'),
        image2: require('../../static/pics/6103c34ac696d6370b81c7c9cca7e662467e2422.jpg')
      }
    }
  },
  methods: {
    dologin: function () {
      console.log('login to the system')
    },
    handleSelect: function () {
      console.log('this is a   ')
    }
  }
}
</script>

<style scoped>
  .login_module{
    height: 3000px;
    width: 1364px;
    background-color: deepskyblue;

  }
  .el-input{
    width: 200px;
  }
  .login_items{
    width: 300px;
    height: 240px;
    background-image: url("../assets/1.jpg");
  }
  .imageview{
    background-image: url("../assets/2.jpg");
  }

</style>
