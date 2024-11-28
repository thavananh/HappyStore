<script setup>
    import LogoHappyStore from '@/assets/images/logo/LogoHappyStore_NenTrang.png';
</script>

<template>
    <div class="sidebar-wrapper">
        <aside class="sidebar d-flex align-items-center flex-column">
            <div class="logo-container">
                <img class="store-logo" :src="LogoHappyStore" alt="Logo Happy Store">
            </div>
            <div class="list-container" style="width: 100%">
                <ul class="nav nav-pills d-flex flex-column" data-bs-parrent="#sidebar">
                    <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">
                            <i class="fa-solid fa-grid-2 fa-xs icon"></i>
                            <span>Tổng quan</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-boxes-stacked fa-xs icon"></i>
                            <span>Sản phẩm</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-bag-shopping fa-xs icon"></i>
                            <span>Đơn đặt hàng</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-users fa-xs icon"></i>
                            <span>Khách hàng</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-regular fa-chart-mixed fa-xs icon"></i>
                            <span>Thống kê</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-envelope fa-xs icon"></i>
                            <span>Tin nhắn</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-file-lines fa-xs icon"></i>
                            <span>Báo cáo</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-gear fa-xs icon"></i>
                            <span>Cài đặt</span>
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </aside>
    </div>
</template>

<style scoped>
    .store-logo {
        width: 8rem;
    }
    .nav-item {
        margin-bottom: 10px; /* Khoảng cách dọc giữa các mục */
    }


    .icon {
        font-size: 20px; /* Điều chỉnh kích thước font để biểu tượng có cùng kích thước */
        width: 1.5em; /* Đảm bảo kích thước ngang đồng đều */
        height: 1.5em; /* Đảm bảo kích thước dọc đồng đều */
        margin-right: 8px; /* Khoảng cách giữa biểu tượng và văn bản */
    }
    .nav-link {
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .nav-link:hover {
        background-color: #007bff;
        color:white;
        font-weight: bold;
    }
    .nav-item span {
        font-size: 16px;
    }
</style>
