import { createApp } from 'vue'
import App from './App.vue';
import {createRouter, createWebHashHistory} from "vue-router";
import ItemList from "./components/ItemList.vue"
import LoginVue from './components/Login.vue';
import SignUpVue from './components/SignUp.vue';
import Checkout from "./components/Checkout.vue";



import Home from './components/Home.vue';

const myComponentRoutes = [
  { path: '/', component: Home },
  { path: '/itemlist', component: ItemList },
  { path: '/login', component: LoginVue},
  { path: '/signup', component: SignUpVue },
  { path: '/checkout', component: Checkout },
];


const myRouter = createRouter({routes: myComponentRoutes, history: createWebHashHistory()});

createApp(App)
    .use(myRouter)
    .mount('#app')
