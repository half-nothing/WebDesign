<script setup>
const props = defineProps({
    name: String,
    imgPath: String,
    detail: String,
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
        <div class="detail">
            <span>{{ name }}</span>
            <span>{{ detail }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@style/variable";

div.detail {
    display: flex;
    flex-direction: column;
}

div.detail span:nth-child(1) {
    font-size: $font-size-normal;
    text-align: center;
}

div.detail span:nth-child(2) {
    font-size: $font-size-small;
    text-indent: 2em;
}

</style>