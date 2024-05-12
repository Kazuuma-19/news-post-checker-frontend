import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import "../node_modules/flowbite-vue/dist/index.css";
import "./assets/index.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
