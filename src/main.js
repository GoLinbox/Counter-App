import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router'
import store from './Store/store'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

// Mounting the Vuex store and Vue Router instance to the app
app.use(store)
app.use(router)

// Mounting the app to the DOM
app.mount('#app')

