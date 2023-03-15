<template>

<Navbar :icon="icon" />
<hr>

</template>

<script>
import Navbar from './components/Navbar.vue';
import icon from './assets/icon.png';






export default {
  components: {
    Navbar
  },


  data() {
    return {
      icon: icon
    }
  }

}
</script>

<style>

</style>
