import axios from 'axios';

// Tạo một instance của axios
const instance = axios.create({
    baseURL: 'http://localhost:3000', // URL mặc định cho API
    timeout: 10000, // Thời gian chờ cho request
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm interceptor để xử lý request và response (nếu cần)
instance.interceptors.request.use(
    (config) => {
        // Thêm token vào headers nếu cần
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Xử lý lỗi toàn cục
        console.error('Lỗi từ API:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default instance;
