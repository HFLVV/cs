import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/Home' },
  {
    path: '/Login',
    component: resolve => (require(["../components/login/login.vue"], resolve)),
  },
  {
    path: '/Home',
    component: resolve => (require(["../views/Home.vue"], resolve)),
    children: [
      {
        path: 'Fist',
        component: resolve => (require(["../views/nav/Fist.vue"], resolve))
      },
      {
        path: 'Mangement',
        component: resolve => (require(["../views/nav/management.vue"], resolve))
      },
      {
        path: 'Active',
        component: resolve => (require(["../views/nav/activeList.vue"], resolve))
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
