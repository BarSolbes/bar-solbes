import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap/dist/js/bootstrap.js"
import './assets/main.css'
import '@fullcalendar/core/locales/es'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)


app.mount('#app')
