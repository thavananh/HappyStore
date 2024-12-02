<script setup>
    import LoginPic1 from '@/assets/images/login/login_pic1.svg';
    import GoogleLogo from '@/assets/images/logo/Google__G__logo.svg'
    import Login from '@/components/Login/Login.vue'
    import Registration from '@/components/Login/Registration.vue'
</script>

<template>
    <section style="background-color: #95c1d1; height: 100vh">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img :src="LoginPic1" class="img-fluid" alt="Phone image" />
                </div>
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
