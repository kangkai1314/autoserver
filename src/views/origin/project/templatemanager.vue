<template>
   <el-card class="box-card" >
     <div slot="header" class="clearfix">
       <span>模板管理</span>

     </div>
     <div class="content">
       <el-container>
         <el-aside>
           <el-card class="project-card">
             <div slot="header" class="clearfix">
               <span>项目列表</span>
             </div>
             <div v-for="o in 4" :key="o" class="text item">
               {{'列表内容 ' + o }}
             </div>
           </el-card>
         </el-aside>
         <el-main>
           <el-card class="template-card">
             <div slot="header" class="clearfix">
               <span>项目列表</span>
             </div>
             <div v-for="o in 4" :key="o" class="text item">
               {{'列表内容 ' + o }}
             </div>
           </el-card>
         </el-main>
       </el-container>
     </div>

   </el-card>
</template>

<script>
export default {
  name: 'templatemanager'
}
</script>

<style scoped>
.box-card{
  background-color: whitesmoke;
  width: 1000px;
  padding-left: 50px;
  padding-top: 50px;
}
</style>
