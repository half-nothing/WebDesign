import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@components/menu/Home.vue";
import Info from "@components/menu/Info.vue";
import Force from "@components/menu/Force.vue";
import Knowledge from "@components/menu/Knowledge.vue";
import Relation from "@components/menu/Relation.vue";
import Compare from "@components/menu/Compare.vue";
import Scene from "@components/menu/Scene.vue";
import Stats from "@components/menu/Stats.vue";
import Login from "@components/menu/Login.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/info",
        name: "Info",
        component: Info
    },
    {
        path: "/force",
        name: "Force",
        component: Force
    },
    {
        path: "/knowledge",
        name: "Knowledge",
        component: Knowledge
    },
    {
        path: "/relation",
        name: "Relation",
        component: Relation
    },
    {
        path: "/compare",
        name: "Compare",
        component: Compare
    },
    {
        path: "/scene",
        name: "Scene",
        component: Scene
    },
    {
        path: "/stats",
        name: "Stats",
        component: Stats
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
