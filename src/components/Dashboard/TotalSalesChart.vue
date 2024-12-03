<template>
    <div class="card d-flex flex-column align-items-center justify-content-center shadow rounded-3" style="width: 30%;border: none">
        <Radar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
            style="width: 100%;"
        />
    </div>
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js'
import UserAvatar from '@/assets/images/avatar/cat.jpg'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement)

export default {
    name: 'RadarChart',
    computed: {
        UserAvatar() {
            return UserAvatar
        }
    },
    components: { Radar },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Doanh số hàng tháng',
                        data: [20000000, 40000000, 60000000, 80000000, 60000000, 40000000, 20000000],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value, index, values) {
                                if (value >= 1e9) {
                                    return (value / 1e9) + 'b';
                                } else if (value >= 1e6) {
                                    return (value / 1e6) + 'm';
                                } else {
                                    return value;
                                }
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let value = context.parsed.r;
                                if (value >= 1e9) {
                                    return context.dataset.label + ': ' + (value / 1e9) + 'b';
                                } else if (value >= 1e6) {
                                    return context.dataset.label + ': ' + (value / 1e6) + 'm';
                                } else {
                                    return context.dataset.label + ': ' + value;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>
