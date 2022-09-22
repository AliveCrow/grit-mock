import { createWebHistory, createRouter, RouterOptions, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }
]

const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes
})

export default router
