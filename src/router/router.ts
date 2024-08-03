import { createRouter, createWebHistory } from "vue-router";
import Home from "@components/page/Home.vue";
import NewsPostCheckerHome from "@/components/page/news-post-checker/home/NewsPostChecker.vue";
import Student from "@components/page/news-post-checker/students/Student.vue";
import Result from "@components/page/news-post-checker/results/Result.vue";
import GroupMakerHome from "@/components/page/group-maker/home/GroupMaker.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news-post-checker",
    children: [
      {
        path: "",
        name: "NewsPostCheckerHome",
        component: NewsPostCheckerHome,
      },
      {
        path: "students",
        name: "Student",
        component: Student,
      },
      {
        path: "results",
        name: "Result",
        component: Result,
      },
    ],
  },
  {
    path: "/group-maker",
    children: [
      {
        path: "",
        name: "GroupMakerHome",
        component: GroupMakerHome,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
