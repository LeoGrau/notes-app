import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../notes/pages/home-page.vue";
import LoginPage from "../notes/pages/login-page.vue";
import NotesPage from "../notes/pages/notes-page.vue";
import ArchivedPage from "../notes/pages/archived-page.vue"
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
    {
      path: "/notes",
      name: "notes",
      component: NotesPage,
    },
    {
      path: "/archived-notes",
      name: "archived-notes",
      component: ArchivedPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
  ],
});

export default router;
