import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VueParticles from 'vue-particles'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueParticles)
app.mount('#app')
