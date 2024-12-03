<script setup>

import UserProfileOverview from '@/components/Dashboard/UserProfileOverview.vue'
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
import TopNavBar from '@/components/Navbar/TopNavBar.vue'
import ValuableCustomersList from '@/components/Dashboard/ValuableCustomersList.vue'
import SalesOverviewChart from '@/components/Dashboard/SalesOverviewChart.vue'
import TotalSalesChart from '@/components/Dashboard/TotalSalesChart.vue'
import TopSellingProducts from '@/components/Dashboard/TopSellingProducts.vue'
</script>

<template>
    <div class="container-fluid d-flex flex-row" style="height: 100vh">
        <div class="flex-grow-0" style="width: 200px; background-color: white"> <!-- SidebarMenu -->
            <SidebarMenu />
        </div>
        <div class="flex-grow-1" style="background-color: #F9F8FDFF"> <!-- TopNavBar -->
            <div style="margin-bottom: 10px; margin-left: 50px"><TopNavBar /></div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
