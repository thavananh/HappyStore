<script setup>
import LogoHappyStore from '@/assets/images/logo/LogoHappyStore_NenTrang.png';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand" href="#">
                <img :src="LogoHappyStore" alt="Happy Store Logo" class="logo">
            </a>
            <!-- Toggler for mobile view -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar links and icons -->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <!-- Navigation Links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SHOP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PROMOTION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PAGES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BLOGS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
                <!-- Icons -->
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-magnifying-glass me-3"></i>
                    <i class="fa-solid fa-user me-3"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container" style="margin-top: 80px;">
        <h1>Xin chào</h1>
    </div>
</template>

<style scoped>
.logo {
    max-height: 50px;
}
.nav-item .nav-link {
    margin-right: 20px;
}
</style>
