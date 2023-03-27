<template>
  <div class ="navbar">
    <div class="navbar-logo">
      <img :src="icon" alt="icon">
    </div>

    <div class="nav-menu">
      <ul>
        <li><b>Products</b></li>
        <li><b>About Us</b></li>
        <li><b>Contact</b></li>  
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type NavbarProp = {
    icon: string
}
const props = withDefaults(defineProps<NavbarProp>(),
      {
         icon: "",
      })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #fff;

}
.navbar-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.nav-menu {
  width: 40%;
  padding: 0 20px;
  font-size: 20px;
}
.nav-menu ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-family: 'Kanit', sans-serif;
}

.nav-menu ul li:hover {
  position: relative;
  cursor: pointer;
}

.nav-menu ul li::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease-in-out;
}

.nav-menu ul li:hover::after {
  width: 100%;
}

  @media screen and (max-width: 1024px) {
    .navbar {
      flex-direction: column;
      height: auto;
    }
    .nav-menu {
    width: 80%;
    padding: 0 20px;
    font-size: 20px;
    }
}

</style>
