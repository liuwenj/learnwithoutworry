import Vue from 'vue'
import VueRouter from 'vue-router'


const routes = [
  {path: '/',name: 'productDetail',component: () => import( '../views/productDetail.vue')},
  {path: '/insurancePlan',name: 'insurancePlan',component: () => import( '../views/insurancePlan.vue')},
  {path: '/insuranceInformation',name: 'insuranceInformation',component: () => import( '../views/insuranceInformation.vue')},
  {path: '/sendMail',name: 'sendMail',component: () => import( '../views/sendMail.vue')}
  // {path: '/TechnologicalProcess',name: 'TechnologicalProcess',component: () => import( '../components/TechnologicalProcess.vue')}
]

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname, 
  // base: process.env.BASE_URL,
  routes
})

export default router
