<template>
     <el-col :span="20">
     <el-collapse v-model="activeName" accordion style="background-color: blue">
       <el-collapse-item title="基本项" name="1" style="background-color: black" v-model="activeName">
         <div>
           <el-row>
             <el-col :span="20">
               <el-select v-model="value" placeholder="请选择">

           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>

             </el-col>
             <el-col :span="4">
               <p>ip:{{ip}} port:{{port}}</p>
             </el-col>

           </el-row></div>
         <div> <el-radio v-model="radio" label="1">扣款</el-radio>
           <el-radio v-model="radio" label="2">补款</el-radio>
           <el-input v-model="input" placeholder="请输入内容"></el-input>
           <el-input v-model="input" placeholder="请输入内容"></el-input>
           <el-input v-model="input" placeholder="请输入内容"></el-input></div>
       </el-collapse-item>
       <el-collapse-item title="默认项" name="2">
         <div><span class="demonstration">开始时间</span>
           <el-date-picker
             v-model="value1"
             type="datetime"
             placeholder="选择日期时间">
           </el-date-picker></div>
         <div> <el-tag>会话ID</el-tag><el-input v-model="input" placeholder="请输入内容"></el-input>
           <el-radio v-model="radio" label="1">重认证</el-radio>
           <el-radio v-model="radio" label="2">授权</el-radio></div>
       </el-collapse-item>
       <el-collapse-item title="高级项" name="3">
         <div> <el-tag>用户号码</el-tag><el-input v-model="input" placeholder="请输入内容"></el-input>
           <el-tag>对端号码</el-tag><el-input v-model="input" placeholder="请输入内容"></el-input>
           <el-tag>用例名称</el-tag><el-input v-model="input" placeholder="请输入内容"></el-input></div>

       </el-collapse-item>
       <el-collapse-item title="日志" name="4">
         <div>    <el-table
           :data="tableData"
           style="width: 100%">
           <el-table-column
             prop="date"
             label="日期"
             width="180">
           </el-table-column>
           <el-table-column
             prop="name"
             label="姓名"
             width="180">
           </el-table-column>
           <el-table-column
             prop="address"
             label="地址">
           </el-table-column>
         </el-table></div>

       </el-collapse-item>
     </el-collapse>
     </el-col>
</template>

<script>
export default {
  name: 'sms',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      ip: '127.0.0.1',
      port: '23332'
    }
  }
}
</script>

<style scoped>

</style>
