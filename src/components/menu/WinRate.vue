<script setup>
import HeroInfoCard from "@components/card/HeroInfoCard.vue";
import Echarts from "@components/Echarts.vue";

const data = [
    {
        name: "卡莎",
        nick: "虚空之女",
        imgPath: "/image/icon/Kaisa.webp",
        option: {
            title: {
                text: "卡莎胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [51.68, 51.01, 49.72, 48.31],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "伊泽瑞尔",
        nick: "探险家",
        imgPath: "/image/icon/Ezreal.webp",
        option: {
            title: {
                text: "伊泽瑞尔胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [51.42, 50.39, 47.87, 46.25],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "格雷福斯",
        nick: "法外狂徒",
        imgPath: "/image/icon/Graves.webp",
        option: {
            title: {
                text: "格雷福斯胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [48.28, 49.62, 50.75, 50.87],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "李青",
        nick: "盲僧",
        imgPath: "/image/icon/LeeSin.webp",
        option: {
            title: {
                text: "李青胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [48.04, 48.3, 47.79, 47.05],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "厄运小姐",
        nick: "赏金猎人",
        imgPath: "/image/icon/MissFortune.webp",
        option: {
            title: {
                text: "厄运小姐胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [50.67, 51.15, 51.05, 51.95],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "亚托克斯",
        nick: "暗裔剑魔",
        imgPath: "/image/icon/Aatrox.webp",
        option: {
            title: {
                text: "亚托克斯胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [46.03, 47.49, 49.31, 49.91],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    },
    {
        name: "卢锡安",
        nick: "圣枪游侠",
        imgPath: "/image/icon/Lucian.webp",
        option: {
            title: {
                text: "卢锡安胜率随时间变化折线图"
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}min : {c}%'
            },
            xAxis: {
                type: 'category',
                data: ['0-25', '25-30', '30-35', '>35']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [47.98, 48.41, 49.62, 50.53],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
        }
    }
]
</script>

<template>
    <div class="main">
        <HeroInfoCard v-for="item in data" width="400px" :hero-name="item.name" :hero-nick="item.nick"
                      :img-path="item.imgPath"
                      :mark="item.mark">
            <Echarts width="400px" height="400px" :option="item.option"></Echarts>
        </HeroInfoCard>
    </div>
</template>

<style scoped lang="scss">
div.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>