import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Student from "/src/views/Student.vue";
import Result from "/src/views/Result.vue";

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
    {
      path: "/results",
      name: "Result",
      component: Result,
    },
  ],
});

export default router;
