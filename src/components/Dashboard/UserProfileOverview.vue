<script setup>
    import UserAvatar from '@/assets/images/avatar/cat.jpg';
</script>

<template>
    <div class="card d-flex flex-column align-items-center justify-content-center shadow rounded-3" style="width: 20rem; height: 15rem; border: none">
        <img class="avatar avatar-xl" :src="UserAvatar" alt="Avatar"/>
        <span class="mt-2 fs-5" style="font-weight: bold">Duy Nguyễn</span>
        <span>Chủ Cửa Hàng</span>
    </div>
</template>

<style scoped>
    .custom-img {
        width: 64px;
        height: 64px;
        object-fit: cover;
    }

</style>
