import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap/dist/js/bootstrap.js"
import './assets/main.css'
import '@fullcalendar/core/locales/es'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
