import { createRouter, createWebHistory } from "vue-router";
import TodoAppView from "../views/TodoAppView.vue";

const protectedRoutes = [];

const publicRoutes = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Todo",
      component: TodoAppView,
    },
  ],
});

export default router;
