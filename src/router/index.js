import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../notes/pages/login-page.vue";
import Sketch from "../notes/pages/sketch-vue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/sketch",
      name: "sketch",
      component: Sketch,
    },
  ],
});

export default router;
