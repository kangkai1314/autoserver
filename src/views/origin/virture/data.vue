<template>
    <el-row>
      <el-col :span="12">
        <div >
          <el-card class="box-card">
            <span>激情的一天</span>
            <el-button type="primary" style="float: right" @click="close">delete</el-button>
            <div class="text item">
              <ol>
                <li v-for="item in items" :key="item.id">
                  {{item.text}}
                  <video-player class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                                :playsinline="true"
                                :options="playerOptions"
                  ></video-player>

                </li>
              </ol>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-card class="box-card">
           <span>美好的世界</span>

            <div class="text item">
              <ol v-loading="loading">
                <li v-for="item in items" :key="item.id">
                  {{item.text}}
                </li>
              </ol>
            </div>
          </el-card>
        </div>

      </el-col>
      <el-row>
        <el-col :span="12">
          <div > <el-button type="primary" size="mini" icon="el-icon-edit" @click="close">加载数据</el-button></div>
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="close">执行任务</el-button>
          <el-steps :active="activecount" :router="true">
            <el-step title="步骤1" description="创建用例" index="/step">

            </el-step>
            <el-step title="步骤2" description="创建模板"></el-step>
            <el-step title="步骤3" description="执行用例"></el-step>
          </el-steps>
          <div >
            <router-view ></router-view>
            <p></p>
            <el-button type="success" @click="next" >成功</el-button>
            <el-button type="danger">取消</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <router-view name="stepview">执行</router-view>
          </div>

        </el-col>

      </el-row>

    </el-row>
</template>

<script>
export default {
  name: 'data',
  data () {
    return {
      items: [{id: 1, text: 'hello'},
        {id: 2, text: 'test'},
        {id: 3, text: 'kangkai'}],
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4' // 你的m3u8地址（必填）
        }],
        poster: 'poster.jpg', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //  controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true //全屏按钮
        //  }
      },
      loading: true,
      activecount: 1

    }
  },
  methods: {
    close: function () {
      console.log('hello')
      this.loading = false
    },
    next: function () {
      this.activecount += 1
    }
  }
}
</script>

<style scoped>
  .el-row{
    padding-left: 10px;
  }
  .el-card{
    background-color: #13ce66;
    padding-left: 10px;
    padding-top: 20px;

  }
  .text item{
    background-color: black;
  }
  .el-steps{
    padding-left: 10px;
    padding-right: 10px;
  }

</style>
