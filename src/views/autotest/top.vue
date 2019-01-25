<template>
  <div class="topView">
    <h1>{{header}}</h1>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      header: '顶部导航'
    }
  }
}
</script>

<style scoped>
  .topView{
    width: 100%;
    height: 70px;
    background-color: #ed795a;
  }
  .h1{
    padding: 10px;
  }

</style>
