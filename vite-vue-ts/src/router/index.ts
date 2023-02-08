import {createRouter, createWebHistory} from "vue-router";
import Main from "@/layout/Main.vue";
import Home from "@/page/main/Home.vue";
import Community from "@/page/main/Community.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: Home
                },
                {
                    path: "/community",
                    name: 'community',
                    component: Community
                }
            ]
        },
    ]

});
export default router