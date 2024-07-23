<script setup>
let nowPage = 0;
const pages = [
    {
        id: 0,
        path: "/",
        name: "主页"
    }, {
        id: 1,
        path: "/info",
        name: "人物基本信息"
    }, {
        id: 2,
        path: "/force",
        name: "人物武力值分析"
    }, {
        id: 3,
        path: "/knowledge",
        name: "人物学识能力分析"
    }, {
        id: 4,
        path: "/relation",
        name: "人物关系网"
    }, {
        id: 5,
        path: "/compare",
        name: "人物数值对比"
    }, {
        id: 6,
        path: "/scene",
        name: "战斗场景管理"
    }, {
        id: 7,
        path: "/stats",
        name: "战绩"
    },
]

function changePage(page) {
    nowPage = page;
}

</script>

<template>
    <div class=".container">
        <header class="p-3 text-bg-dark">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"/>
                    </svg>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li v-for="item in pages">
                        <router-link class="nav-link px-2"
                                     :class="nowPage === item.id ? 'text-secondary' : 'text-white'"
                                     :to="item.path"
                                     @click="changePage(item.id)">{{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                           aria-label="Search">
                </form>

                <div class="text-end">
                    <router-link class="btn btn-outline-light me-2" to="/login">Login</router-link>
                    <button type="button" class="btn btn-warning">Sign-up</button>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
* {
    user-select: none;
}
</style>