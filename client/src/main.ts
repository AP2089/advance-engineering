import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import Toast from 'vue-toastification';
import router from '@/router';
import i18n from '@/plugins/i18n';
import App from '@/App.vue';
import '@/assets/styles/main';
import 'vue-toastification/dist/index.css';
import 'vue3-easy-data-table/dist/style.css';

const pinia = createPinia();
const app = createApp(App);

app
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(Toast)
  .component('EasyDataTable', Vue3EasyDataTable)
  .mount('#app');