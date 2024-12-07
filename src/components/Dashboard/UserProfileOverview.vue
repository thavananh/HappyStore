<script setup>
import { ref, nextTick, onBeforeMount } from 'vue';
import UserAvatar from '@/assets/images/avatar/cat.jpg';
import axios from 'axios';

const avatar = ref(UserAvatar);
const fileInput = ref(null); // 明确定义 fileInput 为 null

const modalMessage = ref("Do you want to update this image ?");
const modalTitle = ref("Information");

// Control modal visibility
const showModal = ref(false);

const AccountInfoProps = defineProps({
    CustomerID: {
        type: String,
        required: true,
    },
    AccountType: {
        type: String,
        required: true,
    },
    FirstName: {
        type: String,
        required: true,
    },
    IsEmployee: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            avatar.value = reader.result; // Cập nhật avatar mới
        };
        reader.readAsDataURL(file);
        showModal.value = true; // Hiển thị modal xác nhận
    }
};

const triggerFileInput = async () => {
    await nextTick();
    if (fileInput.value) {
        fileInput.value.click();
    } else {
        console.error('fileInput is not defined');
    }
};

const updateImages = async () => {
    if (!AccountInfoProps.IsEmployee && fileInput.value?.files.length > 0) {
        const formData = new FormData();
        formData.append('image', fileInput.value.files[0]);
        formData.append('CustomerID', AccountInfoProps.CustomerID);

        try {
            const response = await axios.post('http://localhost:3000/api/customer/info/upload', formData);

            if (response.status === 201) {
                showModal.value = true;
                modalMessage.value = "Successfully uploaded!";
                modalTitle.value = "Information";
            } else {
                showModal.value = true;
                modalMessage.value = "Upload failed!";
                modalTitle.value = "Error";
            }
        } catch (error) {
            showModal.value = true;
            modalMessage.value = "Error uploading image.";
            modalTitle.value = "Error";
        }
    } else {
        showModal.value = true;
        modalMessage.value = "No file selected.";
        modalTitle.value = "Error";
    }
};

const getAvatarImage = async () => {
    if (!AccountInfoProps.IsEmployee) {
        try {
            const response = await axios.get(`http://localhost:3000/api/customer/info/avatar`, {
                responseType: 'blob' // Set the response type to blob
            });
            const url = URL.createObjectURL(response.data);
            return url;
        } catch (error) {
            console.error('Error fetching avatar:', error);
            return UserAvatar; // Fallback to default avatar
        }
    }
};

onBeforeMount(async () => {
    avatar.value = await getAvatarImage();
});
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
                    <button type="button" class="btn btn-secondary bg-success" @click="updateImages">
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
