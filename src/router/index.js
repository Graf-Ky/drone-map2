// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Perfume from '../views/Perfume.vue'
import tail from '../views/tail.vue'
import Heropizd from '@/views/heropizd.vue'
import Newww from '@/views/newww.vue'

import Creature from '../views/Creature.vue'
import dronTarget from '../views/dronTarget.vue'




const routes = [
 /* { path: '/', component: Home },
  { path: '/Perfume', component: Perfume },
  { path: '/tail', component: tail },
  { path: '/Heropizd', component: Heropizd },
  { path: '/newww', component: Newww },
  { path: '/Hoome', component: Hoome },
  { path: '/Aboout', component: Aboout },
  { path: '/creature/:name', component: Creature }, */
  { path: '/dronTarget', component: dronTarget }
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router