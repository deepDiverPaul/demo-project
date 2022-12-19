import { createApp } from 'vue';
import AppScss from '@/scss';
import { rootStore } from './store';
import router from './router';
import App from './App.vue';

createApp(App)
  .use(rootStore)
  .use(router)
  .use(AppScss)
  .mount('#app');
