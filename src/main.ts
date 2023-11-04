import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MazInput from "maz-ui/components/MazInput";
import MazSelect from "maz-ui/components/MazSelect";
import MazIcon from "maz-ui/components/MazInput";
import MazTextarea from "maz-ui/components/MazTextarea";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import QrcodeStream from "vue-qrcode-reader";

createApp(App)
.use(store)
.use(router)
.use(QrcodeStream)
.component("MazPhoneNumberInput", MazPhoneNumberInput)
.component("MazInput", MazInput)
.component("MazIcon", MazIcon)
.component("MazTextarea", MazTextarea)
.component(VueQrcode.name, VueQrcode)
.component("MazSelect", MazSelect)
.mount('#app')

store.subscribe((mutation, state) => {
    // The code inside the curly brackets fires any time a mutation occurs.
    // When a mutation occurs, we'll stringify our entire state object - which
    // contains our todo list. We'll put it in the users localStorage, so that
    // their data will persist even if they refresh the page.
    localStorage.setItem('store', JSON.stringify(state));
})