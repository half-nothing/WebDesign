<script setup>
import {useMainStore} from "@/store/index.js";

const mainStore = useMainStore();
const pages = [
    {
        id: 0,
        path: "/",
        name: "主页"
    }, {
        id: 1,
        path: "/icon",
        name: "人物基本信息"
    }, {
        id: 2,
        path: "/hero-value",
        name: "人物数值分析"
    }, {
        id: 3,
        path: "/hero-strategy",
        name: "人物出装攻略"
    }, {
        id: 4,
        path: "/win-rate",
        name: "随时间胜率变化"
    }, {
        id: 5,
        path: "/hero-story",
        name: "人物背景故事"
    }, {
        id: 6,
        path: "/strengths",
        name: "人物优劣势"
    }, {
        id: 7,
        path: "/hero-rune",
        name: "符文模拟"
    }
]

</script>

<template>
    <div class=".container">
        <header class="p-3 text-bg-dark">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li v-for="item in pages">
                        <router-link class="nav-link px-2"
                                     :class="mainStore.nowPage === item.id ? 'text-secondary' : 'text-white'"
                                     :to="item.path"
                                     @click="mainStore.updatePage(item.id)">{{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                           aria-label="Search">
                </form>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
* {
    user-select: none;
}

@media (max-width: 1270px) {
    form {
        display: none;
    }
}
</style>