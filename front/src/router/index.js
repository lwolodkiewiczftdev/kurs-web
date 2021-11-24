import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Ringing from '../views/Ringing.vue'
const routes = [
 {
   path: '/',
   name: 'start',
   component: Start
 },
 {
   path: '/ringing',
   name: 'ringing',
   component: Ringing,
   props: true
 }
]

const router = createRouter({
 history: createWebHashHistory(),
 routes
})

export default router