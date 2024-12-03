<script setup>
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
</script>

<template>
    <div class="super_container">
        <!-- Header -->

        <header class="header trans_300">
            <!-- Top Navigation -->

            <div class="top_nav">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="top_nav_left">free shipping on all u.s orders over $50</div>
                        </div>
                        <div class="col-md-6 text-right">
                            <div class="top_nav_right">
                                <ul class="top_nav_menu">
                                    <!-- Currency / Language / My Account -->

                                    <li class="currency">
                                        <a href="#">
                                            usd
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="currency_selection">
                                            <li><a href="#">cad</a></li>
                                            <li><a href="#">aud</a></li>
                                            <li><a href="#">eur</a></li>
                                            <li><a href="#">gbp</a></li>
                                        </ul>
                                    </li>
                                    <li class="language">
                                        <a href="#">
                                            English
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="language_selection">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Italian</a></li>
                                            <li><a href="#">German</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </li>
                                    <li class="account">
                                        <a href="#">
                                            My Account
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="account_selection">
                                            <li>
                                                <a href="#"
                                                    ><i class="fa fa-sign-in" aria-hidden="true"></i
                                                    >Sign In</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-user-plus"
                                                        aria-hidden="true"
                                                    ></i
                                                    >Register</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Navigation -->

            <div class="main_nav_container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-right">
                            <div class="logo_container">
                                <a href="#">colo<span>shop</span></a>
                            </div>
                            <nav class="navbar">
                                <ul class="navbar_menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><a href="#">shop</a></li>
                                    <li><a href="#">promotion</a></li>
                                    <li><a href="#">pages</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                                <ul class="navbar_user">
                                    <li>
                                        <a href="#"
                                            ><i class="fa fa-search" aria-hidden="true"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i class="fa fa-user" aria-hidden="true"></i
                                        ></a>
                                    </li>
                                    <li class="checkout">
                                        <a href="#">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span id="checkout_items" class="checkout_items"
                                                >2</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                                <div class="hamburger_container">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="fs_menu_overlay"></div>

        <!-- Hamburger Menu -->

        <div class="hamburger_menu">
            <div class="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
            <div class="hamburger_menu_content text-right">
                <ul class="menu_top_nav">
                    <li class="menu_item has-children">
                        <a href="#">
                            usd
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="menu_selection">
                            <li><a href="#">cad</a></li>
                            <li><a href="#">aud</a></li>
                            <li><a href="#">eur</a></li>
                            <li><a href="#">gbp</a></li>
                        </ul>
                    </li>
                    <li class="menu_item has-children">
                        <a href="#">
                            English
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="menu_selection">
                            <li><a href="#">French</a></li>
                            <li><a href="#">Italian</a></li>
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                        </ul>
                    </li>
                    <li class="menu_item has-children">
                        <a href="#">
                            My Account
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="menu_selection">
                            <li>
                                <a href="#"
                                    ><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a
                                >
                            </li>
                            <li>
                                <a href="#"
                                    ><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="menu_item"><a href="#">home</a></li>
                    <li class="menu_item"><a href="#">shop</a></li>
                    <li class="menu_item"><a href="#">promotion</a></li>
                    <li class="menu_item"><a href="#">pages</a></li>
                    <li class="menu_item"><a href="#">blog</a></li>
                    <li class="menu_item"><a href="#">contact</a></li>
                </ul>
            </div>
        </div>

        <div class="container product_section_container">
            <div class="row">
                <div class="col product_section clearfix">
                    <!-- Breadcrumbs -->

                    <div class="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active">
                                <a href="index.html"
                                    ><i class="fa fa-angle-right" aria-hidden="true"></i>Men's</a
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Sidebar -->

                    <div class="sidebar">
                        <div class="sidebar_section">
                            <div class="sidebar_title">
                                <h5>Product Category</h5>
                            </div>
                            <ul class="sidebar_categories">
                                <li><a href="#">Men</a></li>
                                <li class="active">
                                    <a href="#"
                                        ><span
                                            ><i
                                                class="fa fa-angle-double-right"
                                                aria-hidden="true"
                                            ></i></span
                                        >Women</a
                                    >
                                </li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                        </div>

                        <!-- Price Range Filtering -->
                        <div class="sidebar_section">
                            <div class="sidebar_title">
                                <h5>Filter by Price</h5>
                            </div>
                            <p>
                                <input
                                    type="text"
                                    id="amount"
                                    readonly
                                    style="border: 0; color: #f6931f; font-weight: bold"
                                />
                            </p>
                            <div id="slider-range"></div>
                            <div class="filter_button"><span>filter</span></div>
                        </div>

                        <!-- Sizes -->
                        <div class="sidebar_section">
                            <div class="sidebar_title">
                                <h5>Sizes</h5>
                            </div>
                            <ul class="checkboxes">
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i><span>S</span>
                                </li>
                                <li class="active">
                                    <i class="fa fa-square" aria-hidden="true"></i><span>M</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i><span>L</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i><span>XL</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>XXL</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Color -->
                        <div class="sidebar_section">
                            <div class="sidebar_title">
                                <h5>Color</h5>
                            </div>
                            <ul class="checkboxes">
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Black</span>
                                </li>
                                <li class="active">
                                    <i class="fa fa-square" aria-hidden="true"></i><span>Pink</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>White</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Blue</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Orange</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>White</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Blue</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Orange</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>White</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Blue</span>
                                </li>
                                <li>
                                    <i class="fa fa-square-o" aria-hidden="true"></i
                                    ><span>Orange</span>
                                </li>
                            </ul>
                            <div class="show_more">
                                <span><span>+</span>Show More</span>
                            </div>
                        </div>
                    </div>

                    <!-- Main Content -->

                    <div class="main_content">
                        <!-- Products -->
                        <div class="products_iso">
                            <div class="row">
                                <div class="col">
                                    <!-- Product Sorting -->
                                    <div
                                        class="product_sorting_container product_sorting_container_top"
                                    >
                                        <ul class="product_sorting">
                                            <li>
                                                <span class="type_sorting_text"
                                                    >Default Sorting</span
                                                >
                                                <i class="fa fa-angle-down"></i>
                                                <ul class="sorting_type">
                                                    <li class="type_sorting_btn">
                                                        <span>Default Sorting</span>
                                                    </li>
                                                    <li class="type_sorting_btn">
                                                        <span>Price</span>
                                                    </li>
                                                    <li class="type_sorting_btn">
                                                        <span>Product Name</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>Show</span>
                                                <span class="num_sorting_text">6</span>
                                                <i class="fa fa-angle-down"></i>
                                                <ul class="sorting_num">
                                                    <li class="num_sorting_btn"><span>6</span></li>
                                                    <li class="num_sorting_btn"><span>12</span></li>
                                                    <li class="num_sorting_btn"><span>24</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="pages d-flex flex-row align-items-center">
                                            <div class="page_current">
                                                <span>1</span>
                                                <ul class="page_selection">
                                                    <li><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                </ul>
                                            </div>
                                            <div class="page_total"><span>of</span> 3</div>
                                            <div id="next_page" class="page_next">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-long-arrow-right"
                                                        aria-hidden="true"
                                                    ></i
                                                ></a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Product Grid -->

                                    <div class="product-grid-1 row">
                                        <!-- Product 1 -->
                                        <div class="product-item men col">
                                            <div class="product discount product_filter col">
                                                <div class="product_image">
                                                    <img :src="product_1" alt="" />
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div
                                                    class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"
                                                >
                                                    <span>-$20</span>
                                                </div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Fujifilm X100T 16 MP Digital Camera
                                                            (Silver)</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">
                                                        $520.00<span>$590.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 2 -->

                                        <div class="product-item women col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_2" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div
                                                    class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"
                                                >
                                                    <span>new</span>
                                                </div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Samsung CF591 Series Curved 27-Inch FHD
                                                            Monitor</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$610.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 3 -->

                                        <div class="product-item women col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_3" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Blue Yeti USB Microphone Blackout
                                                            Edition</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$120.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 4 -->

                                        <div class="product-item accessories col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_4" alt="" />
                                                </div>
                                                <div
                                                    class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"
                                                >
                                                    <span>sale</span>
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >DYMO LabelWriter 450 Turbo Thermal
                                                            Label Printer</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$410.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-grid-2 row">
                                        <!-- Product 5 -->
                                        <div class="product-item women men col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_5" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Pryma Headphones, Rose Gold & Grey</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$180.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 6 -->

                                        <div class="product-item accessories col">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img :src="product_6" alt="" />
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div
                                                    class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"
                                                >
                                                    <span>-$20</span>
                                                </div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Fujifilm X100T 16 MP Digital Camera
                                                            (Silver)</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">
                                                        $520.00<span>$590.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 7 -->

                                        <div class="product-item women col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_7" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Samsung CF591 Series Curved 27-Inch FHD
                                                            Monitor</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$610.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 8 -->

                                        <div class="product-item accessories col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_8" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Blue Yeti USB Microphone Blackout
                                                            Edition</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$120.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="product-grid-2 row">
                                        <!-- Product 9 -->

                                        <div class="product-item men col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_9" alt="" />
                                                </div>
                                                <div
                                                    class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"
                                                >
                                                    <span>sale</span>
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >DYMO LabelWriter 450 Turbo Thermal
                                                            Label Printer</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$410.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 10 -->

                                        <div class="product-item men col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_10" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Pryma Headphones, Rose Gold & Grey</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$180.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 11 -->

                                        <div class="product-item women men col">
                                            <div class="product product_filter">
                                                <div class="product_image">
                                                    <img :src="product_5" alt="" />
                                                </div>
                                                <div class="favorite"></div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Pryma Headphones, Rose Gold & Grey</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">$180.00</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>

                                        <!-- Product 12 -->

                                        <div class="product-item accessories col">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img :src="product_6" alt="" />
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div
                                                    class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"
                                                >
                                                    <span>-$20</span>
                                                </div>
                                                <div class="product_info">
                                                    <h6 class="product_name">
                                                        <a href="single.html"
                                                            >Fujifilm X100T 16 MP Digital Camera
                                                            (Silver)</a
                                                        >
                                                    </h6>
                                                    <div class="product_price">
                                                        $520.00<span>$590.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Product Sorting -->

                                    <div
                                        class="product_sorting_container product_sorting_container_bottom clearfix"
                                    >
                                        <ul class="product_sorting">
                                            <li>
                                                <span>Show:</span>
                                                <span class="num_sorting_text">04</span>
                                                <i class="fa fa-angle-down"></i>
                                                <ul class="sorting_num">
                                                    <li class="num_sorting_btn"><span>01</span></li>
                                                    <li class="num_sorting_btn"><span>02</span></li>
                                                    <li class="num_sorting_btn"><span>03</span></li>
                                                    <li class="num_sorting_btn"><span>04</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <span class="showing_results"
                                            >Showing 1–3 of 12 results</span
                                        >
                                        <div class="pages d-flex flex-row align-items-center">
                                            <div class="page_current">
                                                <span>1</span>
                                                <ul class="page_selection">
                                                    <li><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                </ul>
                                            </div>
                                            <div class="page_total"><span>of</span> 3</div>
                                            <div id="next_page_1" class="page_next">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-long-arrow-right"
                                                        aria-hidden="true"
                                                    ></i
                                                ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div class="benefit_icon">
                                <i class="fa fa-truck" aria-hidden="true"></i>
                            </div>
                            <div class="benefit_content">
                                <h6>free shipping</h6>
                                <p>Suffered Alteration in Some Form</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon">
                                <i class="fa fa-money" aria-hidden="true"></i>
                            </div>
                            <div class="benefit_content">
                                <h6>cach on delivery</h6>
                                <p>The Internet Tend To Repeat</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon">
                                <i class="fa fa-undo" aria-hidden="true"></i>
                            </div>
                            <div class="benefit_content">
                                <h6>45 days return</h6>
                                <p>Making it Look Like Readable</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 benefit_col">
                        <div class="benefit_item d-flex flex-row align-items-center">
                            <div class="benefit_icon">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                            </div>
                            <div class="benefit_content">
                                <h6>opening all week</h6>
                                <p>8AM - 09PM</p>
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
                        <div
                            class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center"
                        >
                            <h4>Newsletter</h4>
                            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div
                            class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center"
                        >
                            <input
                                id="newsletter_email"
                                type="email"
                                placeholder="Your email"
                                required="required"
                                data-error="Valid email is required."
                            />
                            <button
                                id="newsletter_submit"
                                type="submit"
                                class="newsletter_submit_btn trans_300"
                                value="Submit"
                            >
                                subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div
                            class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center"
                        >
                            <ul class="footer_nav">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div
                            class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center"
                        >
                            <ul>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-facebook" aria-hidden="true"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-instagram" aria-hidden="true"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-pinterest" aria-hidden="true"></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer_nav_container">
                            <div class="cr">
                                ©2018 All Rights Reserverd. Template by
                                <a href="#">Colorlib</a> &amp; distributed by
                                <a href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped></style>
<style src="/src/assets/styles/categories_responsive.css"></style>
<style src="/src/assets/styles/categories_styles.css"></style>
