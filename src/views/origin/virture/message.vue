<template>
    <el-row>
      <el-button type="primary" @click="count1">计数器</el-button>
      <p>{{countdata}}</p>
      <p>{{count}}</p>
      <p>统计共有：{{info}}</p>
      <ol>
        <li v-for="item in items" :key="item.id">
          {{item.text}}
        </li>
      </ol>
      <el-form ref="form" :model="form" label-width="100px" label-position="left" :rules="rules" size="mini" status-icon="false">
        <el-form-item label="activity" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="activityarea" >
          <el-select v-model="form.region" placeholder="请输入活动区域">
            <el-option label="区域1" value="上海"></el-option>
            <el-option label="区域2" value="北京"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="actvitytme">
          <el-date-picker type="date" placeholder="请选择活动时间" v-model="form.date1" style="width: 100%"></el-date-picker>
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
        <el-form-item label="intimedeliverery">
          <el-switch v-model="form.delivery"></el-switch>

        </el-form-item>
        <el-form-item label="activity3">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上"></el-radio>
            <el-radio label="线下"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="activitycontent">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submit('form')">创建活动</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <el-row>
        <div >
          <el-button type="primary" size="mini">addTab</el-button>
        </div>
        <div >
          <el-tabs v-model="edittabs" type="card" closable="true" ></el-tabs>
          <el-tab-pane v-for="(item) in edittabsvalue"
                       :key="item.name"
                       :label="item.title"
                       :name="item.name">
            {{item.content}}
          </el-tab-pane>

        </div>
      </el-row>
      <el-row>
        <div style="margin-bottom: 20px;">
          <el-button
            size="small"
            @click="addTab(editableTabsValue2)"
          >
            add tab
          </el-button>
        </div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="item in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"

          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in pics" :key="item" >
         <h1>{{item.text}}</h1>
        </el-carousel-item>
      </el-carousel>

    </el-row>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      countdata: this.$store.state.count,
      pics: [
        {src: './pics/1.jpg', text: 'pangyi'}

      ],
      items: this.$store.getters.donetodos,
      info: this.$store.getters.donecount,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, message: '长度不小于3', trigger: 'blur'}
        ]
      },
      edittabs: '2',
      edittabsvalue: [
        {
          title: '指南',
          name: '1',
          content: '这是有关于vue的指南信息'
        },
        {
          title: '组件',
          name: '2',
          content: '这是有关于vue的组件信息'
        }
      ],
      index: 2,
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    count1: function () {
      this.$store.commit('increament')
      this.items.push({id: this.$store.state.count, text: '增加item'})
    },
    submit: function (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$alert('提交成功')
        } else {
          return false
        }
      })
    },
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }

  }
}
</script>

<style scoped>

</style>
