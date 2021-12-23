import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseQuote from "./components/ui/BaseQuote.vue";

const app = createApp(App);

app.use(router);

app.component("base-quote", BaseQuote);

app.mount("#app");
