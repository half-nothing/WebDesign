<script setup>
const props = defineProps({
    name: String,
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
    <div class="equipment-card">
        <img :src="imgPath" v-if="iconHeight === undefined || iconWidth === undefined" alt="">
        <img :src="imgPath" v-else alt="" :style="{height: iconHeight, width: iconWidth}">
        <div class="info">
            <span class="name">{{ name }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.equipment-card {
    display: inline-flex;
    align-items: center;
    margin: 5px;
}

div.info {
    margin-left: 5px;
}
</style>