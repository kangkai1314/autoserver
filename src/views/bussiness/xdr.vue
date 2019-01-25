<template>
    <div class="xdrview" >
      <el-row>
        <el-button @mouseenter="showview" @mouseover.native="showview" @mouseleave.native="seen=false">showview</el-button>
        <transition name="fade">
          <p v-if="seen">hellowrold</p>
        </transition>

      </el-row>
    </div>
</template>

<script>
export default {
  name: 'xdr',
  data () {
    return {
      seen: false
    }
  },
  methods: {
    showview: function () {
      this.seen = true
      console.log('change views')
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
