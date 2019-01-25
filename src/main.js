// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VideoPlayer from 'vue-video-player'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VideoPlayer)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

/* eslint-disable no-new */
Vue.prototype.$axios = Axios
Vue.prototype.$appname = '陌声'
Axios.defaults.baseURL = '/api'

Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.defaults.headers.auth = {username: 'kangkai', password: '19930304kk'}
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {'id': 1, text: 'hello', num: 102, done: true}
    ]
  },
  getters: {
    donetodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    donecount: (state, getters) => {
      return getters.donetodos.length
    }

  },

  mutations: {
    increament (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

})
