<template>
  <div class="studytask">
    <el-card class="box-card" v-for="item in items" :key="item.id">
      <div slot="header" class="clearfix">
        <span>{{item.name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="jump" >登录平台</el-button>
      </div>
      <div>
        <el-row>
          <div v-if="item.name==='vue' ">
           <ol>
             <li>加载静态资源例如图片视频 </li>
             <li>列表加载数据图片显示评论</li>
           </ol>

          </div>
          <div v-if="item.name==='python' ">
            <ol>
              <li>python线程和进程通信</li>
            </ol>

          </div>
          <div v-if="item.name==='django' ">
            <ol>
              <li> </li>
            </ol>

          </div>
          <div v-if="item.name==='scrapy' ">
            <ol>
              <li>
                vue加载图片视频 </li>
            </ol>

          </div>

        </el-row>

      </div>
    </el-card>
  </div>
</template>
<style>
ul{
  padding-left: 20px;
  margin-right: 20px;
}
</style>
<script>
export default {
  name: 'dashboard',
  data () {
    return {
      chartColumn: null,
      chartBar: null,
      items: [
        {id: 1, name: 'vue'},
        {id: 2, name: 'django'},
        {id: 3, name: 'scrapy'},
        {id: 4, name: 'python'}
      ]
    }
  },
  mounted () {

  },
  methods: {
    jump () {
      this.$router.go('/login')
    }

  }
}
</script>
