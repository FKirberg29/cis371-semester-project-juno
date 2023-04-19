<template>

<Navbar :icon="icon" />
<hr>
<RouterView></RouterView>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import icon from './assets/icon.png';
import { useRouter } from "vue-router";




</script>

<style>
body {
  font-family: 'Comfortaa', cursive;
}
</style>
