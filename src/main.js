import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

//Saucy Icons
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Primeflex
import "primeflex/primeflex.css";

//Components
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

//My Styles
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, { ripple: true });
app.use(router);

//Components
app.component("pv-input-text", InputText);
app.component("pv-password", Password);
app.component("pv-button", Button);

app.mount("#app");
