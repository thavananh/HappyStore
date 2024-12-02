<script setup>
import { ref } from 'vue'
import GoogleLogo from '@/assets/images/logo/Google__G__logo.svg'
import LoginPic1 from '@/assets/images/login/login_pic1.svg'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const gender = ref('')
const phoneNumber = ref('')

const errors = ref({
    firstName: '',
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
})

const validateForm = () => {
    let isValid = true
    errors.value = {}

    if (!firstName.value) {
        errors.value.firstName = 'First Name is required.'
        isValid = false
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email = 'Please enter a valid email.'
        isValid = false
    }
    if (!username.value) {
        errors.value.username = 'Username is required.'
        isValid = false
    } else if (username.value.length > 255 && username.value.length < 8) {
        errors.value.username =
            'Username must be at least 8 characters with a max of 255 characters.'
        isValid = false
    }
    if (!phoneNumber.value) {
        errors.value.phoneNumber = 'Phone number is required.'
        isValid = false
    }
    if (!password.value) {
        errors.value.password = 'Password is required.'
        isValid = false
    } else if (password.value.length < 8 && password.value.length > 32) {
        errors.value.password =
            'Password must be at least 8 characters with a max of 32 characters.'
        isValid = false
    }
    if (password.value !== confirmPassword.value) {
        errors.value.confirmPassword = 'Passwords do not match.'
        isValid = false
    }
    if (!gender.value) {
        errors.value.gender = 'Please select a gender.'
        isValid = false
    }

    return isValid
}

const handleSubmit = async function (event) {
    event.preventDefault()
    if (validateForm()) {
        try {
            await register()
        } catch (e) {
            console.error(e)
        }
        alert('Form submitted successfully!')
        // Handle form submission logic here
    }
}
import axios from 'axios'
import CustomerAccountDTO from '../../../backend/dto/CustomerAccount.dto.js'

async function register() {
    const customerAccount = new CustomerAccountDTO({
        Username: username.value,
        PasswordHash: password.value,
        Email: email.value,
        PhoneNumber: phoneNumber.value,
    })
    console.log(customerAccount.Username)
    console.log(password.value)
    console.log(firstName.value)
    console.log(lastName.value)
    console.log(email.value)
    console.log(username.value)
    try {
        const response = await axios.post('http://localhost:3000/api/customer_account/create', {
            Username: customerAccount.Username,
            Password: customerAccount.PasswordHash,
            Email: customerAccount.Email,
            FirstName: firstName.value,
            LastName: lastName.value,
            PhoneNumber: phoneNumber.value,
        })
        console.log('Response:', response)
    } catch (error) {
        console.error('Error:', error)
    }
}
</script>

<template>
    <div class="col-lg-8 col-xl-5 offset-xl-1">
        <form @submit="handleSubmit">
            <!-- Row 1 -->
            <div class="row">
                <!-- First Name -->
                <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label fs-5" style="color: black"
                        >First Name</label
                    >
                    <input type="text" class="form-control" id="firstName" v-model="firstName" />
                    <div class="text-danger" v-if="errors.firstName">
                        {{ errors.firstName }}
                    </div>
                </div>
                <!-- Last Name -->
                <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label fs-5" style="color: black"
                        >Last Name</label
                    >
                    <input type="text" class="form-control" id="lastName" v-model="lastName" />
                </div>
            </div>
            <!-- Row 2 -->
            <div class="row">
                <!-- Email -->
                <div class="col-md-6 mb-3">
                    <label for="email" class="form-label fs-5" style="color: black">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" />
                    <div class="text-danger" v-if="errors.email">{{ errors.email }}</div>
                </div>
                <!-- User Name -->
                <div class="col-md-6 mb-3">
                    <label for="username" class="form-label fs-5" style="color: black"
                        >User name</label
                    >
                    <input type="text" class="form-control" id="username" v-model="username" />
                    <div class="text-danger" v-if="errors.username">{{ errors.username }}</div>
                </div>
            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label fs-5" style="color: black"
                    >Phone Number</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    v-model="phoneNumber"
                    required
                />
                <div class="text-danger" v-if="errors.phoneNumber">{{ errors.phoneNumber }}</div>
            </div>
            <!-- Row 3 -->
            <div class="mb-3">
                <label for="inputPassword" class="form-label fs-5" style="color: black"
                    >Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    v-model="password"
                    required
                />
                <div class="text-danger" v-if="errors.password">{{ errors.password }}</div>
            </div>

            <!-- Confirm Password -->
            <div class="mb-3">
                <label for="confirmPassword" class="form-label fs-5" style="color: black"
                    >Confirm Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    required
                />
                <div class="text-danger" v-if="errors.confirmPassword">
                    {{ errors.confirmPassword }}
                </div>
            </div>
            <!-- Gender -->
            <div class="mb-4">
                <label class="form-label fs-5" style="color: black">Gender</label>
                <div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="genderOptions"
                            id="male"
                            value="male"
                            v-model="gender"
                        />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="genderOptions"
                            id="female"
                            value="female"
                            v-model="gender"
                        />
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="genderOptions"
                            id="unknown"
                            value="unknown"
                            v-model="gender"
                        />
                        <label class="form-check-label" for="female">Prefer not to say</label>
                    </div>
                    <div class="text-danger" v-if="errors.gender">{{ errors.gender }}</div>
                </div>
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary" style="width: 100%; font-weight: bold">
                Sign Up
            </button>
            <div class="divider d-flex align-items-center my-3">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <div class="d-flex justify-content-center">
                <p>Already a member? <router-link to="/login">Login now</router-link></p>
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
</style>
