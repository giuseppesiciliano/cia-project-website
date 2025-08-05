import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. IMPORTA IL ROUTER
import './assets/styles/main.scss'

import './assets/css/fonts.css'


const app = createApp(App)

app.use(router) // 2. USA IL ROUTER

app.mount('#app')