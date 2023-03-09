import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";
import AllUsers from "./pages/AllUsers.vue";
import CourseGoals from "./pages/CourseGoals.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AllUsers,
    },
    {
      path: "/all-users",
      component: AllUsers,
    },
    {
      path: "/course-goals",
      component: CourseGoals,
    },
  ],
});

const app = createApp(App);
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
app.component("base-modal", BaseModal);
