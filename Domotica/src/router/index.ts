import { createRouter, createWebHistory } from 'vue-router'
import Devices from '@/views/Devices.vue'
import Management from '@/views/Management.vue'
import Pagenotfound from '@/views/Pagenotfound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Devices,
      path: '/'
    },
    {
      component: Management,
      path:'/management'
    },
    {
      component: Pagenotfound,
      path: '/:pathMatch(.*)*'
    }
    
  ],
})

export default router
