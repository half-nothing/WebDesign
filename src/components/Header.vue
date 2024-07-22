<script setup>
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
                    <li><router-link class="nav-link px-2 text-secondary" to="/">主页</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/info">人物基本信息</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/force">人物武力值分析</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/knowledge">人物学识能力分析</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/relation">人物关系网</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/compare">人物数值对比</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/scene">战斗场景管理</router-link></li>
                    <li><router-link class="nav-link px-2 text-white" to="/stats">战绩</router-link></li>
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