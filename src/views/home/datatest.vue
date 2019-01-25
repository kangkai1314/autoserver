<template>
    <div class="testview">
      <p>this is data test view</p>
      <p>{{menus}}</p>
      <el-form v-model="dataform">
        <el-form-item v-model="dataform.username" label="username">
          <el-input v-model="dataform.username" placeholder="input your passwd"></el-input>
        </el-form-item>
        <el-form-item v-model="dataform.passwd" label="passwd">
          <el-input v-model="dataform.passwd" placeholder="input your username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="getdata1">data</el-button>
        </el-form-item>
      </el-form>

      <ul><li v-for="item in items" :key="item">
        {{item.text}}
      </li> </ul>
      <div class="test">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6" style="background-color:#b3d8ff">
            <p>rhis is a </p>
            <el-button>click</el-button>
          </el-col>
          <el-col :span="6" style="background-color:black ">
            <p>this is for yue </p>
            <el-button>click</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'datatest',
  data () {
    return {
      items: [],
      dataform: {
        username: '',
        passwd: ''
      },
      menus: []
    }
  },
  methods: {
    getdata: function () {
      var instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/framework',
        timeout: 1000
      })
      instance.post('/jobs', {position_name: 'ttttt',
        posotion_num: '2',
        publish_time: '20181225160000'}).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getdata1: function () {
      this.$axios.get('/menus/', {auth: {username: 'kangkai', password: '19930304kk'}}).then(function (response) {
        console.log(response.data)
        console.log(typeof response.data)
        this.me.push(response.data.results)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .testview{
    background-color: #8cc5ff;
  }

</style>
