import Vue from 'vue'
import Router from 'vue-router'
import Person from '@/views/home/Person'
import Login from '@/components/Login'
Vue.use(Router)
const routes = [{path: '/', component: Person},
  {path: '/login', component: Login}
]

const router = new Router({
  routes
})
export default router
