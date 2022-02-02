import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Download from "../views/Download.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/download/:subreddit/:id",
        name: "Download",
        component: Download,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/help",
        name: "How to Use",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/HowToUse.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
