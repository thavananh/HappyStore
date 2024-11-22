<script setup>

import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue';
import TopNavBar from '@/components/Navbar/TopNavBar.vue';
import UserProfileOverview from '@/components/Dashboard/UserProfileOverview.vue'

</script>

<template>
    <div class="container-fluid d-flex flex-row" style="height: 100vh">
        <div class="flex-grow-0" style="width: 250px; background-color: white"> <!-- SidebarMenu -->
            <SidebarMenu />
        </div>
        <div class="flex-grow-1" style="background-color: #F9F8FDFF"> <!-- TopNavBar -->
            <TopNavBar />
            <UserProfileOverview />
        </div>
    </div>

</template>

<style scoped>
    .container-fluid {
        max-width: 1440px; /* Tăng chiều rộng container */
    }
</style>
