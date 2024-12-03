<script setup>

import UserAvatar from '@/assets/images/avatar/cat.jpg'
</script>

<template>
    <div class="card d-flex flex-column shadow rounded-3" style="width: 20rem; border: none; padding: 6px">
        <h5 class="text-center">Valuable Customer</h5>
        <div class="valuable-customer d-flex flex-row">
            <div class="image-section" style="margin-right: 10px">
                <img class="avatar avatar-xl custom-img" :src="UserAvatar" alt="Avatar"/>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <div class="d-flex flex-column">
                    <span>Duy Nguyễn</span>
                    <span>duynguyen@gmail.com</span>
                </div>
                <div><i class="fa-solid fa-greater-than" style="color:rgb(176, 178, 187)"></i></div>
            </div>
        </div>
        <div class="valuable-customer d-flex flex-row">
            <div class="image-section" style="margin-right: 10px">
                <img class="avatar avatar-xl custom-img" :src="UserAvatar" alt="Avatar"/>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <div class="d-flex flex-column">
                    <span>Duy Nguyễn</span>
                    <span>duynguyen@gmail.com</span>
                </div>
                <div><i class="fa-solid fa-greater-than" style="color:rgb(176, 178, 187)"></i></div>
            </div>
        </div>
        <div class="valuable-customer d-flex flex-row">
            <div class="image-section" style="margin-right: 10px">
                <img class="avatar avatar-xl custom-img" :src="UserAvatar" alt="Avatar"/>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <div class="d-flex flex-column">
                    <span>Duy Nguyễn</span>
                    <span>duynguyen@gmail.com</span>
                </div>
                <div><i class="fa-solid fa-greater-than" style="color:rgb(176, 178, 187)"></i></div>
            </div>
        </div>
        <div class="valuable-customer d-flex flex-row">
            <div class="image-section" style="margin-right: 10px">
                <img class="avatar avatar-xl custom-img" :src="UserAvatar" alt="Avatar"/>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <div class="d-flex flex-column">
                    <span>Duy Nguyễn</span>
                    <span>duynguyen@gmail.com</span>
                </div>
                <div><i class="fa-solid fa-greater-than" style="color:rgb(176, 178, 187)"></i></div>
            </div>
        </div>
        <div class="valuable-customer d-flex flex-row">
            <div class="image-section" style="margin-right: 10px">
                <img class="avatar avatar-xl custom-img" :src="UserAvatar" alt="Avatar"/>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%">
                <div class="d-flex flex-column">
                    <span>Duy Nguyễn</span>
                    <span>duynguyen@gmail.com</span>
                </div>
                <div><i class="fa-solid fa-greater-than" style="color:rgb(176, 178, 187)"></i></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 25%;
}
.valuable-customer span:first-child {
    font-weight: bold;
}
.valuable-customer {
    margin-bottom: 20px;
}
</style>
