import { createApp } from 'vue'
import App from './App.vue';
import {createRouter, createWebHashHistory} from "vue-router";
import ItemList from "./components/ItemList.vue"

const myComponentRoutes = [
    { path: "/itemlist", component: ItemList }
    // { path: "/", component: },
    // { path: "/", component:  },
    // { path: "/", component: }
];

const myRouter = createRouter({routes: myComponentRoutes, history: createWebHashHistory()});

createApp(App)
    .use(myRouter)
    .mount('#app')
