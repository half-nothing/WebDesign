<script setup>
const props = defineProps({
    name: String,
    nick: {
        type: String,
        required: false
    },
    imgPath: String,
    iconHeight: {
        type: String,
        required: false
    },
    iconWidth: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div class="main">
        <img :src="imgPath" v-if="iconHeight === undefined || iconWidth === undefined" alt="">
        <img :src="imgPath" v-else alt="" :style="{height: iconHeight, width: iconWidth}">
        <div class="info">
            <span class="name">{{ name }}</span>
            <span class="nick" v-if="nick !== undefined">{{ nick }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.main {
    display: inline-flex;
    flex-direction: row;
    margin: 5px;
}

div.info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
}
</style>