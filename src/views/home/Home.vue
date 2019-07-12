<template>
  <div class="content">
    <div class="main-header">
      <!--头部-->
      <el-col :span="24">
        <top-nav></top-nav>
        </el-col>
    </div>
    <div class="main-content" style="width: 500px">
      <el-card v-for="i in 100" :key="i">
        <span>this is main content</span>
      </el-card>
    </div>


  </div>
</template>
<script>
import TopNav from "../../components/topNav";
export default {
  name: 'home',
  components: {TopNav},
  data () {
    return {

    }
  }

}
</script>
<style >
</style>
