<template>
    <div class="mainView">
      <el-header> <router-view name="nav"></router-view></el-header>
        <el-aside> <router-view name="leftnav"></router-view></el-aside>
      <el-main> <router-view name="content"></router-view></el-main>

    </div>
</template>

<script>
export default {
  name: 'auotestindex'
}
</script>

<style scoped>
  .mainView{
    width: 100%;
    height: 100%;
    x:0;
    y:0;
  }

</style>
