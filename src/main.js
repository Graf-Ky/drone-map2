// src/main.js
import { createApp } from 'vue'
import App from './dronTarget.vue'
import 'maplibre-gl/dist/maplibre-gl.css'
import router from './router'


createApp(App).use(router).mount('#app')