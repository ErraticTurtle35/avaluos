import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

import router from "./router";

import "./assets/main.css";
import "primevue/resources/themes/saga-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
// eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
app.component("InputText", InputText);
// eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
app.component("Button", Button);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Password", Password);
app.mount("#app");
