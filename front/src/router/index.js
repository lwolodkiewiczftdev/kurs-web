import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Ringing from '../views/Ringing.vue'
import Connected from '../views/Connected.vue'
import Answered from '../views/Answered.vue'
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
 },
  {
   path: '/connected',
   name: 'connected',
   component: Connected
 },
 {
    path: '/answered',
    name: 'answered',
    component: Answered
 },


]

const router = createRouter({
 history: createWebHashHistory(),
 routes
})

export default router