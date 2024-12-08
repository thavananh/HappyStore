<script setup>
import { ref } from 'vue';
// Biến trạng thái để kiểm soát hamburger menu
const isHamburgerMenuOpen = ref(false);

// Hàm mở hamburger menu
const openHamburgerMenu = () => {
    isHamburgerMenuOpen.value = true;
};

// Hàm đóng hamburger menu
const closeHamburgerMenu = () => {
    isHamburgerMenuOpen.value = false;
};
import LogoHappyStore from '@/assets/images/logo/LogoHappyStore_NenTrang.png'

</script>


<template>
    <div class="super_container">
        <header class="header trans_300">
            <div class="main_nav_container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-right">
                            <div class="logo_container">
                                <img :src="LogoHappyStore" alt="" style=" height: 100px;">
                            </div>
                            <nav class="navbar">
                                <ul class="navbar_menu">
                                    <li><router-link to="/">Trang Chủ</router-link></li>
                                    <li><router-link to="/shop">Cửa Hàng</router-link></li>
                                    <li><a href="#">Bài Viết</a></li>
                                    <li><a href="contact.html">Liên Hệ</a></li>
                                </ul>
                                <ul class="navbar_user">
                                    <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li style="width: 100%"><router-link class="dropdown-item" to="/login">Sign in</router-link></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li style="width: 100%"><a  class="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                    </li>

                                    <li class="checkout">
                                        <a href="#">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span id="checkout_items" class="checkout_items">2</span>
                                        </a>
                                    </li>
                                </ul>
                                <!-- Thêm @click để mở hamburger menu -->
                                <div class="hamburger_container" @click="openHamburgerMenu">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hamburger -->
        <!-- Overlay để đóng menu khi nhấp vào ngoài -->
        <div class="fs_menu_overlay" v-if="isHamburgerMenuOpen" @click="closeHamburgerMenu"></div>
        <div class="hamburger_menu" :class="{ 'hamburger_menu_open': isHamburgerMenuOpen }">
            <div class="hamburger_close" @click="closeHamburgerMenu"><i class="fa fa-times" aria-hidden="true"></i></div>
            <div class="hamburger_menu_content text-right">
                <ul class="menu_top_nav">
                    <li class="menu_item has-children">
                        <a href="#">
                            My Account
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="menu_selection">
                            <li><router-link to="/login"><a><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></router-link></li>
                            <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                        </ul>
                    </li>
                    <li class="menu_item"><router-link to="/">Trang chủ</router-link></li>
                    <li class="menu_item"><router-link to="/shop">Cửa Hàng</router-link></li>
                    <li class="menu_item"><a href="#">Bài Viết</a></li>
                    <li class="menu_item"><a href="#">Liên Hệ</a></li>
                </ul>
            </div>
        </div>


        <router-view></router-view>

        <!-- Footer -->

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                            <ul class="footer_nav">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="contact.html">Liên hệ chúng tôi</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer_contact">
                            <p><strong>Địa chỉ:</strong> 280 An Dương Vương, Quận 5, Thành phố HCM</p>
                            <p><strong>Số điện thoại:</strong> (028) 1234 5678</p>
                            <p><strong>Email:</strong> contact@happystore.com</p>
                        </div>
                        <div class="footer_nav_container">
                            <div class="cr">©2024 All Rights Reserved. Team HappyStore</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>
</template>

<style scoped>
.logo {
    max-height: 50px;
}
.nav-item .nav-link {
    margin-right: 20px;
}

/* fs_menu_overlay */
.fs_menu_overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 998;
}

/* hamburger_menu */
.hamburger_menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: #fff;
    z-index: 999;
    box-shadow: -2px 0 5px rgba(0,0,0,0.3);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

/* Hiển thị menu khi có class mở */
.hamburger_menu_open {
    transform: translateX(0);
}

/* hamburger_close */
.hamburger_close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}


/* Đảm bảo các item của dropdown được hiển thị theo chiều dọc */


.dropdown-menu .dropdown-item {
    width: 100%;
}


</style>
<style src="/src/assets/styles/responsive.css"></style>
<style src="/src/assets/styles/main_styles.css"></style>

