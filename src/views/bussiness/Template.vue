<template>
  <el-row>
    <el-col span="24"> <h1>模板管理</h1></el-col>

    <el-table
      :data="tableData3"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        prop="date"
        label="资费模板类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="资费模板标识"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="资费模板名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="计费测试模板类型"
        width="160">
      </el-table-column>
      <el-table-column
        prop="address"
        label="计费测试用例模板标识"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="计费测试用例模板名称"
        width="180">
      </el-table-column>
    </el-table>
  </el-row>

</template>

<script>

export default {
  name: 'Template',
  data () {
    return {
      tableData3: [{
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }, {
        date: '套餐费',
        name: '35000001',
        province: '套餐费(X)元',
        city: '套餐费',
        address: '35000001',
        zip: '套餐费(X)元'
      }]
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.el-row{
  text-align: center;
  background-color: #13ce66;
}
</style>
