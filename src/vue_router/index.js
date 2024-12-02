import { createWebHistory, createRouter } from "vue-router";

import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Login from '@/components/Login/Login.vue'
import Registration from '@/components/Login/Registration.vue'
import StorePage from '@/pages/StorePage.vue'
import ShopPage from '@/pages/ShopPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: StorePage,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopPage,
    }
    ,{
        path: '/login',
        component: LoginPage,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login,
            },
            {
                path: '/register',
                name: 'Registration',
                component: Registration
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage
    },
    {
        path: '/default_layout',
        name: 'Default_layout',
        component: DefaultLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
