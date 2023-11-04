import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouteRecordSingleView,
} from "vue-router";
import TodoAppView from "../views/TodoAppView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import { useUserStore } from "../stores/user";

let protectedRoutes: RouteRecordRaw[] = [
  {
    path: "/app",
    component: TodoAppView,
    name: "main",
  },
];

const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/login",
    component: LoginViewVue,
    name: "login",
  },
];

const updateProtectedRoutes = (routes: RouteRecordRaw[]) =>
  routes.map((route) => {
    route.meta = {
      requiresAuth: true,
    };
    return route;
  });

const routes = [...updateProtectedRoutes(protectedRoutes), ...publicRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(async (to, _) => {
  if (to.meta.requiresAuth) {
    const userStore = useUserStore();
    const isAuthenticated = await userStore.isAuthenticated();
    return isAuthenticated ? true : "/login";
  }
  return true;
});

export default router;
