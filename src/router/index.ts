import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//将router导入到和这个通用文件
import HomeView from "../views/HomeView.vue";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
