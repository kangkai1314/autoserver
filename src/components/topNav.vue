<template>
    <div class="menu-view">
       <div class="fixed-top">
        <h1>自助化代码构建平台</h1>
         <el-menu mode="horizontal" :router="true">
           <el-menu-item index="/origin/index">index</el-menu-item>
         </el-menu>
       </div>
    </div>

</template>
<script>

export default {
  name: 'topNav',
  data () {
    return {

    }
  },
  created () {
    this.getRouteTables()
  },
  methods: {
    handleSelect: function () {
      console.log('this is select')
    },
    change: function () {
      console.log('hello')
    },
    getRouteTables: function () {
      console.log(this.$router)
      console.log(this.$route)
    }

  },
  watch: {

  }
}
</script>

<style>
  .fixed-top{
    position: fixed;
    top:0;
    right:0;
    width: 100%;
  }

</style>
