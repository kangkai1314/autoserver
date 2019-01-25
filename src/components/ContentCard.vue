<template>
    <el-card v-if="show_card">
      <div slot="header" class="clearfix">
        <el-row>
          <span class="header_text">
            <div class="header_text_main">
              {{title}}
            </div>
          </span>
        </el-row>
        <el-row>
          <el-col :span="4" v-for="x in 6" :key="x">
            <el-row> <img :src="image" class="image"></el-row>
             <el-row style="width: 170px;height: 44px">description</el-row>
          </el-col>
        </el-row>
      </div>

    </el-card>
</template>

<script>
export default {
  name: 'ContentCard',
  props: ['title'],
  data () {
    return {
      image: require('../assets/1.jpg'),
      show_card: true
    }
  },
  created () {
    if (this.title === '你的专属频道') {
      this.show_card = false
    }
  }
}
</script>

<style scoped>
  .header_text{
   display: block;
  }
  header_text_main{
    display: inline;
    font-size: 5px;
    float: left;
    text-align: left;
  }

  .image{
    padding: 2px;
    width: 170px;
    height: 120px;
  }

</style>
