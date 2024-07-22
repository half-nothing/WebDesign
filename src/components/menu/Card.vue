<script setup>

</script>

<script>
export default {
    props: ['width', 'height']
}
</script>

<template>
    <div :style="{width: width, height: height}">
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    margin: 0 25px;
    border: 2px solid #738bbd;
    box-shadow: 2px 2px 2px #67b7e4;
    border-radius: 5px;
    background-color: #314e8085;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>