<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const currentTime = ref('');

const updateTime = () => {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    currentTime.value = hh + ":" + mm + ":" + ss + " " + session;
};

onMounted(() => {
    updateTime(); // Cập nhật lần đầu tiên khi component được mounted
    const interval = setInterval(updateTime, 1000); // Cập nhật thời gian mỗi giây
    onUnmounted(() => clearInterval(interval)); // Dọn dẹp interval khi component bị huỷ
});
</script>

<template>
    <div class="wrapper d-flex flex-row justify-content-between">
        <div class="left-container">
            <h2>Dashboard</h2>
            <span>{{ currentTime }}</span>
        </div>
        <div class="d-flex flex-row flex-gap">
            <div class="input-group mb-5">
                <span class="input-group-text">
                    <i class="fa fa-search w-auto fs-6" aria-hidden="true"></i>
                </span>
                <input type="search" class="form-control" placeholder="Search...">
            </div>
            <div class="d-flex flex-row bell-gear">
                <span>
                    <i class="fa-solid fa-bell fs-1" style="color: #B0B2BB;"></i>
                </span>
                <span>
                    <i class="fa-solid fa-gear fs-1" style="color: #B0B2BB;"></i>
                </span>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .bell-gear {
        margin-left: 10px;
    }
    .bell-gear span:nth-child(1) {
        margin-right: 10px;
    }
</style>
