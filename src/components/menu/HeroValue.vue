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
                text: '卡莎属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 3, 5, 6]
                        }
                    ],
                    label: {
                        show: true
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
                text: '伊泽瑞尔属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [7, 6, 2, 7]
                        }
                    ],
                    label: {
                        show: true
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
                text: '格雷福斯属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 3, 5, 4]
                        }
                    ],
                    label: {
                        show: true
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
                text: '李青属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 3, 5, 6]
                        }
                    ],
                    label: {
                        show: true
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
                text: '厄运小姐属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 5, 2, 1]
                        }
                    ],
                    label: {
                        show: true
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
                text: '亚托克斯属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 3, 4, 4]
                        }
                    ],
                    label: {
                        show: true
                    }
                }
            ]
        }
    },
    {
        name: "锤石",
        nick: "魂锁典狱长",
        imgPath: "/image/icon/Thresh.webp",
        option: {
            title: {
                text: '锤石属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [5, 6, 6, 7]
                        }
                    ],
                    label: {
                        show: true
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
                text: '卢锡安属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [8, 3, 5, 6]
                        }
                    ],
                    label: {
                        show: true
                    }
                }
            ]
        }
    },
    {
        name: "布兰德",
        nick: "复仇焰魂",
        imgPath: "/image/icon/Brand.webp",
        option: {
            title: {
                text: '布兰德属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [2, 9, 2, 4]
                        }
                    ],
                    label: {
                        show: true
                    }
                }
            ]
        }
    },
    {
        name: "拉克丝",
        nick: "光辉女郎",
        imgPath: "/image/icon/Lux.webp",
        option: {
            title: {
                text: '拉克丝属性分析'
            },
            radar: {
                indicator: [
                    {name: '物理攻击', max: 10},
                    {name: '魔法攻击', max: 10},
                    {name: '防御能力', max: 10},
                    {name: '上手难度', max: 10}
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [2, 9, 4, 6]
                        }
                    ],
                    label: {
                        show: true
                    }
                }
            ]
        }
    }
]
</script>

<template>
    <div class="main">
        <HeroInfoCard v-for="item in data"
                      width="450px" :hero-name="item.name" :hero-nick="item.nick" :img-path="item.imgPath"
                      :mark="item.mark">
            <Echarts width="500px" height="500px" :option="item.option"></Echarts>
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