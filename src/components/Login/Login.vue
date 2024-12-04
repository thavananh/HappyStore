<script setup>
import LoginPic1 from '@/assets/images/login/login_pic1.svg'
import GoogleLogo from '@/assets/images/logo/Google__G__logo.svg'
import { reactive, ref } from 'vue'
import { Modal } from 'bootstrap'
import {useRouter} from 'vue-router'

const accountData = reactive({
    Username: '',
    Password: '',
})

const errors = reactive({
    Username: '',
    Password: '',
})
const modalRef = ref(null) // Tham chiếu đến modal
const modalMessage = ref("Login failed. Please check your username and password and try again.")
const modalTitle = ref("Login Failed")

function validateSubmit() {
    let isValid = true
    if (!accountData.Username) {
        isValid = false
        errors.Username = 'Username is required'
    }
    if (!accountData.Password) {
        isValid = false
        errors.Password = 'Password is required'
    }
    return isValid
}

import axios from 'axios'

axios.defaults.withCredentials = true // Đặt mặc định cho tất cả các request

const router = useRouter()

async function submitLogin(event) {
    event.preventDefault()
    if (validateSubmit()) {
        try {
            const response = await axios.post('http://localhost:3000/api/customer_account/auth', {
                username: accountData.Username,
                password: accountData.Password,
            })
            if (response.status === 200) {
                modalTitle.value = "Login successful"
                modalMessage.value = "Login successful. Welcome back!"
                const modalInstance = new Modal(modalRef.value)
                modalInstance.show()
                await router.push('/customer_dashboard')
            }

        }
        catch (error) {
            const modalInstance = new Modal(modalRef.value)
            modalInstance.show()
            console.log(error)
        }
    }
}


</script>

<template>
    <div class="col-lg-8 col-xl-5 offset-xl-1">
        <form @submit="submitLogin">
            <!-- Email input -->
            <div>
                <label
                    for="Username"
                    class="form-label fs-5"
                    style="color: black; font-weight: bold"
                    >User name</label
                >
                <input type="text" class="form-control" id="Username" v-model="accountData.Username"  />
                <div class="text-danger" v-if="errors.Username">{{ errors.Username }}</div>
            </div>
            <div class="mb-4">
                <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label fs-5"
                    style="color: black; font-weight: bold"
                    >Password</label
                >
                <input type="password" class="form-control" id="inputPassword" v-model="accountData.Password"  />
                <div class="text-danger" v-if="errors.Password">{{ errors.Password }}</div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary" style="width: 100%; font-weight: bold">
                Sign in
            </button>

            <div class="divider d-flex align-items-center my-3">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <div class="d-flex justify-content-center">
                <p>Not a member? <router-link to="register">Registration now</router-link></p>
            </div>
            <div class="d-flex justify-content-between">
                <a
                    class="btn btn-primary"
                    style="background-color: #3b5998; font-weight: bold"
                    href="#!"
                    role="button"
                >
                    <i class="fab fa-facebook-f me-2"></i>
                    <span>Continue with Facebook</span>
                </a>
                <a
                    class="btn btn-primary"
                    style="background-color: white; font-weight: bold"
                    href="#!"
                    role="button"
                >
                    <img :src="GoogleLogo" alt="google-logo" class="me-2" />
                    <span style="color: black">Continue with Google</span>
                </a>
            </div>
        </form>
        <!-- Modal -->


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modalRef">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{modalTitle}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{modalMessage}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="bg-primary btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.divider:after,
.divider:before {
    content: '';
    flex: 1;
    height: 1px;
    background: #eee;
}

#inputPassword {
    width: 100%;
}

.sign-in-registration a {
    background-color: white;
}

.sign-in-registration span {
    font-weight: bold;
    color: black;
}
</style>
