<template>
    <div class="menu-view">
       <div class="fixed-top">
        <h1>自助化代码构建平台</h1>
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

  },
  methods: {
    handleSelect: function () {
      console.log('this is select')
    },
    change: function () {
      console.log('hello')
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
