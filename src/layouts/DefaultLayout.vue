<script setup>

import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue';
import TopNavBar from '@/components/Navbar/TopNavBar.vue';

</script>

<template>
    <div class="container-fluid d-flex flex-row">
        <div class="flex-grow-0" style="width: 250px;"> <!-- SidebarMenu -->
            <SidebarMenu />
        </div>
        <div class="flex-grow-1"> <!-- TopNavBar -->
            <TopNavBar />
        </div>
    </div>

</template>

<style scoped>
    .container-fluid {
        max-width: 1440px; /* Tăng chiều rộng container */
        background-color: lightpink;
    }
</style>
