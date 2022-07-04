import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { router } from '@/routers'
import { client } from './utils/graphql'
import { pinia } from './store'
import { i18n } from './utils/i18n'

const app = createApp(App)
app.use(client)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
