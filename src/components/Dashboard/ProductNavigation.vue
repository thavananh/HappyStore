<template>
    <div ref="table"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables'; // Import Tabulator library

// Import Tabulator CSS
import 'tabulator-tables/dist/css/tabulator.min.css';
// For example, to use the "midnight" theme
import 'tabulator-tables/dist/css/tabulator_bulma.min.css';


// Reference to your table element
const table = ref(null);

// Variable to hold your Tabulator instance
const tabulator = ref(null);

// Sample data for the table
const tableData = reactive([
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },
    { id: 1, name: "John Doe", age: 29, gender: "Male", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 34, gender: "Female", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", age: 45, gender: "Male", email: "bob.johnson@example.com" },
    { id: 4, name: "Alice Williams", age: 23, gender: "Female", email: "alice.williams@example.com" },

    // Add more data as needed
]);

// Define the columns for the table
const columns = [
    { title: "ID", field: "id", sorter: "number", width: 70 },
    { title: "Name", field: "name", sorter: "string", headerFilter: "input" },
    { title: "Age", field: "age", sorter: "number", hozAlign: "right", headerFilter: "number" },
    { title: "Gender", field: "gender", sorter: "string", headerFilter: "select", headerFilterParams: { values: ["Male", "Female"] } },
    { title: "Email", field: "email", sorter: "string", headerFilter: "input" },
];

// Initialize Tabulator when the component is mounted
onMounted(() => {
    tabulator.value = new Tabulator(table.value, {
        data: tableData,
        reactiveData: true,
        layout: "fitColumns",
        columns: columns,
        pagination: "local",
        paginationSize: 20,
        movableColumns: true,
        resizableRows: true,
        theme: "bulma", // Set the desired theme here
    });
});

// Optional: Cleanup Tabulator instance when component is unmounted
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(() => {
    if (tabulator.value) {
        tabulator.value.destroy();
    }
});
</script>

<style scoped>
/* Optional: Add some custom styles if needed */
</style>
