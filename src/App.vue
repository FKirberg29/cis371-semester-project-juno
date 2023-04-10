<template>

<Navbar :icon="icon" />
<hr>
<RouterLink to="/itemlist">Item List</RouterLink>
<RouterLink to="/login">Login Page</RouterLink>
<RouterLink to="/signup">Sign Up Page</RouterLink>
<router-view></router-view>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import icon from './assets/icon.png';
import { useRouter } from "vue-router";

const router = useRouter()


</script>

<style>

</style>
