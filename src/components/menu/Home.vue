<script setup>
import Card from "@components/card/Card.vue";
import {useMainStore} from "@/store/index.js";

const mainStore = useMainStore();
const data = [
    {
        id: 1,
        imgPath: "/image/icon/Ashe.webp",
        path: "/icon",
        title: "人物基本信息"
    },
    {
        id: 2,
        imgPath: "/image/icon/Kayle.webp",
        path: "/hero-value",
        title: "人物数值分析"
    },
    {
        id: 3,
        imgPath: "/image/icon/Nilah.webp",
        path: "/hero-strategy",
        title: "人物出装攻略"
    },
    {
        id: 4,
        imgPath: "/image/icon/Sivir.webp",
        path: "/win-rate",
        title: "随时间胜率变化"
    },
    {
        id: 5,
        imgPath: "/image/icon/Tristana.webp",
        path: "/hero-story",
        title: "人物背景故事"
    },
    {
        id: 6,
        imgPath: "/image/icon/Twitch.webp",
        path: "/strengths",
        title: "人物优劣势"
    }
]
</script>

<template>
    <div class="home-page" id="top-home-page">
        <Card height="80%" width="30%" v-for="item in data.slice(0, 3)">
            <div class="card-content">
                <router-link :to="item.path" @click="mainStore.updatePage(item.id)">
                    <img :src="item.imgPath" alt="">
                    <p class="card-title">{{ item.title }}</p>
                </router-link>
            </div>
        </Card>
    </div>
    <div class="home-page" id="bottom-home-page">
        <Card height="80%" width="30%" v-for="item in data.slice(3, 6)">
            <div class="card-content">
                <router-link :to="item.path" @click="mainStore.updatePage(item.id)">
                    <img :src="item.imgPath" alt="">
                    <p class="card-title">{{ item.title }}</p>
                </router-link>
            </div>
        </Card>
    </div>
</template>

<style scoped lang="scss">
@import "@style/variable";

$margin-percent: 10%;
div img {
    height: 100px;
    width: 100px;
}

div.card-content {
    font-size: $font-size-normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

div.card-content a {
    text-decoration: none;
}

div.card-content p {
    color: #000000;
}

div.card-content > img,
div.card-content > p {
    margin: 10px 0;
}

div.home-page {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 100% - $margin-percent;
    //background-color: #cb7474;
}

div#top-home-page {
    margin-right: $margin-percent;
}

div#bottom-home-page {
    margin-left: $margin-percent;
}
</style>