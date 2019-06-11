import VueRouter from 'vue-router'
import routes from './routes'
import Test from '../pages/test/index.vue'
routes.push({path: '/test', component: Test})
const router = new VueRouter({
  routes
})

export default router
