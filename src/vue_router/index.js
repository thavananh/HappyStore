import { createWebHistory, createRouter } from "vue-router";

import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import Login from '@/components/Login/Login.vue'
import Registration from '@/components/Login/Registration.vue'
import StorePage from '@/pages/StorePage.vue'
import ShopPage from '@/pages/ShopPage.vue'
import ProductDetails from '@/pages/ProductDetails.vue'
import OverView_Dashboard from '@/layouts/OverView_Dashboard.vue'
import Product_Dashboard from '@/layouts/Product_Dashboard.vue'
import ThuNghiem from '@/components/GiaoDienThuNghiem/ThuNghiem.vue'
import CustomerDashboard from '@/pages/CustomerDashboard.vue'
import MainPage from '@/pages/MainPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        children: [
            {
                path: '',
                name: 'Home',
                component: StorePage
            },
            {
                path: '/shop',
                name: 'Shop',
                component: ShopPage,
            }
        ]
    },
    {
        path: '/product_details',
        name: 'ProductDetails',
        component: ProductDetails,
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
        component: DashboardPage,
        children: [
            {
                path: '',
                name: 'Overview_Dashboard',
                component: OverView_Dashboard
            },
            {
                path: '/product_dashboard',
                name: 'Product_Dashboard',
                component: Product_Dashboard,
            },

        ]
    },
    {
        path: '/customer_dashboard',
        name: 'CustomerDashboard',
        component: CustomerDashboard,
    },
    {
        path: '/thu_nghiem',
        name: 'Thu_nghiem',
        component: ThuNghiem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
