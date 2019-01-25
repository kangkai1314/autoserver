<template>
   <el-row>
     <el-row>
       <div class="bread">
         <section>
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
             <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
           </svg>
         </section>
         <section>
           <h1>this is body</h1>
           <p>test</p>
           <svg class="arrow"></svg>
         </section>
       <el-breadcrumb separator=">">
         <el-breadcrumb-item v-for="item in breaditmes" :key="item.id" :to="item.path">{{item.text}}</el-breadcrumb-item>
       </el-breadcrumb>
       <el-button type="primary" @click="getRoutes">routes</el-button>
       <el-button type="primary" @click="getInfo">info</el-button>
       </div>
     </el-row>
     <el-col :span="6">
       <div class="brand">
         <p>欢迎来到个人中心</p>
         <p>{{count}}</p>
         <el-row>
           <div  style="width: 100%" v-for="com in coms" :key="com.id">
           <el-button type="primary" style="padding: 20px" @click="showtext">{{com.text}}</el-button>
           </div>
           </el-row>
       </div>
     </el-col>
     <el-col :span="18">
       <div class="personinfo">
         <el-tabs v-model="activeName">
           <el-tab-pane v-for="com in coms" :key="com.id" :label="com.text" style="height: 300px" :name="com.name">
             <div class="panelcontent">
           {{com.text}}
             </div>
             <p>this is for test</p>

           </el-tab-pane>
         </el-tabs>
       </div>
     </el-col>
     <div class="cardcontent">
     <el-row :gutter="20">
       <div class="cardview" v-for="com in coms" :key="com.id">
       <el-col :span="6" :offset="1">
       <el-card  :key="com.id" :class="com.name" body-style="{padding:'20px'}">

       <div :class="com.name">

         <list></list>
       </div>

       </el-card>
       </el-col>
       </div>

     </el-row>
     </div>
   </el-row>
</template>

<script>
import List from '../origin/project/list'
import service from '../../../fetch/api'
export default {
  name: 'Person',
  components: {List},
  render: function (createElement) {
    return createElement('p', 'hello')
  },
  data () {
    return {
      breaditmes: [{id: 1, path: '/', text: '首页'}],
      coms: [{id: 1, name: 'person', text: '个人中心'},
        {id: 2, name: 'comsume', text: '消费详细'},
        {id: 3, name: 'game', text: '游戏详情'},
        {id: 4, name: 'habit', text: '喜好详情'} ],
      activeName: 'person',
      count: null

    }
  },
  methods: {
    showtext: function () {
      console.log('show text')
    },
    getRoutes: function () {
      console.log(this.$route.path)
      this.breaditmes.push(
        {id: 2, path: this.$route.fullPath, text: 'person'})
    },
    getInfo: function () {
      service.get('/jobs/', {auth: {
        username: 'kangkai',
        password: '19930304kk'
      }}).then(response => {
        console.log(response.data.count)

        this.count = (response.data.count)
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>
  .brand{
    background-color: #13ce66;
    padding: 10px;
    border: #13ce66;
    height: 400px;
  }
  .personinfo{
    background-color: #007bff;
    padding: auto;
    padding-left: 20px;
  }
  .bread{
    background-color: #b3d8ff;
    padding: 20px;
  }
  .panelcontent{
    background-color: black;
    padding: 10px;
    height: 200px;
  }
  .cardcontent{
    background-color: whitesmoke;
    padding: 20px;
  }

</style>
