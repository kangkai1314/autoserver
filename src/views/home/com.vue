<template>
  <div>
    <el-row>
      <slot></slot>
      <div :class="existedclass" v-bind:style="style">
      <p>this is {{title}} view</p>
        <p>{{this.$appname}}</p>
      </div>
      <el-row>
        <el-col :span="6"> <el-button type="primary" @click="count+=1">counter</el-button></el-col>
        <el-col :span="6">  <p>{{count}}</p></el-col>
        <el-col :span="6"> <p>{{title}}</p></el-col>
        <el-col :span="6"><el-button type="primary" @click="change">change</el-button> </el-col>
      </el-row>
      <el-input placeholder="请输入你的名字" v-model="name"></el-input>
      <el-button>{{text}}</el-button>
      <el-input ref="text" v-model="text"></el-input>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'com',
  data () {
    return {
      existedclass: {
        active: false

      },
      style: {
        color: 'red',
        fontSize: '20px'

      },
      count: 0,
      name: '',
      text: this.$parent.current
    }
  },
  props: ['title'],
  methods: {
    change: function () {
      this.count += 1
      this.$emit('change', this.count)
    }
  }

}
</script>

<style scoped>

</style>
