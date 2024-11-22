<script setup>
    import LogoHappyStore from '@/assets/images/logo/LogoHappyStore_NenTrang.png';
</script>

<template>
    <div class="sidebar-wrapper d-flex align-items-center">
        <aside class="sidebar">
            <div class="logo-container" style="margin-left: 6px">
                <img class="store-logo" :src="LogoHappyStore" alt="Logo Happy Store">
            </div>
            <hr>
            <div class="list-container">
                <ul class="nav nav-pills flex-column" data-bs-parrent="#sidebar">
                    <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">
                            <i class="fa-solid fa-grid-2 fa-xs icon"></i>
                            <span class="align-top">Tổng quan</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-boxes-stacked fa-xs icon"></i>
                            <span class="align-top">Sản phẩm</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-bag-shopping fa-xs icon"></i>
                            <span class="align-top">Đơn đặt hàng</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-users fa-xs icon"></i>
                            <span class="align-top">Khách hàng</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-regular fa-chart-mixed fa-xs icon"></i>
                            <span class="align-top">Thống kê</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-envelope fa-xs icon"></i>
                            <span class="align-top">Tin nhắn</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-file-lines fa-xs icon"></i>
                            <span class="align-top">Báo cáo</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-gear fa-xs icon"></i>
                            <span class="align-top">Cài đặt</span>
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </aside>
    </div>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .store-logo {
        width: 8rem;
    }
    .nav-item {
        margin-bottom: 10px; /* Khoảng cách dọc giữa các mục */
    }

    .icon {
        font-size: 14px; /* Điều chỉnh kích thước font để biểu tượng có cùng kích thước */
        width: 1.5em; /* Đảm bảo kích thước ngang đồng đều */
        height: 1.5em; /* Đảm bảo kích thước dọc đồng đều */
        margin-right: 8px; /* Khoảng cách giữa biểu tượng và văn bản */
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .list-container {
        margin-top: 20px;
    }
    .sidebar-wrapper {
        margin-left: 10px;
    }
</style>
