<script setup>

import ValuableCustomersList from '@/components/Dashboard/ValuableCustomersList.vue'
import TopSellingProducts from '@/components/Dashboard/TopSellingProducts.vue'
import UserProfileOverview from '@/components/Dashboard/UserProfileOverview.vue'
import TotalSalesChart from '@/components/Dashboard/TotalSalesChart.vue'
import SalesOverviewChart from '@/components/Dashboard/SalesOverviewChart.vue'
</script>

<template>
    <div class="d-flex">
        <div class="d-flex flex-column" style="margin-right: 50px">
            <div style="margin-left: 50px; margin-bottom: 30px"><UserProfileOverview /></div>
            <div style="margin-left: 50px"><ValuableCustomersList/></div>
        </div>
        <div class="flex-grow-1">
            <div class=row>
                <SalesOverviewChart style="margin-right: 50px"/>
                <TotalSalesChart/>
            </div>
            <div class="row">
                <TopSellingProducts style="margin-top: 50px"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
