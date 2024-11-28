import { createWebHistory, createRouter } from "vue-router";

import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardPage
    },
    {
        path: '/default_layout',
        name: 'default_layout',
        component: DefaultLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
