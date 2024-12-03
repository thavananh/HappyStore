<template>
    <div ref="table"></div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const table = ref(null);
const tabulator = ref(null);

// Dữ liệu mẫu
const tableData = reactive([
    { id: 1, orderID: "ORD001", customer: "John Doe", status: "Pending" },
    { id: 2, orderID: "ORD002", customer: "Jane Smith", status: "Pending" },
    { id: 3, orderID: "ORD003", customer: "Bob Johnson", status: "Confirmed" },
]);

// Hàm xử lý khi nhấn nút
const confirmOrder = (e, row) => {
    alert(`Xác nhận đơn hàng: ${row.getData().orderID}`);
    row.update({ status: "Confirmed" }); // Cập nhật trạng thái đơn hàng
};

const cancelOrder = (e, row) => {
    alert(`Hủy đơn hàng: ${row.getData().orderID}`);
    row.update({ status: "Cancelled" }); // Cập nhật trạng thái đơn hàng
};

// Cấu hình cột
const columns = [
    { title: "ID", field: "id", width: 50 },
    { title: "Order ID", field: "orderID" },
    { title: "Customer", field: "customer" },
    { title: "Status", field: "status" },
    {
        title: "Actions",
        formatter: (cell) => {
            return `
                <button class="confirm-btn">Xác nhận</button>
                <button class="cancel-btn">Hủy</button>
            `;
        },
        cellClick: (e, cell) => {
            const row = cell.getRow();
            if (e.target.classList.contains("confirm-btn")) {
                confirmOrder(e, row);
            } else if (e.target.classList.contains("cancel-btn")) {
                cancelOrder(e, row);
            }
        },
    },
];

onMounted(() => {
    tabulator.value = new Tabulator(table.value, {
        data: tableData,
        layout: "fitColumns",
        columns: columns,
        reactiveData: true,
    });
});

onBeforeUnmount(() => {
    if (tabulator.value) {
        tabulator.value.destroy();
    }
});
</script>

<style scoped>
/* Style cho các nút */
.confirm-btn {
    background-color: #4CAF50; /* Màu xanh lá */
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 3px;
}

.cancel-btn {
    background-color: #f44336; /* Màu đỏ */
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

/* Hover hiệu ứng */
.confirm-btn:hover {
    background-color: #45a049;
}

.cancel-btn:hover {
    background-color: #d32f2f;
}
</style>
