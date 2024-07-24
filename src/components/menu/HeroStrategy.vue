<script setup>
import HeroInfoCard from "@components/card/HeroInfoCard.vue";
import EquipmentCard from "@components/card/EquipmentCard.vue";

const data = [
    {
        "name": "虚空之女",
        "shunt": "下路",
        "imgPath": "/image/icon/Kaisa.webp",
        "unloading": [
            {
                "name": "斯塔提克电刃",
                "imgPath": "/image/equipment/电刀.png"
            },
            {
                "name": "无尽之刃",
                "imgPath": "/image/equipment/无尽之刃.png"
            },
            {
                "name": "法师大权杖",
                "imgPath": "./image/equipment/法师大权.png"
            },
            {
                "name": "封天之刃",
                "imgPath": "/image/equipment/封天之刃.png"
            },
            {
                "name": "复活甲",
                "imgPath": "./image/equipment/复活甲.png"
            },
            {
                "name": "攻速鞋",
                "imgPath": "./image/equipment/攻速鞋.png"
            }
        ],
        "winRate": "48%",
        "appearanceRate": "18%"
    },
    {
        "name": "探险家",
        "shunt": "下路",
        "imgPath": "/image/icon/Ezreal.webp",
        "unloading": [
            {
                "name": "攻速鞋",
                "imgPath": "/image/equipment/攻速鞋.png"
            },
            {
                "name": "公里圆弧",
                "imgPath": "/image/equipment/公里圆弧.png"
            },
            {
                "name": "狂妄",
                "imgPath": "./image/equipment/狂妄.png"
            },
            {
                "name": "斯塔提克电刃",
                "imgPath": "/image/equipment/电刀.png"
            },
            {
                "name": "毁灭之刃",
                "imgPath": "/image/equipment/毁灭之刃.png"
            },
            {
                "name": "灭日之弓",
                "imgPath": "/image/equipment/灭日之弓.png"
            }
        ],
        "winRate": " 55%",
        "appearanceRate": "26%"
    },
    {
        "name": "法外狂徒",
        "shunt": "打野",
        "imgPath": "/image/icon/Graves.webp",
        "unloading": [
            {
                "name": "无尽之刃",
                "imgPath": "./image/equipment/无尽之刃.png"
            },
            {
                "name": "毁灭之刃",
                "imgPath": "/image/equipment/毁灭之刃.png"
            },
            {
                "name": "公里圆弧",
                "imgPath": "/image/equipment/公里圆弧.png"
            },
            {
                "name": "狂妄",
                "imgPath": "/image/equipment/狂妄.png"
            },
            {
                "name": "多米可领主的敬意",
                "imgPath": "/image/equipment/多米可领主的敬意.png"
            },
            {
                "name": "封天之刃",
                "imgPath": "/image/equipment/封天之刃.png"
            }
        ],
        "winRate": "68%",
        "appearanceRate": "66%"
    },
    {
        "name": "李青",
        "shunt": "打野",
        "imgPath": "/image/icon/LeeSin.webp",
        "unloading": [
            {
                "name": "星蚀",
                "imgPath": "/image/equipment/星蚀.png"
            },
            {
                "name": "无敌转头",
                "imgPath": "./image/equipment/无敌转头.png"
            },
            {
                "name": "亵渎九头蛇",
                "imgPath": "/image/equipment/亵渎九头蛇.png"
            },
            {
                "name": "斯塔提克电刃",
                "imgPath": "/image/equipment/电刀.png"
            },
            {
                "name": "月牙湾刀",
                "imgPath": "/image/equipment/月牙湾刀.png"
            },
            {
                "name": "黑切",
                "imgPath": "/image/equipment/黑切.png"
            }
        ],
        "winRate": "97%",
        "appearanceRate": "54%"
    },
    {
        "name": "赏金猎人",
        "shunt": "下路",
        "imgPath": "/image/icon/MissFortune.webp",
        "unloading": [
            {
                "name": "斯塔提克电刃",
                "imgPath": "/image/equipment/电刀.png"
            },
            {
                "name": "羊刀",
                "imgPath": "/image/equipment/羊刀.png"
            },
            {
                "name": "迅捷之刃",
                "imgPath": "/image/equipment/迅捷之刃.png"
            },
            {
                "name": "痛苦的折磨",
                "imgPath": "/image/equipment/痛苦的折磨.png"
            },
            {
                "name": "月牙湾刀",
                "imgPath": "/image/equipment/月牙湾刀.png"
            },
            {
                "name": "复活甲",
                "imgPath": "/image/equipment/复活甲.png"
            }
        ],
        "winRate": "22%",
        "appearanceRate": "59%"
    },
    {
        "name": "亚科托斯",
        "shunt": "上单",
        "imgPath": "/image/icon/Aatrox.webp",
        "unloading": [
            {
                "name": "亵渎九头蛇",
                "imgPath": "/image/equipment/亵渎九头蛇.png"
            },
            {
                "name": "梵天",
                "imgPath": "/image/equipment/梵天.png"
            },
            {
                "name": "黑切",
                "imgPath": "/image/equipment/黑切.png"
            },
            {
                "name": "狂妄",
                "imgPath": " /image/equipment/狂妄.png"
            },
            {
                "name": "冷静之靴",
                "imgPath": "/image/equipment/冷静之靴.png"
            },
            {
                "name": "三相之力",
                "imgPath": "/image/equipment/三相之力.png"
            }
        ],
        "winRate": "78%",
        "appearanceRate": "62%"
    },
    {
        "name": "魂锁典狱长",
        "shunt": "辅助",
        "imgPath": "/image/icon/Thresh.webp",
        "unloading": [
            {
                "name": "冰心",
                "imgPath": "/image/equipment/冰心.png"
            },
            {
                "name": "布甲鞋",
                "imgPath": "/image/equipment/布甲鞋.png"
            },
            {
                "name": "日炎",
                "imgPath": "/image/equipment/日炎.png"
            },
            {
                "name": "骑士的誓言",
                "imgPath": "/image/equipment/骑士的誓言.png"
            },
            {
                "name": "守护者铠甲",
                "imgPath": "/image/equipment/守护者铠甲.png"
            },
            {
                "name": "神盾",
                "imgPath": "/image/equipment/神盾.png"
            }
        ],
        "winRate": "72%",
        "appearanceRate": "33%"
    },
    {
        "name": "圣枪游侠",
        "shunt": "下路",
        "imgPath": "/image/icon/Lucian.webp",
        "unloading": [
            {
                "name": "斯塔提克电刃",
                "imgPath": "/image/equipment/电刀.png"
            },
            {
                "name": "收集者",
                "imgPath": "/image/equipment/收集者.png"
            },
            {
                "name": "灭日之弓",
                "imgPath": "/image/equipment/灭日之弓.png"
            },
            {
                "name": "无尽之刃",
                "imgPath": "/image/equipment/无尽之刃.png"
            },
            {
                "name": "月牙湾刀",
                "imgPath": "/image/equipment/月牙湾刀.png"
            },
            {
                "name": "饮血剑",
                "imgPath": "/image/equipment/饮血剑.png"
            }
        ],
        "winRate": "88%",
        "appearanceRate": "45%"
    },
    {
        "name": "复仇焰魂",
        "shunt": "法师、中路",
        "imgPath": "/image/icon/Brand.webp",
        "unloading": [
            {
                "name": "灭世者之帽",
                "imgPath": "/image/equipment/灭世者之帽.png"
            },
            {
                "name": "耀光",
                "imgPath": "/image/equipment/耀光.png"
            },
            {
                "name": "卢登的回声",
                "imgPath": "/image/equipment/卢登的回音.png"
            },
            {
                "name": "痛苦的折磨",
                "imgPath": "/image/equipment/痛苦的折磨.png"
            },
            {
                "name": "冷静之靴",
                "imgPath": "/image/equipment/冷静之靴.png"
            },
            {
                "name": "法师大权杖",
                "imgPath": "/image/equipment/法师大权.png"
            }
        ],
        "winRate": "32%",
        "appearanceRate": "19%"
    },
    {
        "name": "光辉女郎",
        "shunt": "辅助",
        "imgPath": "/image/icon/Lux.webp",
        "unloading": [
            {
                "name": "冷静之靴",
                "imgPath": "/image/equipment/冷静之靴.png"
            },
            {
                "name": "金身",
                "imgPath": "/image/equipment/金身.png"
            },
            {
                "name": "法穿棒",
                "imgPath": "/image/equipment/法穿鞋.png"
            },
            {
                "name": "法师大权杖",
                "imgPath": "/image/equipment/法师大权.png"
            },
            {
                "name": "耀光",
                "imgPath": "/image/equipment/耀光.png"
            },
            {
                "name": "那色之牙",
                "imgPath": "/image/equipment/那色之牙.png"
            }
        ],
        "winRate": "44%",
        "appearanceRate": "33%"
    }
]

</script>

<template>
    <div class="main">
        <HeroInfoCard v-for="item in data" width="200px" :img-path="item.imgPath" :hero-name="item.name"
                      :hero-nick="item.shunt" :flex-card="true">
            <div class="equipment">
                <EquipmentCard v-for="i in item.unloading" :img-path="i.imgPath" icon-height="50px" icon-width="50px"
                               :name="i.name">
                </EquipmentCard>
            </div>
            <div class="rate">
                <span>胜率: {{ item.winRate }}</span>
                <span>出场率: {{ item.appearanceRate }}</span>
            </div>
        </HeroInfoCard>
    </div>
</template>

<style scoped lang="scss">
div.rate {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

div.rate span {
    margin: 10px;
}

div.main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

div.equipment {
    display: flex;
    flex-direction: row;
    width: 900px;
}
</style>