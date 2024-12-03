<script setup>
import LogoHappyStore from '@/assets/images/logo/LogoHappyStore_NenTrang.png';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slider_1 from '@/assets/images/slider_1.jpg'
import banner_1 from '@/assets/images/banner_1.jpg'
import banner_2 from '@/assets/images/banner_2.jpg'
import banner_3 from '@/assets/images/banner_3.jpg'
import blog_1 from '@/assets/images/blog_1.jpg'
import blog_2 from '@/assets/images/blog_2.jpg'
import blog_3 from '@/assets/images/blog_3.jpg'
import deal_of_the_week from '@/assets/images/deal_ofthe_week.png'
import desc_1 from '@/assets/images/desc_1.jpg'
import desc_2 from '@/assets/images/desc_1.jpg'
import desc_3 from '@/assets/images/desc_1.jpg'
import map_maker from '@/assets/images/map_marker.png'
import product_1 from '@/assets/images/product_1.png'
import product_2 from '@/assets/images/product_2.png'
import product_3 from '@/assets/images/product_3.png'
import product_4 from '@/assets/images/product_4.png'
import product_5 from '@/assets/images/product_5.png'
import product_6 from '@/assets/images/product_6.png'
import product_7 from '@/assets/images/product_7.png'
import product_8 from '@/assets/images/product_8.png'
import product_9 from '@/assets/images/product_9.png'
import product_10 from '@/assets/images/product_10.png'
import single_1 from '@/assets/images/single_1.jpg'
import single_1_thumb from '@/assets/images/single_1_thumb.jpg'
import single_2 from '@/assets/images/single_2.jpg'
import single_2_thumb from '@/assets/images/single_2_thumb.jpg'
import single_3 from '@/assets/images/single_3.jpg'
import single_3_thumb from '@/assets/images/single_3_thumb.jpg'

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

const products = ref([
    { id: 1, image: product_1, name: 'Fujifilm X100T 16 MP Digital Camera (Silver)', price: '$520.00', oldPrice: '$590.00', discount: '-$20' },
    { id: 2, image: product_2, name: 'Product 2 Name', price: '$430.00', oldPrice: '$500.00', discount: '-$70' },
    { id: 3, image: product_3, name: 'Product 3 Name', price: '$320.00', oldPrice: '$400.00', discount: '-$80' },
    { id: 4, image: product_4, name: 'Product 4 Name', price: '$210.00', oldPrice: '$300.00', discount: '-$90' },
    { id: 5, image: product_5, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
    { id: 6, image: product_6, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
    { id: 7, image: product_7, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
    { id: 8, image: product_8, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
    { id: 9, image: product_9, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
    { id: 10, image: product_10, name: 'Product 5 Name', price: '$150.00', oldPrice: '$200.00', discount: '-$50' },
]);
</script>



<template>
    <div class="super_container">
        <header class="header trans_300">
            <div class="main_nav_container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-right">
                            <div class="logo_container">
                                <a href="#">colo<span>shop</span></a>
                            </div>
                            <nav class="navbar">
                                <ul class="navbar_menu">
                                    <li><router-link to="">home</router-link></li>
                                    <li><router-link to="/shop">shop</router-link></li>
                                    <li><a href="#">promotion</a></li>
                                    <li><a href="#">pages</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                                <ul class="navbar_user">
                                    <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
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
                            <li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                            <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                        </ul>
                    </li>
                    <li class="menu_item"><router-link to="">home</router-link></li>
                    <li class="menu_item"><router-link to="/shop">shop</router-link></li>
                    <li class="menu_item"><a href="#">promotion</a></li>
                    <li class="menu_item"><a href="#">pages</a></li>
                    <li class="menu_item"><a href="#">blog</a></li>
                    <li class="menu_item"><a href="#">contact</a></li>
                </ul>
            </div>
        </div>

        <!-- Slider -->

        <div class="main_slider" style="background-image:url(src/assets/images/slider_1.jpg)">
            <div class="container fill_height">
                <div class="row align-items-center fill_height">
                    <div class="col">
                        <div class="main_slider_content">
                            <h6>Spring / Summer Collection 2017</h6>
                            <h1>Get up to 30% Off New Arrivals</h1>
                            <div class="red_button shop_now_button"><a href="#">shop now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner -->

        <div class="banner container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="banner_item align-items-center" style="background-image:url(src/assets/images/banner_1.jpg)">
                            <div class="banner_category">
                                <a href="categories.html">women's</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="banner_item align-items-center" style="background-image:url(src/assets/images/banner_2.jpg)">
                            <div class="banner_category">
                                <a href="categories.html">accessories's</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="banner_item align-items-center" style="background-image:url(src/assets/images/banner_3.jpg)">
                            <div class="banner_category">
                                <a href="categories.html">men's</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Arrivals -->

        <div class="new_arrivals">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section_title new_arrivals_title">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col text-center">
                        <div class="new_arrivals_sorting">
                            <ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
                                <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Swiper
                            :initial-slide="2"
                            :modules="[Autoplay, Navigation, Pagination]"
                            :slides-per-view="4"
                            :space-between="30"
                            :autoplay="{ delay: 12000, disableOnInteraction: false }"
                            :loop="true"
                            navigation
                            pagination
                            class="product_slider"
                        >
                            <!-- Slide 1 -->
                            <SwiperSlide v-for="product in products" :key="product.id" class="product_slider_item">
                                <div class="product-item">
                                    <div class="product discount">
                                        <div class="product_image">
                                            <img :src="product.image" :alt="product.name">
                                        </div>
                                        <div class="favorite favorite_left"></div>
                                        <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                            <span>{{ product.discount }}</span>
                                        </div>
                                        <div class="product_info">
                                            <h6 class="product_name">
                                                <a href="single.html">{{ product.name }}</a>
                                            </h6>
                                            <div class="product_price">{{ product.price }}<span>{{ product.oldPrice }}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <!-- ... (other slides) -->
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

        <!-- Deal of the week -->

        <div class="deal_ofthe_week">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="deal_ofthe_week_img">
                            <img :src="deal_of_the_week" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 text-right deal_ofthe_week_col">
                        <div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                            <div class="section_title">
                                <h2>Deal Of The Week</h2>
                            </div>
                            <ul class="timer">
                                <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="day" class="timer_num">03</div>
                                    <div class="timer_unit">Day</div>
                                </li>
                                <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="hour" class="timer_num">15</div>
                                    <div class="timer_unit">Hours</div>
                                </li>
                                <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="minute" class="timer_num">45</div>
                                    <div class="timer_unit">Mins</div>
                                </li>
                                <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="second" class="timer_num">23</div>
                                    <div class="timer_unit">Sec</div>
                                </li>
                            </ul>
                            <div class="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Best Sellers -->
        <div class="best_sellers">
            <div class="container">
                <!-- ... (section title) -->
                <div class="row">
                    <div class="col">
                        <Swiper
                            :initial-slide="2"
                            :modules="[Autoplay, Navigation, Pagination]"
                            :slides-per-view="4"
                            :space-between="30"
                            :autoplay="{ delay: 12000, disableOnInteraction: false }"
                            :loop="true"
                            navigation
                            pagination
                            class="product_slider"
                        >
                            <!-- Slide 1 -->
                            <SwiperSlide v-for="product in products" :key="product.id" class="product_slider_item">
                                <div class="product-item">
                                    <div class="product discount">
                                        <div class="product_image">
                                            <img :src="product.image" :alt="product.name">
                                        </div>
                                        <div class="favorite favorite_left"></div>
                                        <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                            <span>{{ product.discount }}</span>
                                        </div>
                                        <div class="product_info">
                                            <h6 class="product_name">
                                                <a href="single.html">{{ product.name }}</a>
                                            </h6>
                                            <div class="product_price">{{ product.price }}<span>{{ product.oldPrice }}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <!-- ... (other slides) -->
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

        <!-- Benefit -->

        <div class="benefit">
            <div class="container">
                <div class="row benefit_row">
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon"><i class="fa fa-truck" aria-hidden="true"></i></div>
                            <div class="benefit_content">
                                <h6>free shipping</h6>
                                <p>Suffered Alteration in Some Form</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon"><i class="fa fa-money" aria-hidden="true"></i></div>
                            <div class="benefit_content">
                                <h6>cach on delivery</h6>
                                <p>The Internet Tend To Repeat</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                            <div class="benefit_content">
                                <h6>45 days return</h6>
                                <p>Making it Look Like Readable</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                            <div class="benefit_content">
                                <h6>opening all week</h6>
                                <p>8AM - 09PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Blogs -->

        <div class="blogs">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section_title">
                            <h2>Latest Blogs</h2>
                        </div>
                    </div>
                </div>
                <div class="row blogs_container">
                    <div class="col-lg-4 blog_item_col">
                        <div class="blog_item">
                            <div class="blog_background" style="background-image:url(src/assets/images/blog_1.jpg)"></div>
                            <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                                <span class="blog_meta">by admin | dec 01, 2017</span>
                                <a class="blog_more" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 blog_item_col">
                        <div class="blog_item">
                            <div class="blog_background" style="background-image:url(src/assets/images/blog_2.jpg)"></div>
                            <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                                <span class="blog_meta">by admin | dec 01, 2017</span>
                                <a class="blog_more" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 blog_item_col">
                        <div class="blog_item">
                            <div class="blog_background" style="background-image:url(src/assets/images/blog_3.jpg)"></div>
                            <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                <h4 class="blog_title">Here are the trends I see coming this fall</h4>
                                <span class="blog_meta">by admin | dec 01, 2017</span>
                                <a class="blog_more" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter -->

        <div class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                            <h4>Newsletter</h4>
                            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form action="post">
                            <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                                <input id="newsletter_email" type="email" placeholder="Your email" required="required" data-error="Valid email is required.">
                                <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                            <ul class="footer_nav">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="contact.html">Contact us</a></li>
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
                        <div class="footer_nav_container">
                            <div class="cr">©2018 All Rights Reserverd. Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="#">Colorlib</a> &amp; distributed by <a href="https://themewagon.com">ThemeWagon</a></div>
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

</style>
<style src="/src/assets/styles/responsive.css"></style>
<style src="/src/assets/styles/main_styles.css"></style>

