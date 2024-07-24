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
                text: "近版本卡莎登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 29.32, 50.56],
                    ['14.12', 36.05, 50.92],
                    ['14.13', 36, 50.55],
                    ['14.14', 35.51, 50.64]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "伊泽瑞尔",
        nick: "探险家",
        imgPath: "/image/icon/Ezreal.webp",
        option: {
            title: {
                text: "近版本伊泽瑞尔登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 9.18, 46.25],
                    ['14.12', 19.56, 49.39],
                    ['14.13', 26.09, 49.53],
                    ['14.14', 28.3, 49.27]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "格雷福斯",
        nick: "法外狂徒",
        imgPath: "/image/icon/Graves.webp",
        option: {
            title: {
                text: "近版本格雷福斯登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 15.8, 49.32],
                    ['14.12', 15.5, 49.32],
                    ['14.13', 15.34, 49.76],
                    ['14.14', 14.55, 49.46]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "李青",
        nick: "盲僧",
        imgPath: "/image/icon/LeeSin.webp",
        option: {
            title: {
                text: "近版本李青登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 14.46, 46.87],
                    ['14.12', 14.05, 46.96],
                    ['14.13', 15.82, 47.95],
                    ['14.14', 15.28, 48.47]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "厄运小姐",
        nick: "赏金猎人",
        imgPath: "/image/icon/MissFortune.webp",
        option: {
            title: {
                text: "近版本厄运小姐登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 9.72, 50.41],
                    ['14.12', 9.65, 49.29],
                    ['14.13', 15.75, 51.24],
                    ['14.14', 17.74, 51.06]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "亚托克斯",
        nick: "暗裔剑魔",
        imgPath: "/image/icon/Aatrox.webp",
        option: {
            title: {
                text: "近版本亚托克斯登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 14.48, 47.44],
                    ['14.12', 16.52, 47.87],
                    ['14.13', 15.29, 47.88],
                    ['14.14', 16.48, 47.98]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "锤石",
        nick: "魂锁典狱长",
        imgPath: "/image/icon/Thresh.webp",
        option: {
            title: {
                text: "近版本锤石登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 17, 49.16],
                    ['14.12', 16.69, 49.34],
                    ['14.13', 16.05, 48.99],
                    ['14.14', 15.8, 49.5]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "卢锡安",
        nick: "圣枪游侠",
        imgPath: "/image/icon/Lucian.webp",
        option: {
            title: {
                text: "近版本卢锡安登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 19.16, 49.01],
                    ['14.12', 16.99, 48.9],
                    ['14.13', 14.5, 48.81],
                    ['14.14', 13.69, 49.32]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "布兰德",
        nick: "复仇焰魂",
        imgPath: "/image/icon/Brand.webp",
        option: {
            title: {
                text: "近版本布兰德登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 6.8, 51.55],
                    ['14.12', 7.13, 51.72],
                    ['14.13', 7.32, 51.67],
                    ['14.14', 7.53, 51.33]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    },
    {
        name: "拉克丝",
        nick: "光辉女郎",
        imgPath: "/image/icon/Lux.webp",
        option: {
            title: {
                text: "近版本拉克丝登场率及胜率",
                textStyle: {
                    color: "#0acbbb"
                }
            },
            tooltip: {},
            legend: {
                top: "bottom",
                padding: 10,
                textStyle: {
                    color: "#000000"
                }
            },
            color: ["#7186c6", "#9cdb7e"],
            dataset: {
                source: [
                    ['位置', '登场率', '胜率'],
                    ['14.11', 11.86, 49.73],
                    ['14.12', 11.82, 49.46],
                    ['14.13', 12.11, 49.03],
                    ['14.14', 11.91, 49.4]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [{type: 'bar'}, {type: 'bar'}]
        }
    }
]

</script>

<template>
    <div class="main">
        <HeroInfoCard v-for="item in data" width="400px" :hero-name="item.name" :hero-nick="item.nick"
                      :img-path="item.imgPath" :mark="item.mark">
            <Echarts width="400px" height="400px" :option="item.option"></Echarts>
        </HeroInfoCard>
    </div>
</template>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}
</style>