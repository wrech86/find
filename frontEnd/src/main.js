import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'amfe-flexible'
import './assets/font/font.css'
import './assets/font/black.css'
import 'vant/lib/index.css';
import 'animate.css'


const app = createApp(App)

app.use(Lazyload);
app.use(router)
app.use(Vant);

app.use(store) //要放在前面
app.mount('#app')


