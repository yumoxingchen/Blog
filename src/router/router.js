import { createRouter ,createWebHistory } from 'vue-router'

const ArticleInfo =()=> import('../components/articleinfo.vue')
const Articlepage =()=> import('../components/aritclepage.vue')
// 路由
const routes = [
  { path: '/', component: ArticleInfo},
  { path: '/ap/:id', component: Articlepage },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;