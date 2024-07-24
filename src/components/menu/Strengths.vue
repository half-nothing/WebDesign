<script setup>
import HeroCard from "@components/card/HeroCard.vue";

const data = [
    {
        "name": "卡莎",
        "nick": "虚空之女",
        "imgPath": "/image/icon/Kaisa.webp",
        "advantage": [
            {
                "name": "皮城女警",
                "imgPath": "/image/icon/Caitlyn.webp",
                "winRate": "53.15%"
            },
            {
                "name": "复仇之矛",
                "imgPath": "/image/icon/Kalista.webp",
                "winRate": "53.01%"
            },
            {
                "name": "麦林炮手",
                "imgPath": "/image/icon/Tristana.webp",
                "winRate": "52.95%"
            },
            {
                "name": "惩戒之箭",
                "imgPath": "/image/icon/Varus.webp",
                "winRate": "52.89%"
            },
            {
                "name": "爆破鬼才",
                "imgPath": "/image/icon/Ziggs.webp",
                "winRate": "52.72%"
            }
        ],
        "disadvantaged": [
            {
                "name": "不羁之悦",
                "imgPath": "/image/icon/Nilah.webp",
                "winRate": "44.96%"
            },
            {
                "name": "寒冰射手",
                "imgPath": "/image/icon/Ashe.webp",
                "winRate": "49.05%"
            },
            {
                "name": "赏金猎人",
                "imgPath": "/image/icon/MissFortune.webp",
                "winRate": "49.32%"
            },
            {
                "name": "祖安花火",
                "imgPath": "/image/icon/Zeri.webp",
                "winRate": "49.34%"
            },
            {
                "name": "瘟疫之源",
                "imgPath": "/image/icon/Twitch.webp",
                "winRate": "49.68%"
            }
        ]
    },
    {
        "name": "伊泽瑞尔",
        "nick": "探险家",
        "imgPath": "/image/icon/Ezreal.webp",
        "advantage": [
            {
                "name": "荣耀行刑官",
                "imgPath": "/image/icon/Draven.webp",
                "winRate": "52.6%"
            },
            {
                "name": "惩戒之箭",
                "imgPath": "/image/icon/Varus.webp",
                "winRate": "52.59%"
            },
            {
                "name": "残月之肃",
                "imgPath": "/image/icon/Aphelios.webp",
                "winRate": "52.49%"
            },
            {
                "name": "皮城女警",
                "imgPath": "/image/icon/Caitlyn.webp",
                "winRate": "52.29%"
            },
            {
                "name": "沙漠玫瑰",
                "imgPath": "/image/icon/Samira.webp",
                "winRate": "51.38%"
            }
        ],
        "disadvantaged": [
            {
                "name": "不羁之悦",
                "imgPath": "/image/icon/Nilah.webp",
                "winRate": "47.81%"
            },
            {
                "name": "瘟疫之源",
                "imgPath": "/image/icon/Twitch.webp",
                "winRate": "48.25%"
            },
            {
                "name": "虚空之女",
                "imgPath": "/image/icon/Kaisa.webp",
                "winRate": "48.35%"
            },
            {
                "name": "寒冰射手",
                "imgPath": "/image/icon/Ashe.webp",
                "winRate": "48.65%"
            },
            {
                "name": "戏命师",
                "imgPath": "/image/icon/Jhin.webp",
                "winRate": "49.01%"
            }
        ]
    },
    {
        "name": "格雷福斯",
        "nick": "法外狂徒",
        "imgPath": "/image/icon/Graves.webp",
        "advantage": [
            {
                "name": "傲之追猎者",
                "imgPath": "/image/icon/Rengar.webp",
                "winRate": "54.34%"
            },
            {
                "name": "战争之影",
                "imgPath": "/image/icon/Hecarim.webp",
                "winRate": "53.71%"
            },
            {
                "name": "披甲龙龟",
                "imgPath": "/image/icon/Rammus.webp",
                "winRate": "53.11%"
            },
            {
                "name": "酒桶",
                "imgPath": "/image/icon/Gragas.webp",
                "winRate": "52.93%"
            },
            {
                "name": "北地之怒",
                "imgPath": "/image/icon/Sejuani.webp",
                "winRate": "52.91%"
            }
        ],
        "disadvantaged": [
            {
                "name": "无双剑姬",
                "imgPath": "/image/icon/Fiora.webp",
                "winRate": "43.97%"
            },
            {
                "name": "腕豪",
                "imgPath": "/image/icon/Sett.webp",
                "winRate": "44.79%"
            },
            {
                "name": "青钢影",
                "imgPath": "/image/icon/Camille.webp",
                "winRate": "44.79%"
            },
            {
                "name": "祖安狂人",
                "imgPath": "/image/icon/DrMundo.webp",
                "winRate": "45.32%"
            },
            {
                "name": "远古恐惧",
                "imgPath": "/image/icon/FiddleSticks.webp",
                "winRate": "45.36%"
            }
        ]
    },
    {
        "name": "李青",
        "nick": "盲僧",
        "imgPath": "/image/icon/LeeSin.webp",
        "advantage": [
            {
                "name": "北地之怒",
                "imgPath": "/image/icon/Sejuani.webp",
                "winRate": "53.2%"
            },
            {
                "name": "雪原双子",
                "imgPath": "/image/icon/Nunu.webp",
                "winRate": "52.2%"
            },
            {
                "name": "战争之影",
                "imgPath": "/image/icon/Hecarim.webp",
                "winRate": "51.88%"
            },
            {
                "name": "熔岩巨兽",
                "imgPath": "/image/icon/Malphite.webp",
                "winRate": "51.88%"
            }
        ],
        "disadvantaged": [
            {
                "name": "青钢影",
                "imgPath": "/image/icon/Camille.webp",
                "winRate": "42.78%"
            },
            {
                "name": "迅捷斥候",
                "imgPath": "/image/icon/Teemo.webp",
                "winRate": "43.1%"
            },
            {
                "name": "含羞蓓蕾",
                "imgPath": "/image/icon/Lillia.webp",
                "winRate": "43.12%"
            },
            {
                "name": "腕豪",
                "imgPath": "/image/icon/Sett.webp",
                "winRate": "43.24%"
            },
            {
                "name": "暗裔剑魔",
                "imgPath": "/image/icon/Aatrox.webp",
                "winRate": "43.81%"
            }
        ]
    },
    {
        "name": "厄运小姐",
        "nick": "赏金猎人",
        "imgPath": "/image/icon/MissFortune.webp",
        "advantage": [
            {
                "name": "麦林炮手",
                "imgPath": "/image/icon/Tristana.webp",
                "winRate": "54.94%"
            },
            {
                "name": "惩戒之箭",
                "imgPath": "/image/icon/Varus.webp",
                "winRate": "54.65%"
            },
            {
                "name": "残月之肃",
                "imgPath": "/image/icon/Aphelios.webp",
                "winRate": "54.64%"
            },
            {
                "name": "荣耀行刑官",
                "imgPath": "/image/icon/Draven.webp",
                "winRate": "54.58%"
            },
            {
                "name": "暗夜猎手",
                "imgPath": "/image/icon/Vayne.webp",
                "winRate": "53.96%"
            }
        ],
        "disadvantaged": [
            {
                "name": "不羁之悦",
                "imgPath": "/image/icon/Nilah.webp",
                "winRate": "47.46%"
            },
            {
                "name": "战争女神",
                "imgPath": "/image/icon/Sivir.webp",
                "winRate": "49.77%"
            },
            {
                "name": "暴走萝莉",
                "imgPath": "/image/icon/Jinx.webp",
                "winRate": "49.85%"
            },
            {
                "name": "戏命师",
                "imgPath": "/image/icon/Jhin.webp",
                "winRate": "49.9%"
            },
            {
                "name": "炽炎雏龙",
                "imgPath": "/image/icon/Smolder.webp",
                "winRate": "49.05%"
            }
        ]
    },
    {
        "name": "亚托克斯",
        "nick": "暗裔剑魔",
        "imgPath": "/image/icon/Aatrox.webp",
        "advantage": [
            {
                "name": "诡术妖姬",
                "imgPath": "/image/icon/Leblanc.webp",
                "winRate": "55.98%"
            },
            {
                "name": "疾风剑豪",
                "imgPath": "/image/icon/Yasuo.webp",
                "winRate": "55.71%"
            },
            {
                "name": "迅捷斥候",
                "imgPath": "/image/icon/Teemo.webp",
                "winRate": "53.23%"
            },
            {
                "name": "酒桶",
                "imgPath": "/image/icon/Gragas.webp",
                "winRate": "53.05%"
            },
            {
                "name": "未来守护者",
                "imgPath": "/image/icon/Jayce.webp",
                "winRate": "52.73%"
            }
        ],
        "disadvantaged": [
            {
                "name": "暗夜猎手",
                "imgPath": "/image/icon/Vayne.webp",
                "winRate": "47.46%"
            },
            {
                "name": "祖安怒兽",
                "imgPath": "/image/icon/Warwick.webp",
                "winRate": "44.62%"
            },
            {
                "name": "巨魔之王",
                "imgPath": "/image/icon/Trundle.webp",
                "winRate": "44.7%"
            },
            {
                "name": "解脱者",
                "imgPath": "/image/icon/Sylas.webp",
                "winRate": "45%"
            },
            {
                "name": "正义天使",
                "imgPath": "/image/icon/Kayle.webp",
                "winRate": "45.34%"
            }
        ]
    },
    {
        "name": "卢锡安",
        "nick": "圣枪游侠",
        "imgPath": "/image/icon/Lucian.webp",
        "advantage": [
            {
                "name": "复仇之矛",
                "imgPath": "/image/icon/Kalista.webp",
                "winRate": "53.7%"
            },
            {
                "name": "惩戒之箭",
                "imgPath": "/image/icon/Varus.webp",
                "winRate": "52.57%"
            },
            {
                "name": "爆破鬼才",
                "imgPath": "/image/icon/Ziggs.webp",
                "winRate": "51.6%"
            },
            {
                "name": "残月之肃",
                "imgPath": "/image/icon/Aphelios.webp",
                "winRate": "51.6%"
            },
            {
                "name": "麦林炮手",
                "imgPath": "/image/icon/Tristana.webp",
                "winRate": "51.36%"
            }
        ],
        "disadvantaged": [
            {
                "name": "深渊巨口",
                "imgPath": "/image/icon/KogMaw.webp",
                "winRate": "46.26%"
            },
            {
                "name": "暴走萝莉",
                "imgPath": "/image/icon/Jinx.webp",
                "winRate": "46.76%"
            },
            {
                "name": "不羁之悦",
                "imgPath": "/image/icon/Nilah.webp",
                "winRate": "47.7%"
            },
            {
                "name": "寒冰射手",
                "imgPath": "/image/icon/Ashe.webp",
                "winRate": "47.6%"
            },
            {
                "name": "赏金猎人",
                "imgPath": "/image/icon/MissFortune.webp",
                "winRate": "48.09%"
            }
        ]
    }
]
</script>

<template>
    <div class="strengths">
        <div class="info" v-for="item in data">
            <HeroCard :img-path="item.imgPath" :name="item.name" :nick="item.nick"></HeroCard>
            <div class="win-rate">
                <div class="advantage">
                    <span>优</span>
                    <HeroCard icon-height="50px" icon-width="50px" v-for="item in item.advantage"
                              :img-path="item.imgPath" :name="item.name" :nick="item.winRate"></HeroCard>
                </div>
                <div class="disadvantaged">
                    <span>劣</span>
                    <HeroCard icon-height="50px" icon-width="50px" v-for="item in item.disadvantaged"
                              :img-path="item.imgPath" :name="item.name" :nick="item.winRate"></HeroCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@style/variable";

div.strengths {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 100px;
    height: 100px;
}

div.info {
    display: inline-flex;
    flex-direction: row;
    border: 2px solid #738bbd;
    box-shadow: 2px 2px 2px #67b7e4;
    border-radius: 5px;
    margin: 5px;
}

div.win-rate {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

div.advantage {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}

div.advantage span,
div.disadvantaged span {
    font-size: $font-size-normal;
    margin: 5px;
    border-radius: 10px;
    height: 50px;
    width: 50px;
    text-align: center;
}

div.advantage span {
    background-color: #1faeee;
}

div.disadvantaged span {
    background-color: #eb7868;
}

div.disadvantaged {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}


</style>