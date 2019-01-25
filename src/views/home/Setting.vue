<template>
  <div class="settingview" >

    <p style="background-color: #13ce66">设置中心</p>
   <el-tabs tab-position="left" v-model="activename">
     <el-tab-pane v-for="setting in settings" :key="setting.id" :label="setting.text" :name="setting.name" type="button">
       <el-card type="box">
         <div >
           {{setting.text}}
         </div>
         <div class="shouyeview" v-if="setting.id==1">
         <dl>
           <dd v-for="setting in settings" :key="setting.id" style="height: 50px;padding-top: 10px;padding-bottom: 10px;background-color: whitesmoke">
             <el-col :span="8">{{setting.text}}</el-col>
            <el-col :span="12"><el-tag :type="setting.status" closable>{{setting.status}}</el-tag></el-col>
             <el-col :span="4" v-if="setting.status=='danger' "><el-button>绑定手机</el-button></el-col>
           </dd>

         </dl>
         </div>
         <div class="passwdview" v-if="setting.id==2">
           <el-form v-model="passwdform">
             <el-form-item label="输入新密码">
               <el-input v-model="passwdform.newpasswd" placeholder="输入您的新密码" style="width: 200px"></el-input>
             </el-form-item>
             <el-form-item label="确认新密码">
               <el-input v-model="passwdform.oldpasswd" placeholder="再次输入你的新密码" style="width: 200px"></el-input>
             </el-form-item>
             <el-form-item>
               <el-button type="primary">确认</el-button>
             </el-form-item>
           </el-form>
         </div>
         <div class="phoneview" v-if="setting.id==3">
           <p>验证码将发送到您的手机：{{phonenumber}}</p>
           <el-input v-model="vertifycode" placeholder="输入您的验证码" style="width: 200px"></el-input>
           <el-button type="primary" >下一步</el-button>
         </div>
         <div class="mailview" v-if="setting.id==4" style="padding-top: 20px">
           <el-collapse accordion>
             <el-collapse-item>
               <template slot="title">基础设置<i class="header-icon el-icon-setting" ></i></template>
               <el-form>
               <el-form-item label="夜间模式">
               <el-switch v-model="mode" active-text="开启" inactive-text="关闭">夜间模式</el-switch>
               </el-form-item>
                 <el-form-item label="透明度设置">
                   <el-slider v-model="slidertext" show-input style="padding-left: 100px" ></el-slider>
                 </el-form-item>
                 <el-form-item label="颜色选择">
                   <el-color-picker v-model="color" size="medium"></el-color-picker>
                 </el-form-item>
                 <el-form-item label="文件选择">

                     <el-upload class="uploadpicture"
                     :on-change="handleChange"
                     :on-preview="handlePreview">
                       <el-button>点击上传</el-button>
                     </el-upload>

                 </el-form-item>
               </el-form>
             </el-collapse-item>
           </el-collapse>

         </div>
       </el-card>
     </el-tab-pane>

   </el-tabs>
    </div>
</template>

<script>
import ElColorAlphaSlider from 'element-ui/packages/color-picker/src/components/alpha-slider'
import ElUploadList from 'element-ui/packages/upload/src/upload-list'
export default {
  name: 'Setting',
  components: {ElUploadList, ElColorAlphaSlider},
  data () {
    return {
      activename: 'first',
      settings: [{id: 1, text: '首页设置', name: 'first', status: 'success'},
        {id: 2, text: '修改密码', name: 'second', status: 'success'},
        {id: 3, text: '修改手机', name: 'third', status: 'danger'},
        {id: 4, text: '系统设置', name: 'fourth', status: 'success'}],
      passwdform: {newpasswd: '', oldpasswd: ''},
      phonenumber: '18868832080',
      verifystatus: true,
      vertifycode: '',
      mode: true,
      slidertext: 0,
      color: ''
    }
  },
  watch: {
    vertifycode: function (oldVal, newVal) {
      this.verifystatus = true
    }
  }

}

</script>

<style scoped>
  .settingview{
    padding: 10px;
    background-color: #8cc5ff;
  }
  .phoneview{

  }

</style>
