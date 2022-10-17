import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import '@/utils/time';

import './scss/app.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app')
