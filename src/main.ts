import { createApp } from 'vue'
import App from './App.vue';
import {createRouter, createWebHashHistory} from "vue-router";
import ItemList from "./components/ItemList.vue"
import LoginVue from './components/Login.vue';
import SignUpVue from './components/SignUp.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHfAYEzjUFhSqT7QJV1EAW1Jx7x2Jqwc",
  authDomain: "cis371-semester-project-b860c.firebaseapp.com",
  projectId: "cis371-semester-project-b860c",
  storageBucket: "cis371-semester-project-b860c.appspot.com",
  messagingSenderId: "685988760069",
  appId: "1:685988760069:web:b1b374cdee9086dc5cea6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myComponentRoutes = [
    { path: "/itemlist", component: ItemList },
    { path: "/login", component: LoginVue},
    { path: "/signup", component: SignUpVue },
    // { path: "/", component: }
];

const myRouter = createRouter({routes: myComponentRoutes, history: createWebHashHistory()});

createApp(App)
    .use(myRouter)
    .mount('#app')
