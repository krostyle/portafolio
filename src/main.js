import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3SmoothScroll from 'vue3-smooth-scroll'
import './assets/styles/tailwind.css'

createApp(App).use(store).use(router).use(Vue3SmoothScroll, {
    offset: -90,
}).mount('#app')