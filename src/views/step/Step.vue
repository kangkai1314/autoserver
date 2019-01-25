<template>
  <el-row>

    <el-steps :active="activeNames" simple :finish-status="success" >
      <el-step title="选择产品" icon="el-icon-edit" @click="jumpProduct" ></el-step>
      <el-step title="选择模板" icon="el-icon-upload"></el-step>
      <el-step title="选择用例矩阵" icon="el-icon-picture"></el-step>
      <el-step title="选择测试用例" icon="el-icon-edit"></el-step>
      <el-step title="执行测试用例" icon="el-icon-upload"></el-step>
      <el-step title="查看测试报告" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-col span="10" style="width: 100%;height: 400px">
     <div class="product" v-if="this.activeNames===0" >
       <p>产品列表</p>
       <el-row>
         <el-table :data="prodcuts">
           <el-table-column>

           </el-table-column>
         </el-table>
       </el-row>
     </div>
      <div class="template" v-if="this.activeNames===1">
        <p>模板列表</p>
        <el-table :data="templates"></el-table>
      </div>
      <div class="choose_case_square" v-if="this.activeNames===2">
        选择用例矩阵
      </div>
      <div class="execuet_case_square" v-if="this.activeNames===3">
        执行用例矩阵
      </div>
      <div class="choose_case" v-if="this.activeNames===4">
        选择用例
      </div>
      <div class="execute_case" v-if="this.activeNames===5">
        执行用例
      </div>
      <div class="see_report" v-if="this.activeNames===6">
        查看测试报告
      </div>
    </el-col>
    <el-button-group>
      <el-button type="primary" @click="returnstep">上一页</el-button>
      <el-button type="primary" @click="nextstep">下一页</el-button>
    </el-button-group>
  </el-row>

</template>

<script>
export default {
  name: 'Step',
  data () {
    return {
      activeNames: 0,
      maxsteps: 6,
      minsteps: 0,
      prodcuts: [],
      templates: []
    }
  },
  methods: {
    jumpProduct (key, keyPath) {
      this.$router.push('step/product')
    },
    handleChange: function () {
      console.log('message')
    },
    returnstep: function () {
      this.activeNames--
      if (this.activeNames < this.minsteps) {
        this.activeNames = 0
      }
    },
    nextstep: function () {
      this.activeNames++
      if (this.activeNames > this.maxsteps) {
        this.activeNames = 6
      }
    }
  }
}
</script>

<style scoped>

</style>
