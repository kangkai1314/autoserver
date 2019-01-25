<template>
    <div class="topNav">
      <p>{{header}}</p>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      header: '顶部导航'
    }
  }
}
</script>

<style scoped>
 .topNav{
   width: 100%;
   height: 70px;
   background-color: #ed795a;
 }

</style>
