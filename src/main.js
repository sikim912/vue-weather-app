import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/store.js'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//fontawesomeライブライを使うためのimport
//URL : https://docs.fontawesome.com/web/use-with/vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//使うアイコンをimport
//faBarsStaggered :トグルボタン、faLocationDot: 地図ボタン
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 

//アイコンを登録
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
//storeを登録
.use(store)
//routerを登録
.use(router)
//fontawesomeライブライをappに登録する
.component( 'font-awesome-icon', FontAwesomeIcon)
.mount('#app')