import { createRouter, createWebHistory } from "vue-router";
import Home from "@components/page/home/Home.vue";
import Student from "@components/page/students/Student.vue";
import Result from "@components/page/results/Result.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
