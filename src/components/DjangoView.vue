<template>
    <div class="tencent_view">
      <el-row class="tencent_view_header">
        <div class="logo">
          <el-button type="text" icon="el-icon-arrow-down">我的追剧节目单</el-button>
        </div>

      </el-row>
      <el-row class="tencent_view_slider">
        <el-row class="tencent_view_nav">
          <el-col :span="8">
          <div class="tencent_view_nav_logo">
            <p>腾讯视频</p>
          </div>
          </el-col>
          <el-col :span="8">
          <div class="tencent_view_nav_search">
            <el-input round placeholder="热搜内容" @focus="showsearchcontent" ><template slot="append"><el-button type="text">热搜榜</el-button>
            </template> </el-input>
            <el-button style="height: 40px;width:100px;float: right;padding: 0">全网搜</el-button>
            <div class="search_content" v-if="show" style="width:200px;height:100px;float: left;background-color: #13ce66;text-align: center">
              <p>this is content</p>
            </div>
          </div>
            </el-col>
          <el-col :span="8">
            <div class="tencent_view_nav_quick" style="background: inherit">
              <el-button   type="text" icon="el-icon-star-on">VIP</el-button>
              <el-button   type="text" icon="el-icon-time">看过</el-button>
              <el-button   type="text" icon="el-icon-upload">上传</el-button>
              <el-button   type="text" icon="el-icon-download">下载客户端</el-button>

            </div>
          </el-col>

        </el-row>

      </el-row>
      <el-row class="tencent_view_slider_mask">
        <div class="main_nav" v-for="x in 4" :key="x">
          <el-col :span="6" class="slider_nav" style="border-right-style: solid">

            <a href="/" target="_blank" class="nav_link" v-for="name in names" :key="name.id" >{{name.text}}</a>
          </el-col>

        </div>

      </el-row>
      <el-row class="tencent_view_content">
        <ContentCard v-for="content in contents" :key="content.id" :title="content.text"></ContentCard>
      </el-row>
      <el-row class="tencent_view_footer">
        <el-col :span="6" v-for="x in 4" :key="x">
          <ul class="footer_class">
            <li v-for="x in 4" :key="x" class="footer" style="float: left ">
              <el-col :span="2">
              <a href="/" target="_blank" class="footer_link" style="display: block;width: 60px;"><span >电视剧</span></a>
              </el-col>
            </li>
          </ul>
        </el-col>

      </el-row>

    </div>
</template>

<script>
import ContentCard from './ContentCard'
export default {
  name: 'DjangoView',
  components: {ContentCard},
  data () {
    return {
      menus: [],
      activeIndex: '',
      visibilityHeight: 400,
      navs: [{id: 1, submenus: [{sub_id: 1, sub_menu_name: '美剧'}, {sub_id: 2, sub_menu_name: '韩剧'}]}],
      names: [{id: 1, text: '电视剧'}, {id: 2, text: '美剧'}, {id: 3, text: '韩剧'}],
      contents: [{id: 1, text: '今日热点'}, {id: 2, text: '原创精选'}, {id: 3, text: '你的专属频道'}],
      show: false

    }
  },
  beforeCreate () {
    console.log('beforecreated')
  },
  mounted: {
    handleScroll: function () {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll: function () {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    showsearchcontent: function () {
      this.show = true
    }
  }
}
</script>

<style scoped>
  .tencent_view{
    top:0;
    left:0;
    width:100%;
    height: 100%;
  }
  .tencent_view_header{
    top:0;
    left:0;
    height: 40px;
    background-color: black;

  }
  .tencent_view_slider{
    height: 580px;
    background-color: #3a8ee6;
    background-image: url("../../static/pics/logo.jpg");
  }
  .tencent_view_nav{
    height: 73px;
    text-align: center;
  }
  .tencent_view_nav_logo{
    display: block;
    width: 135px;
    height: 36px;
    font-size: 1em;
  }
  tencent_view_nav_search{
    width: 400px;
    height: 40px;
  }
  .el-input{
    border-radius:10px;
    width:200px;
  }
  .tencent_view_slider_mask{
    height: 90px;
    background-color: whitesmoke;
  }
  .slider_nav{
    display: block;
    padding: 20px;
  }
  .nav_link{
    text-decoration: none;
    text-decoration-color: black;
    text-align: right;
    padding: 20px;
  }
  .tencent_view_footer{
    height: 373px;
    padding: 20px;
    text-align: center;
  }
  .footer_class{
    list-style-type:none;
    margin:0;
    padding:0;
    overflow:hidden;
  }
  .footer_link{
    text-align: left;
    text-decoration: none;
    text-decoration-color: #3a8ee6;
  }

</style>
