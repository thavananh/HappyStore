<script setup>
import { ref, nextTick } from 'vue';
import UserAvatar from '@/assets/images/avatar/cat.jpg';

const avatar = ref(UserAvatar);
const fileInput = ref(null); // 明确定义 fileInput 为 null

const modalMessage = ref("Do you want to update this image ?")
const modalTitle = ref("Information")

// Control modal visibility
const showModal = ref(false)

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            avatar.value = reader.result; // 更新 avatar 为新图片
        };
        reader.readAsDataURL(file);
        showModal.value = true;
    }

};

const triggerFileInput = async () => {
    await nextTick(); // 等待 DOM 更新
    if (fileInput.value) {
        fileInput.value.click();
    } else {
        console.error('fileInput is not defined');
    }
};

const AccountInfoProps = defineProps({
    AccountType: {
        type: String,
        required: true,
    },
    FirstName: {
        type: String,
        required: true,
    }
})


</script>

<template>
    <div class="card d-flex flex-column align-items-center justify-content-center shadow rounded-3" style="width: 20rem; height: 15rem; border: none">
        <img class="avatar avatar-xl custom-img" :src="avatar" alt="Avatar" @click="triggerFileInput()" />
        <span class="mt-2 fs-5" style="font-weight: bold">{{AccountInfoProps.FirstName}}</span>
        <span>{{AccountInfoProps.AccountType}}</span>
        <!-- Ẩn input file, chỉ hiển thị khi người dùng click vào avatar -->
        <input ref="fileInput" type="file" accept="image/*" style="display: none;" @change="handleFileChange" />
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
                    <button type="button" class="btn btn-secondary bg-primary" @click="showModal = false">
                        Don't save
                    </button>
                    <button type="button" class="btn btn-secondary bg-success" @click="showModal = false">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-img {
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer; /* Thêm cursor pointer để người dùng biết có thể nhấp vào */
}
</style>
