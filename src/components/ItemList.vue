<script setup lang="ts">
// Import the functions you need from the SDKs you need
import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, collection, addDoc } from "firebase/firestore";
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
const db = getFirestore(app)

</script>

<template>
<h1>Item List</h1>
</template>