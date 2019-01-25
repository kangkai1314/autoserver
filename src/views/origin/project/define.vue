<template>
   <el-col :span="24">
    <el-row>
      <el-row >
    <el-tag>项目名称</el-tag>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-row>
      <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="层次结构">
          <el-row>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-tag>子节点</el-tag><el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="属性定义"><el-row>
          <el-col :span="4">
            <el-button-group>
              <el-button type="primary" icon="el-icon-edit">用例来源</el-button>
              <el-button type="primary" icon="el-icon-share">用例类型</el-button>
              <el-button type="primary" icon="el-icon-delete">用例状态</el-button>
              <el-button type="primary" icon="el-icon-delete">用例优先级</el-button>
            </el-button-group>

          </el-col>
          <el-col :span="20">
            <el-table
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
            </el-table>
          </el-col>
        </el-row></el-tab-pane>
        <el-tab-pane label="常用变量">
          <el-button type="info" icon="el-icon-search">add</el-button>
          <el-table
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
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="详单定义"><el-row>
          <el-col :span="24">
            <el-tag type="info">xdr类型</el-tag>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">选择文件</el-button>
              <div slot="tip" class="el-upload__tip">未选择任何文件</div>
            </el-upload>
          </el-col>

        </el-row></el-tab-pane>
        <el-tab-pane label="主机管理"><el-button type="info" icon="el-icon-search">add</el-button>
          <el-table
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
          </el-table></el-tab-pane>

      </el-tabs>
      </el-row>
    </el-row>
   </el-col>
</template>

<script>
export default {
  name: 'define'
}
</script>

<style scoped>

</style>
