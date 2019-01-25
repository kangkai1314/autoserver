<template>
  <el-card class="box-card" style="padding-left: 40px">
    <div slot="header" class="clearfix">
      <span>搜索</span>
    </div>
    <div class="serachinfo">
      <el-row >
      <el-form :inline="true" :model="searchform" lass="search" style="padding-left: auto">
        <el-form-item label="ocs名称">
          <el-input placeholder="请输入内容" v-model="serachfrom.ocs"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="serachfrom.type"  placeholder="请选择" >
            <el-option
              v-for="item in serachfrom.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="serachfrom.status"
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
              v-for="item in serachfrom.statusoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round style="float: bottom" @click="searchform">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-row>
      <el-row>
        <el-button type="danger" style="float: left" @click="addTable" >增加</el-button>
        <el-button type="danger" style="float: left" >删除</el-button>
      </el-row>
</div>
    <div style="padding-left: 10px" class="serachtableinfo">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="blue"
        style="width: 100%"
        show-header="true"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column v-for="col in cols"
                         :prop="col.name"
                         :label="col.label"
                         :width="col.width"
                         :key="col.name"
                         sortable
        ></el-table-column>
        <el-table-column

          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" icon="el-icon-edit" ></el-button>
            <el-dialog title="编辑条目" :visible.sync="dialogFormVisible">
              <el-form :model="submittable">
                <el-form-item label="ID">
                  <el-input v-model="submittable.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="submittable.desc" autocomplete="off"></el-input>

                </el-form-item>
                <el-form-item label="时间">
                  <el-input v-model="submittable.date" autocomplete="off"></el-input>

                </el-form-item>
                <el-form-item label="状态">
                  <el-input v-model="submittable.status" autocomplete="off"></el-input>

                </el-form-item>
                <el-form-item label="类型">
                  <el-input v-model="submittable.type" autocomplete="off"></el-input>

                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>

            </el-dialog>
            <el-button @click="handleDelete(scope.row,scope.$index)" type="text"  icon="el-icon-delete" ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="friendlsts">
    <el-row>
      <el-col :span="4" >
         <div  v-if="seen" class="friendlst">
           <p>好友列表</p>
           <ol>
             <li v-for="friend in friends" :key="friend">
               {{friend}}
             </li>
           </ol>
           <div class="bottombuttons">
             <el-row>
               <el-col :span="12">
                 <el-badge :value="number" class="item">
                   <el-button size="small">消息</el-button>
                 </el-badge>
               </el-col>
               <el-col :span="12">
                 <el-badge :value="number" class="item">
                   <el-button size="small">消息</el-button>
                 </el-badge>
               </el-col>

             </el-row>

           </div>
           <el-rate v-model="value3" show-score="true" show-text="true"></el-rate>
         </div>

      </el-col>
      <el-col :span="20" >
    <div class="messagelst">
      <p>test websocket</p>

    <el-button type="primary" @click="init">启动websocket</el-button>
      <el-button type="primary" @click="getfriends">获取好友信息</el-button>

    <ul><li v-for="chat in chat_info" :key="chat.id">
      <el-row>
        {{chat.user}}:{{chat.text}}
      </el-row>
    </li>
    </ul>
      <el-form :inline="true" :model="chatform" class="chats">
        <el-form-item>
          <el-select v-model="choosefriends"
             multiple
          placeholder="请选择你要发送的好友">
            <el-option v-for="item in friends"
                       :key="item"
                       :label="item"
                       :value="item"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item label="发送消息">
          <el-input v-model="chatform.text" placeholder="请输入你想说的话" suffix-icon="el-icon-edit" prefix-icon="el-icon-edit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="onsend" >发送消息</el-button>

        </el-form-item>
      </el-form>

    </div>
      </el-col>
    </el-row>
    </div>
  </el-card>
</template>

<script>

import List from '../project/list'
import ElSelectDropdown from 'element-ui/packages/select/src/select-dropdown'
export default {
  name: 'history',
  components: {ElSelectDropdown, List},
  data () {
    return {
      choosefriends: [],
      friends: [],
      dialogFormVisible: false,
      serachfrom: {
        ocs: null,
        options: [{
          value: '选项1',
          label: 'SMS'
        }, {
          value: '选项2',
          label: 'GSM'
        }, {
          value: '选项3',
          label: 'GPRS'
        }],
        type: null,
        status: null,
        statusoptions: [
          {
            value: '选项1',
            label: '退出'
          }, {
            value: '选项2',
            label: '处理'
          }, {
            value: '选项3',
            label: '完成中'
          }

        ]

      },
      number: 0,
      chatform: [],
      webscok: null,
      chat_info: [{
        id: 1, text: '欢迎来到websocket世界' }
      ],

      value5: [],
      value11: [],
      cols: [
        {name: 'id', label: 'ID', width: 60},
        {name: 'desc', label: '描述', width: 200},
        {name: 'ocs', label: 'ocs名称', width: 150},
        {name: 'type', label: '类型', width: 100},
        {name: 'date', label: '创建时间', width: 100},
        {name: 'status', label: '状态', width: 100}

      ],
      tableData3: [],
      multipleSelection: [],
      submittable: { id: null,
        desc: null,
        date: null,
        status: null,
        type: null},
      value3: 0,
      seen: false

    }
  },

  methods: {
    init: function () {
      var url = 'ws://127.0.0.1:2226'
      this.websock = new WebSocket(url)
      this.websock.onmessage = this.onmessage
      this.websock.onerror = this.onerror
    },
    onmessage: function (event) {
      var count = this.chat_info.length + 1
      var response = event.data
      console.log(response)
      try {
        var obj = JSON.parse(response)
      } catch (e) {
        this.$message({
          message: '收到好友信息',
          type: 'success'
        })
        this.chat_info.push({id: count, text: response, user: '服务器消息'})
        this.number += 1
      } finally {
        if (obj.hasOwnProperty('friends')) {
          this.friends = obj.friends
          console.log(obj.friends)
          console.log(typeof obj)
          console.log(typeof obj.friends)
        } else if (obj.hasOwnProperty('msg')) {
          this.chat_info.push({id: count, text: obj.msg, user: '服务器消息'})
          this.number += 1
        }
      }
    },
    onsend: function () {
      if (this.choosefriends.length === 0) {
        this.websock.send(this.chatform.text)
      } else {
        console.log(this.chatform.text)
        console.log(this.choosefriends)
        var obj = {name: this.choosefriends, text: this.chatform.text}
        var jsonobj = JSON.stringify(obj)
        this.websock.send(jsonobj)
      }
    },
    onerror: function (event) {
      this.$message({
        message: '服务未启动',
        type: 'warning'
      })
    },
    addTable: function () {
      if (this.tableData3.length === 0) {
        let count = 1
        this.tableData3.push({
          id: count,
          desc: 'test',
          ocs: '语音',
          type: 'SMS',
          date: '2016-05-03',
          status: '完成'
        })
      } else {
        var datalst = []
        for (var i = 0; i < this.tableData3.length; i++) {
          datalst.push(this.tableData3[i].id)
        }
        var count1 = Math.max.apply(null, datalst) + 1
        console.log(count1)
        this.tableData3.push({
          id: count1,
          desc: 'test',
          ocs: '语音',
          type: 'SMS',
          date: '2016-05-03',
          status: '完成'
        })
      }
    },
    handleDelete: function (row, index) {
      console.log(index, row)
      console.log(typeof row)
      var lst = this.tableData3.entries()
      for (var x of lst) {
        console.log(x[1])
        if (x[1].id === row.id) {
          this.tableData3.splice(x[0], 1)
        }
      }
    },
    handleClick: function (row) {
      this.dialogFormVisible = true
      this.submittable = row
    },
    searchform: function () {
      console.log('serach form')
      this.tableData3.filter(this.searchform.ocs)
    },
    getfriends: function () {
      if (this.websock != null) {
        var msg = 'friends'
        this.websock.send(msg)
        this.seen = true
        console.log(this.seen)
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {

  },
  destroyed: function () {
    console.log('websocket close')
  },
  watch: {
    seen: function (oldval, newval) {
      this.webscok.send('getfriends')
    }
  }

}
</script>

<style scoped>
.friendlst{
  padding-top: 50px;
  background-color: #3a8ee6;
}
  .serachinfo{
    background-color: whitesmoke;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .serachtableinfo{
    background-color: #007bff;
    padding-top: 10px;
  }

</style>
