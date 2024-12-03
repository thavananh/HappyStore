<template>
    <div
        class="card d-flex flex-column align-items-center justify-content-center shadow rounded-3"
        style="width: 60%; border: none"
    >
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" style="width: 100%" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import UserAvatar from '@/assets/images/avatar/cat.jpg'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    computed: {
        UserAvatar() {
            return UserAvatar
        },
    },
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [
                            20000000, 40000000, 60000000, 80000000, 60000000, 40000000, 20000000,
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        }
    },
}
</script>
