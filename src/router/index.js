import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import initialSetting from '@/page/initial-setting'
import shortcutEntrance from '@/page/shortcut-entrance'
import commodityManagement from '@/page/commodity-management'
import orderManagement from '@/page/order-management'
import customerManagement from '@/page/customer-management'
import account from '@/page/account'
import collageManagement from '@/page/collage-management'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/initialSetting',
      name: 'initialSetting',
      component: initialSetting
    },
    {
      path: '/shortcutEntrance',
      name: 'shortcutEntrance',
      component: shortcutEntrance
    },
    {
      path: '/commodityManagement',
      name: 'commodityManagement',
      component: commodityManagement
    },
    {
      path: '/orderManagement',
      name: 'orderManagement',
      component: orderManagement
    },
    {
      path: '/customerManagement',
      name: 'customerManagement',
      component: customerManagement
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/collageManagement',
      name: 'collageManagement',
      component: collageManagement
    }
  ]
})
