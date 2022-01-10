import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import BaseQuote from "./components/ui/BaseQuote.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

app.component("base-quote", BaseQuote);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
