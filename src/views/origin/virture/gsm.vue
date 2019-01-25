<template>
    <el-container>
      <el-aside width="200px">
        <div >
          <transition-group name="list" tag="ol">
    <li v-for="item in items" v-bind:key="item" class="list-item">
      {{ item.text}}
    </li>
          </transition-group>
          <ol>
            <transition name="'fade">
            <li v-for="item in items" v-bind:key="item.id" >
              {{item.text}}
              <el-button type="primary" icon="el-icon-share" @click="showName" ></el-button>
            </li>
            </transition>
          </ol>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          this is header
        </el-header>
        <el-main>
          <transition>
         <p>can i ask you a question
           <span>{{answer}}</span>?
         <input v-model="queston" placeholder="总有惊奇的际遇，比如当我遇见你" @keyup.enter="alert('he')"></p>
          </transition>
          <p>answer:
          </p>
          <el-button type="primary" @click="open">addItem</el-button>
          <el-button type="primary" @click="dialogTableVisible=true">newItem</el-button>
          <el-dialog title="添加表格" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="100"></el-table-column>
              <el-table-column property="name" label="姓名" width="100"></el-table-column>
              <el-table-column property="address" label="地址" width="200"></el-table-column>
              <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"

                   >编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"

                   >删除</el-button>
                </template></el-table-column>
            </el-table>
          </el-dialog>
          <el-table
          :data="Tabeldata">
            <el-table-column v-for="col in columns" v-bind="{label:col.text,prop:col.name}" :key="col.id"></el-table-column>
          </el-table>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
          </el-button-group>

        </el-main>
        <el-footer >
          <p v-if="needfooter">this is a block for footer</p>
        </el-footer>
      </el-container>

    </el-container>
</template>

<script>
export default {
  name: 'gsm',
  data () {
    return {
      key: 'tabledata',
      items: [
        {text: 'python入门', id: 1}
      ],
      items1: [
        {text: 'python入门', id: 1}],
      needfooter: true,
      answer: '这就是答案',
      msg: '总有惊奇的际遇，比如当我遇见你',
      dialogTableVisible: false,
      columns: [{id: 1, text: '日期', name: 'date'},
        {id: 2, text: '名称', name: 'name'},
        {id: 3, text: '大小', name: 'size'} ],
      Tabeldata: window.localStorage.getItem(this.key),
      gridData: [
        {date: '20180901', name: 'test', address: '浙江省杭州市上城区江干'},
        {date: '20181001', name: 'hello', address: '浙江省杭州市西湖区留下'}
      ]
    }
  },
  methods: {
    showName: function () {
      console.log(this.propertyIsEnumerable())
      for (var i = 1; i < 50; i++) {
        this.items.push({text: 'python 从入门到放弃', id: i})
      }
    },
    addTable: function (question, answer) {
      var now = new Date()
      console.log(now)
      console.log(now.getUTCMonth())
      var month = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
      this.Tabeldata.push({date: month, name: question, size: answer})
    },
    open: function () {
      this.$notify({
        title: '这是一条提示信息',
        message: '<div>这是一个图片消息<ol><li>hello</li><li>test</li></ol></div>',
        duration: 0,
        type: 'success',
        position: 'top-left',
        dangerouslyUseHTMLString: true
      })
      this.$prompt(
        '<div>this is html' +
        '<input placeholder="请输入日期"><input placeholder="请输入名称"><input placeholder="请输入地址"> </div>', 'html', {
          dangerouslyUseHTMLString: true
        }

      )
    },
    delete: function () {
      this.$confirm('确认要删除这条数据嘛！', '确认消息', {
        confirmButtonText: '取消',
        cancelButtonText: '确认'
      })
    }

  },
  watch: {
    items: function (val, oldVal) {
      console.log(val, oldVal)
      this.items1.push(oldVal)
    },
    Tabeldata: function (val, oldVal) {
      console.log('add new item')
      console.log(val)
      this.$message('添加一个消息提示')
      window.localStorage.setItem(this.key, val)
    }

  }
}
</script>

<style scoped>
  .el-header{
    background-color: black;
  }
  .el-aside{
    background-color: #3a8ee6;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    float: left;
  }
  .el-main{
    background-color: #13ce66;
    padding-left: 10px;
    padding-top: 20px;
    padding-right: 10px;
  }
  .el-footer{
    background-color: #d39e00;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
