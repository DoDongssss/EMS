import "./assets/main.css";
import "./axios";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
