import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@components/menu/Home.vue";
import HeroInfo from "@components/menu/HeroInfo.vue";
import HeroValue from "@components/menu/HeroValue.vue";
import HeroStrategy from "@components/menu/HeroStrategy.vue";
import HeroRune from "@components/menu/HeroRune.vue";
import HeroStory from "@components/menu/HeroStory.vue";
import Strengths from "@components/menu/Strengths.vue";
import WinRate from "@components/menu/WinRate.vue";
import Login from "@components/menu/Login.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/info",
        name: "HeroInfo",
        component: HeroInfo
    },
    {
        path: "/hero-value",
        name: "HeroValue",
        component: HeroValue
    },
    {
        path: "/hero-strategy",
        name: "HeroStrategy",
        component: HeroStrategy
    },
    {
        path: "/hero-rune",
        name: "HeroRune",
        component: HeroRune
    },
    {
        path: "/hero-story",
        name: "HeroStory",
        component: HeroStory
    },
    {
        path: "/strengths",
        name: "Strengths",
        component: Strengths
    },
    {
        path: "/win-rate",
        name: "WinRate",
        component: WinRate
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
