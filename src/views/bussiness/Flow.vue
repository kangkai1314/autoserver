<template>
   <el-row>
     <el-input
       placeholder="输入关键字进行过滤"
       v-model="filterText">
     </el-input>
     <el-row><el-col :span="6"> <el-input v-model="test1"></el-input></el-col>
     <el-col :span="6"><el-input v-model="test2"></el-input></el-col>
     <el-col :span="12"> <p>{{test3}}</p></el-col></el-row>

     <el-tag v-for="item in status" :key="item" type="item.type" @click="showtags" class="el-button">{{item.msg}}</el-tag>

     <el-tree
       class="filter-tree"
       :data="data2"
       :props="defaultProps"
       default-expand-all
       :filter-node-method="filterNode"
       ref="tree2"
       show-checkbox>

     </el-tree>
   </el-row>
</template>

<script>
export default {
  name: 'Flow',

  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    showtags: function () {
      console.log('show tags')
    },
    test: function () {

    }

  },
  data () {
    return {
      test1: '',
      test2: '',

      status: [{type: 'success', msg: '启动成功'}, {type: 'info', msg: '未启动'}, {
        type: 'danger', msg: '异常'
      }],
      filterText: '',
      data2: [{
        id: 1,
        label: '计费流程管理',
        children: [{
          id: 4,
          label: '语音业务流程',
          children: [{
            id: 9,
            label: 'gsm_huawei                              正常起订',
            status: '0'
          }, {
            id: 10,
            label: 'gsm_dell'
          }]
        }]
      }, {
        id: 2,
        label: '账务流程管理',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '信控流程管理',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    test3: {
      get: function () {
        return this.test1 + this.test2
      }
    }

  }
}
</script>

<style scoped>

</style>
