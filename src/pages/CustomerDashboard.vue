<script setup>
import { onMounted, reactive, ref, useTemplateRef } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import UserProfileOverview from '@/components/Dashboard/UserProfileOverview.vue'

import axios from 'axios'
import CustomerDTO from '../../backend/dto/Customer.dto.js'
import convertUnit from '@/utils/convertUnit.js'
import { useRouter } from 'vue-router'

import {customerDashboardState} from '@/store/customerDashboardState.js'

// Biến trạng thái để kiểm soát hamburger menu
const isHamburgerMenuOpen = ref(false)

// Hàm mở hamburger menu
const openHamburgerMenu = () => {
    isHamburgerMenuOpen.value = true
}

// Hàm đóng hamburger menu
const closeHamburgerMenu = () => {
    isHamburgerMenuOpen.value = false
}

const router = useRouter()

const isChanging = ref(false)

axios.defaults.withCredentials = true

let customerData_reactive = reactive({})

const modalMessage = ref("You don't have credential to access this paging, we will redirect you back to main page")
const modalTitle = ref("Warning")


// Control modal visibility
const showModal = ref(false)

const modalMessageChangePassword = ref("Fill information below to change password")
const modalTitleChangePassword = ref("Information")


// Control modal visibility
const showModalChangePassword = ref(false)


onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/customer/info')
        if (response.status === 200) {
            const customerDataDTO = new CustomerDTO(response.data)
            console.log(customerDataDTO.CustomerID)

            // Cập nhật các thuộc tính của customerData_reactive
            customerData_reactive.CustomerID = customerDataDTO.CustomerID
            customerData_reactive.FirstName = customerDataDTO.FirstName
            customerData_reactive.LastName = customerDataDTO.LastName
            customerData_reactive.Email = customerDataDTO.Email
            customerData_reactive.PhoneNumber = customerDataDTO.PhoneNumber
            customerData_reactive.Address = customerDataDTO.Address
            customerData_reactive.CustomerType = customerDataDTO.CustomerType
            customerData_reactive.Username = response.data.Username
            customerData_reactive.createdAt = response.data.createdAt
        } else {
            console.error('Error fetching data:', response.status)
        }
    } catch (err) {
        console.error('Request failed', err)
        showModal.value = true
        setTimeout(() => {
            router.push('/'); // Chuyển hướng đến home
        }, 3000);
    }
})

const username_ref = useTemplateRef('username_ref');
const first_name_ref = useTemplateRef('first_name_ref');
const last_name_ref = useTemplateRef('last_name_ref');
const email_ref = useTemplateRef('email_ref');
const phone_ref = useTemplateRef('phone_ref');
const address_ref = useTemplateRef('address_ref');
const old_password_ref = useTemplateRef('old_password_ref');
const new_password_ref = useTemplateRef('new_password_ref');
const confirm_new_password_ref = useTemplateRef('confirm_new_password_ref');

async function updateUserData() {
    console.log(`Starting update`)
    const customerData = new CustomerDTO({
        CustomerID: username_ref.value.value, // Access the DOM element's value
        FirstName: first_name_ref.value.value,
        LastName: last_name_ref.value.value,
        Email: email_ref.value.value,
        PhoneNumber: phone_ref.value.value,
        Address: address_ref.value.value,
        CustomerType: customerData_reactive.CustomerType,
    })
    try {
        const response = await axios.post('http://localhost:3000/api/customer/info/update', {
            CustomerID: customerData_reactive.CustomerID,
            FirstName: customerData.FirstName,
            LastName: customerData.LastName,
            Email: customerData.Email,
            PhoneNumber: customerData.PhoneNumber,
            Address: customerData.Address,
            CustomerType: customerData.CustomerType,
            Username: customerData_reactive.Username,
        })
        if (response.status === 200) {
            showModal.value = true
            modalMessage.value = "Save change successfully"
            modalTitle.value = "Information"
        }
    }
    catch (e) {
        console.error(e)
        showModal.value = true
        modalMessage.value = "Save change not successfully"
        modalTitle.value = "Error"
    }
}



async function changePassword() {
    console.log(`Starting change password`)
    try {
        const response = await axios.post('http://localhost:3000/api/customer_account/change_password', {
            CustomerID: customerData_reactive.CustomerID,
            Password: new_password_ref.value.value,
        })
        showModal.value = true
        modalMessage.value = "Change password successfully"
        modalTitle.value = "Information"
    }
    catch (e) {
        console.error(e)
        showModal.value = true
        modalMessage.value = "Change password not successfully"
        modalTitle.value = "Warning"
    }
}

async function logout() {
    console.log(`Starting logout`)
    try {
        const response = await axios.post('http://localhost:3000/api/customer_account/logout')
        await router.push('/')
    }
    catch (e) {
        console.error(e)
    }
}

async function changeAvatar() {
    console.log(`Starting change avatar`)
}

</script>

<template>
    <div class="super_container" style="min-height: 100vh;">
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
        <div class="hamburger_menu" :class="{ hamburger_menu_open: isHamburgerMenuOpen }">
            <div class="hamburger_close" @click="closeHamburgerMenu">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="hamburger_menu_content text-right">
                <ul class="menu_top_nav">
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
                    <li class="menu_item"><router-link to="">home</router-link></li>
                    <li class="menu_item"><router-link to="/shop">shop</router-link></li>
                    <li class="menu_item"><a href="#">promotion</a></li>
                    <li class="menu_item"><a href="#">pages</a></li>
                    <li class="menu_item"><a href="#">blog</a></li>
                    <li class="menu_item"><a href="#">contact</a></li>
                </ul>
            </div>
        </div>

        <!--        Sidebar-->

        <div class="container d-flex list-container" style="margin-top: 120px">
            <div>
                <ul class="nav nav-pills d-flex flex-column" data-bs-parrent="#sidebar">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style="color: rgba(0, 0, 0, 0.65); font-family: 'Poppins', sans-serif"
                        >
                            <i class="fa-solid fa-grid-2 fa-xs icon"></i>
                            <span>Tài khoản của tôi</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="showModalChangePassword=true">Đổi mật khẩu</a></li>
                            <li><a class="dropdown-item" href="#" @click="logout">Đăng xuất</a></li>
                        </ul>
                    </li>
                    <li class="nav-item" style="color: black">
                        <a href="#" class="nav-link" style="color: rgba(0, 0, 0, 0.65); font-family: 'Poppins', sans-serif">
                            <i class="fa-solid fa-bag-shopping fa-xs icon"></i>
                            <span>Đơn đặt hàng</span>
                        </a>
                    </li>
                    <li class="nav-item" >
                        <a href="#" class="nav-link" style="color: rgba(0, 0, 0, 0.65); font-family: 'Poppins', sans-serif">
                            <i class="fa-solid fa-check fa-xs icon"></i>
                            <span>Đơn đã hoàn thành</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-8">
                        <div class="d-flex flex-column information-show-input">
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Customer ID</span>
                                </div>
                                <div class="col">
                                    <span type="text" style="width: 100%">{{customerData_reactive.CustomerID}}</span>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Username</span>
                                </div>
                                <div class="col">
                                    <span style="width: 100%" v-if="!isChanging">{{customerData_reactive.Username}}</span>
                                    <input type="text" :value="customerData_reactive.Username" v-if="isChanging" style="width: 100%" ref="username_ref"/>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>First Name</span>

                                </div>
                                <div class="col">
                                    <span v-if="!isChanging">{{customerData_reactive.FirstName}}</span>
                                    <input type="text" :value="customerData_reactive.FirstName" v-if="isChanging" style="width: 100%" ref="first_name_ref"/>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Last name</span>
                                </div>
                                <div class="col">
                                    <span v-if="!isChanging">{{!customerData_reactive.LastName ? 'null' : customerData_reactive.LastName }}</span>
                                    <input type="text" :value="customerData_reactive.LastName" v-if="isChanging" style="width: 100%" ref="last_name_ref"/>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Email</span>
                                </div>
                                <div class="col">
                                    <span v-if="!isChanging">{{customerData_reactive.Email}}</span>
                                    <input type="text" :value="customerData_reactive.Email" v-if="isChanging" style="width: 100%" ref="email_ref"/>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Address</span>
                                </div>
                                <div class="col">
                                    <span v-if="!isChanging">{{!customerData_reactive.Address ? 'null' : customerData_reactive.Address}}</span>
                                    <input type="text" :value="customerData_reactive.Address" v-if="isChanging" style="width: 100%" ref="address_ref"/>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 20px">
                                <div class="col-3">
                                    <span>Phone number</span>
                                </div>
                                <div class="col">
                                    <span v-if="!isChanging">{{!customerData_reactive.PhoneNumber ? 'null': customerData_reactive.PhoneNumber}}</span>
                                    <input type="text" :value="customerData_reactive.PhoneNumber" v-if="isChanging" style="width: 100%" ref="phone_ref"/>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 20px">
                            <div class="col-3">
                                <span>Account created at</span>
                            </div>
                            <div class="col">
                                <span type="text" style="width: 100%">{{convertUnit.formatDateToText(customerData_reactive.createdAt)}}</span>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <button @click="isChanging = !isChanging" type="button" class="btn btn-primary">Change information</button>
                            <button @click="updateUserData" type="button" class="btn btn-success" v-if="isChanging">Save changes</button>
                        </div>

                    </div>
                    <div class="col-4">
                        <UserProfileOverview :CustomerID="customerData_reactive.CustomerID" :IsEmployee="false" :AccountType="customerData_reactive.CustomerType" :FirstName="customerData_reactive.FirstName"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="modal fade"
        :class="{ show: showModal }"
        :style="{ display: showModal ? 'block' : 'none' }"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        :aria-hidden="!showModal"
        role="dialog"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" @click="showModal = false" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ modalMessage }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="showModal = false">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div
        class="modal fade"
        :class="{ show: showModalChangePassword }"
        :style="{ display: showModalChangePassword ? 'block' : 'none' }"
        id="ChangePasswordModal"
        tabindex="-1"
        aria-labelledby="changePasswordModalLabel"
        :aria-hidden="!showModalChangePassword"
        role="dialog"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="padding: 10px">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="changePasswordModalLabel">{{ modalTitleChangePassword }}</h1>
                    <button type="button" class="btn-close" @click="showModalChangePassword = false" aria-label="Close"></button>
                </div>
                <span>Old password</span>
                <input type="password" style="width: 100%" ref="old_password_ref"/>
                <span>New password</span>
                <input type="password" style="width: 100%" ref="new_password_ref"/>
                <span>Confirm new password</span>
                <input type="password" style="width: 100%" ref="confirm_new_password_ref"/>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="showModalChangePassword = false">
                        Close
                    </button>
                    <button type="button" class="btn btn-success" @click="changePassword">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
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
    background: rgba(0, 0, 0, 0.5);
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
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
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
    color: gray;
    font-weight: bold;
}
.nav-item span {
    font-size: 16px;
}

</style>
<style src="/src/assets/styles/responsive.css"></style>
<style src="/src/assets/styles/main_styles.css"></style>
