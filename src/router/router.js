import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Student from "/src/views/Student.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/students",
      name: "Student",
      component: Student,
    },
  ],
});

export default router;
