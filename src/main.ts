import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import { createPinia } from "pinia";
import "virtual:windi.css";

const app = createApp(App);
app.use(Router);
app.use(createPinia());
app.mount("#app");
