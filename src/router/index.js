import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import TopNav from '@/components/topNav'

import LeftNav from '@/components/LeftNav'
import subleft from '@/components/subleft'
import Login from '@/components/Login'

import Dashboard from '@/views/home/dashboard'
import Step from '@/views/step/Step'
import Point from '@/views/bussiness/Point'
import Flow from '@/views/bussiness/Flow'
import Template from '@/views/bussiness/Template'
import Report from '@/views/bussiness/Report'
import Product from '@/views/bussiness/Product'
import Case from '@/views/bussiness/Case'
import index from '@/views/origin/index'
import history from '@/views/origin/virture/history'
import sms from '@/views/origin/virture/sms'
import gsm from '@/views/origin/virture/gsm'
import data from '@/views/origin/virture/data'
import message from '@/views/origin/virture/message'

import define from '@/views/origin/project/define'
import templatemanager from '@/views/origin/project/templatemanager'
import xdr from '@/views/bussiness/xdr'
import Person from '@/views/home/Person'
import Setting from '@/views/home/Setting'
import Nav from '@/views/home/Nav'
import datatest from '@/views/home/datatest'
import DjangoView from '@/components/DjangoView'
import autoindex from '@/views/autotest/index'
import top from '@/views/autotest/top'
import left from '@/views/autotest/left'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: 'dashboard',
      type: 'home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/dashboard',
          name: '首页',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          leaf: false, // 只有一个节点
          menuShow: true
        },
        {
          path: '/django/view',
          name: 'django-view',
          component: DjangoView
        },
        {
          path: '/autotest',
          name: 'autotest',
          component: autoindex,
          children: [
            {
              path: '/',
              name: 'autoindex',
              components: {
                nav: top,
                leftnav: left,
                content: DjangoView
              }

            }

          ]
        },
        {
          path: '/step',
          name: 'step',
          components: {
            default: Step,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/datatest',
          name: 'datatest',
          component: datatest,
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/point',
          name: 'point',
          components: {
            default: Point,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/flow',
          name: 'flow',
          components: {
            default: Flow,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/template',
          name: 'template',
          components: {
            default: Template,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/report',
          name: 'report',
          components: {
            default: Report,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/product',
          name: 'product',
          components: {
            default: Product,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/case',
          name: 'case',
          components: {
            default: Case,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/xdr',
          name: 'xdr',
          components: {
            default: xdr,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/person',
          name: 'Person',
          component: Person,
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/setting',
          name: 'Setting',
          component: Setting,
          leaf: true, // 只有一个节点
          menuShow: true
        },
        {
          path: '/nav',
          name: 'Nav',
          component: Nav,
          leaf: true, // 只有一个节点
          menuShow: true
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/admin/login/index'),
      children: [
        {
          path: '/',
          component: Login
        }
      ]
    },
    {
      path: '/origin',
      component: index,
      children: [
        {
          path: '/',
          components: {
            subview: history,
            subleftview: subleft
          }
        },
        {
          path: '/origin/history',
          name: 'history',
          components: {
            subview: history,
            subleftview: subleft
          }
        },
        {
          path: '/origin/sms',
          name: 'sms',
          components: {
            subview: sms,
            subleftview: subleft
          }
        },
        {
          path: '/origin/gsm',
          name: 'gsm',
          components: {
            subview: gsm,
            subleftview: subleft
          }
        },
        {
          path: '/origin/data',
          name: 'data',
          components: {
            subview: data,
            subleftview: subleft
          }
        },
        {
          path: '/origin/message',
          name: 'message',
          components: {
            subview: message,
            subleftview: subleft
          }
        },
        {
          path: '/define',
          name: 'define',
          components: {
            subview: define,
            subleftview: subleft
          }

        },
        {
          path: '/origin/template',
          name: '模板管理',
          components: {
            subview: templatemanager,
            subleftview: subleft
          }
        }

      ]

    }

  ],
  scrollBehavior: ({y: 0})
})
export default router
