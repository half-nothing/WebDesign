<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import * as echarts from 'echarts';

const props = defineProps({
    width: String,
    height: String,
    option: Object
})
const chartDom = ref();
let myChart = null;

const resize = () => {
    myChart.resize()
}

onMounted(() => {
    myChart = echarts.init(chartDom.value, null, {renderer: 'svg'});
    myChart.setOption(props.option, true);
    window.addEventListener('resize', resize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
    myChart.dispose();
});

watch(() => props.option, () => {
    myChart.setOption(props.option, true)
});

</script>

<template>
    <div ref="chartDom" :style="{width: width, height: height}"></div>
</template>

<style scoped lang="scss">

</style>