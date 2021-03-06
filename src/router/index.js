import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/page/home')))
const initialSetting = r => require.ensure([], () => r(require('@/page/initial-setting')))
const commodityManagement = r => require.ensure([], () => r(require('@/page/commodity-management')))
const orderManagement = r => require.ensure([], () => r(require('@/page/order-management')))
const customerManagement = r => require.ensure([], () => r(require('@/page/customer-management')))
const customerOrder = r => require.ensure([], () => r(require('@/page/customer-order')))
const account = r => require.ensure([], () => r(require('@/page/account')))
const accountDetails = r => require.ensure([], () => r(require('@/page/account-details')))
const marketingManagement = r => require.ensure([], () => r(require('@/page/marketing-management')))
const addMarketingActivity = r => require.ensure([], () => r(require('@/page/add-marketing-activity')))
const addEditGoods = r => require.ensure([], () => r(require('@/page/add-edit-goods')))
const categoryManagement = r => require.ensure([], () => r(require('@/page/category-management')))
const orderSetting = r => require.ensure([], () => r(require('@/page/order-setting')))
const paySetting = r => require.ensure([], () => r(require('@/page/pay-setting')))
const mpSetting = r => require.ensure([], () => r(require('@/page/mp-setting')))
const shopProfile = r => require.ensure([], () => r(require('@/page/shop-profile')))
const orderAfterSale = r => require.ensure([], () => r(require('@/page/order-afterSale')))
const orderDetail = r => require.ensure([], () => r(require('@/page/order-detail')))
const orderRebate = r => require.ensure([], () => r(require('@/page/order-rebate')))
const login = r => require.ensure([], () => r(require('@/page/login')))
const err404 = r => require.ensure([], () => r(require('@/page/404')))
const bindingMp = r => require.ensure([], () => r(require('@/page/binding-mp')))
const trendsManagement = r => require.ensure([], () => r(require('@/page/trends-management')))
const addTrends = r => require.ensure([], () => r(require('@/page/add-trends')))
const reviewApproval = r => require.ensure([], () => r(require('@/page/review-approval')))
const viewTrends = r => require.ensure([], () => r(require('@/page/view-trends')))
const approvalDetail = r => require.ensure([], () => r(require('@/page/approval-detail')))
const approvalSolved = r => require.ensure([], () => r(require('@/page/approval-solved')))
const groupBuyManagement = r => require.ensure([], () => r(require('@/page/group-buy-management')))
const addGroupBuy = r => require.ensure([], () => r(require('@/page/add-group-buy')))
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/initial-setting',
      name: 'initialSetting',
      component: initialSetting
    },
    {
      path: '/commodity-management',
      name: 'commodityManagement',
      component: commodityManagement
    },
    {
      path: '/order-management',
      name: 'orderManagement',
      component: orderManagement
    },
    {
      path: '/customer-management',
      name: 'customerManagement',
      component: customerManagement
    },
    {
      path: '/trends-management',
      name: 'trendsManagement',
      component: trendsManagement
    },
    {
      path: '/add-trends',
      name: 'addTrends',
      component: addTrends
    },
    {
      path: '/view-trends',
      name: 'viewTrends',
      component: viewTrends
    },
    {
      path: '/review-approval',
      name: 'reviewApproval',
      component: reviewApproval
    },
    {
      path: '/approval-detail',
      name: 'approvalDetail',
      component: approvalDetail
    },
    {
      path: '/approval-solved',
      name: 'approvalSolved',
      component: approvalSolved
    },
    {
      path: '/customer-order/:id',
      name: 'customerOrder',
      component: customerOrder
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/account-details/:id',
      name: 'accountDetails',
      component: accountDetails
    },
    {
      path: '/marketing-management/:class',
      name: 'marketingManagement',
      component: marketingManagement
    },
    {
      path: '/group-buy-management',
      name: 'groupBuyManagement',
      component: groupBuyManagement
    },
    {
      path: '/add-group-buy/:id',
      name: 'addGroupBuy',
      component: addGroupBuy
    },
    {
      path: '/add-marketing-activity/:class',
      name: 'addMarketingActivity',
      component: addMarketingActivity
    },
    {
      path: '/order-setting',
      name: 'orderSetting',
      component: orderSetting
    },
    {
      path: '/order-detail/:id',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/order-afterSale',
      name: 'orderAfterSale',
      component: orderAfterSale
    },
    {
      path: '/order-rebate',
      name: 'orderRebate',
      component: orderRebate
    },
    {
      path: '/shop-profile',
      name: 'shopProfile',
      component: shopProfile
    },
    {
      path: '/add-edit-goods',
      name: 'addEditGoods',
      component: addEditGoods
    },
    {
      path: '/category-management',
      name: 'categoryManagement',
      component: categoryManagement
    },
    {
      path: '/pay-setting',
      name: 'paySetting',
      component: paySetting
    },
    {
      path: '/mp-setting',
      name: 'mpSetting',
      component: mpSetting
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/binding-mp',
      name: 'bindingMp',
      component: bindingMp
    },
    {
      path: '/404',
      name: 'err404',
      component: err404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
