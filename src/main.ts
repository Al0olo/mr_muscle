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

createApp(App)
.use(store)
.use(router)
.component("MazPhoneNumberInput", MazPhoneNumberInput)
.component("MazInput", MazInput)
.component("MazIcon", MazIcon)
.component("MazTextarea", MazTextarea)
.component(VueQrcode.name, VueQrcode)
.component("MazSelect", MazSelect)
.mount('#app')
