<script setup>
import HeroCard from "@components/card/HeroCard.vue";

const props = defineProps({
    width: String,
    height: String,
    imgPath: String,
    heroName: String,
    heroNick: String,
    flexCard: {
        type: Boolean,
        required: false
    }
});

</script>

<template>
    <div class="hero-card" :class="{'flex-card': flexCard}">
        <HeroCard icon-height="100px" icon-width="100px" :img-path="imgPath" :name="heroName"
                  :nick="heroNick"></HeroCard>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
div.flex-card {
    display: flex;
    flex-direction: row;
}

div.hero-card {
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #5d5d5d;
    margin: 5px;
}
</style>