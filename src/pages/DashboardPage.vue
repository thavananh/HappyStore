<script setup>


import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
import TopNavBar from '@/components/Navbar/TopNavBar.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CustomerDTO from '../../backend/dto/Customer.dto.js'

const modalMessage = ref("You don't have credential to access this paging, we will redirect you back to main page")
const modalTitle = ref("Warning")


// Control modal visibility
const showModal = ref(false)

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

</script>

<template>
    <div class="container-fluid d-flex flex-row" style="height: 100vh">
        <div class="flex-grow-0" style="width: 200px; background-color: white"> <!-- SidebarMenu -->
            <SidebarMenu />
        </div>
        <div class="flex-grow-1" style="background-color: #F9F8FDFF"> <!-- TopNavBar -->
            <div style="margin-bottom: 10px; margin-left: 50px"><TopNavBar /></div>
            <router-view></router-view>
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
</template>

<style scoped>

</style>
