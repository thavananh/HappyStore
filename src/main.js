import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import './assets/js/all.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'fastbootstrap/dist/css/fastbootstrap.min.css'
// import axios from 'src/utils/axios.js'

const app =  createApp(App)

// Sử dụng provide để inject axios vào toàn bộ app
// app.provide('axios', axios);

app.use(router)

app.mount('#app')

