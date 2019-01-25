<template>
  <el-table
    :data="tableData3"
    style="width: 100%">
    <el-table-column
      label="18077769889 乐享4G（199元） 计费测试报告"
      width="150">
      <el-table-column
        label="测试点"
        prop="point">
      </el-table-column>
      <el-table-column label="资费参数" prop="parameter">
      </el-table-column>
      <el-table-column label="发生业务量">

      </el-table-column>
      <el-table-column label="费用">
        <el-table-column
          prop="expect"
          label="预期结果"
          width="120">
        </el-table-column>
        <el-table-column
          prop="value"
          label="测试值"
          width="120">
        </el-table-column>

      </el-table-column>
      <el-table-column label="服务">
        <el-table-column
          prop="expect"
          label="预期结果"
          width="120">
        </el-table-column>
        <el-table-column
          prop="value"
          label="测试值"
          width="120">
        </el-table-column>

      </el-table-column>
      <el-table-column label="比对结果" prop="result">

      </el-table-column>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'report',
  data () {
    return {
      tableData3: [{
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }, {
        point: '套餐费',
        parameter: '199',
        expect: '199',
        value: '199',
        result: '通过'
      }]
    }
  }
}
</script>

<style scoped>

</style>
