import {createRouter, createWebHistory} from 'vue-router'
import MainComp from '../components/MainComp.vue'
import About from '../components/About.vue'

//route関係の定義
const routes = [
    { path: '/', component: MainComp },
    { path: '/about', component: About }
]

//routerの生成
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router