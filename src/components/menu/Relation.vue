<script setup>
import ECharts from "@components/Echarts.vue";
</script>

<script>
export default {
    data: () => {
        return {
            option: {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            },
            option2: {
                title: {
                    text: 'Step Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Step Start', 'Step Middle', 'Step End']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Step Start',
                        type: 'line',
                        step: 'start',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Step Middle',
                        type: 'line',
                        step: 'middle',
                        data: [220, 282, 201, 234, 290, 430, 410]
                    },
                    {
                        name: 'Step End',
                        type: 'line',
                        step: 'end',
                        data: [450, 432, 401, 454, 590, 530, 510]
                    }
                ]
            }
        }
    }
}
</script>

<template>
    <div>
        <ECharts height="800px" width="800px" :option="option"></ECharts>
        <ECharts height="800px" width="800px" :option="option2"></ECharts>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
}
</style>
