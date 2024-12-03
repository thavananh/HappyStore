<script setup>
import UserAvatar from '@/assets/images/avatar/cat.jpg';
</script>

<template>
    <div class="card d-flex flex-column shadow rounded-3" style="width: 94%; border: none">
        <div class="d-flex flex-column justify-content-between ">
            <div class="d-flex flex-row justify-content-between" style="margin-bottom: 30px">
                <h4>Top Selling Products</h4>
                <div class="navigation-panel">
                    <i class="fa-solid fa-less-than" style="font-size: 12px; margin-right: 30px"></i>
                    <i class="fa-solid fa-greater-than" style="font-size: 12px"></i>
                </div>
            </div>
            <div class="row">
                <div class="product-item col" style="height:fit-content; margin-bottom: 20px">
                    <img class="product-img" :src="UserAvatar" alt="Mèo 5 kg">
                    <p style="font-size: 20px; font-weight: 400; color: black; padding: 0; margin: 0" >Mèo 5kg</p>
                    <span>Động vật</span>
                </div>
                <div class="product-item col" style="height:fit-content">
                    <img class="product-img" :src="UserAvatar" alt="Mèo 5 kg">
                    <p style="font-size: 20px; font-weight: 400; color: black; padding: 0; margin: 0" >Mèo 5kg</p>
                    <span>Động vật</span>
                </div>
                <div class="product-item col" style="height:fit-content">
                    <img class="product-img" :src="UserAvatar" alt="Mèo 5 kg">
                    <p style="font-size: 20px; font-weight: 400; color: black; padding: 0; margin: 0" >Mèo 5kg</p>
                    <span>Động vật</span>
                </div>
                <div class="product-item col" style="height:fit-content">
                    <img class="product-img" :src="UserAvatar" alt="Mèo 5 kg">
                    <p style="font-size: 20px; font-weight: 400; color: black; padding: 0; margin: 0" >Mèo 5kg</p>
                    <span>Động vật</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fa-less-than:hover {
    cursor: pointer;
    color: gray;
}
.fa-greater-than:hover {
    cursor: pointer;
    color: gray;
}
.product-img {
    width: 168px;
    height: 168px;
    object-fit: cover;
    border-radius: 6%;
}
.product-img {
    display:flex;
    width:100%;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
