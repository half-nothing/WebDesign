import 'bootstrap/dist/css/bootstrap.css';
import '@style/style.scss';

import {createApp} from 'vue';
import App from '@/App.vue';
import i18n from "@/i18n/index.js";
import router from "@/router/index.js";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
