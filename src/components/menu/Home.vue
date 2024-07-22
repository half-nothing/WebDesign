<script setup>
import Card from "@components/menu/Card.vue";
</script>

<template>
    <div class="home-page" id="top-home-page">
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">人物基本信息</p>
            </div>
        </Card>
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">人物武力值分析</p>
            </div>
        </Card>
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">人物学识能力分析</p>
            </div>
        </Card>
    </div>
    <div class="home-page" id="bottom-home-page">
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">人物关系网</p>
            </div>
        </Card>
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">人物数值对比</p>
            </div>
        </Card>
        <Card height="80%" width="30%">
            <div class="card-content">
                <img src="" alt="">
                <p class="card-title">战斗场景管理</p>
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