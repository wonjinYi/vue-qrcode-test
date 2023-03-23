import { createApp } from 'vue'
import App from './App.vue'
import QrReader from 'vue3-qr-reader';

import './assets/main.css'

const app = createApp(App);
app.use(QrReader);
app.mount('#app');
