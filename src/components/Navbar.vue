<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img :src="icon" alt="icon">
    </div>
    <p v-if="isLoggedIn">Welcome {{ displayName }}.</p>
    <div class="nav-menu">
      <ul>
        <li><router-link to="/"><b>Home</b></router-link></li>
        <li><router-link to="/itemlist"><b>Products</b></router-link></li>
        <li v-if="isLoggedIn"><router-link to="/" @click="logOut">Log Out</router-link></li>
        <li v-if="!isLoggedIn" @click="() => showModal('login')"><b>Login</b></li>
        <li v-if="!isLoggedIn" @click="() => showModal('signup')"><b>Sign up</b></li>
        <li><router-link to="/Checkout"><img :src="cart" alt="icon"></router-link></li>
      </ul>
    </div>
  </div>
  <div class="modal" v-if="modal.show" @click="hideModal">
    <div class="modal-content" @click.stop>
      <button class="close-btn" @click="hideModal">X</button>
      <Login v-if="modal.type === 'login'" />
      <SignUp v-else />
    </div>
  </div>
</template>



<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import { Auth, getAuth, onAuthStateChanged, signOut } from '@firebase/auth';

const isLoggedIn = ref(false)
const uid = ref("")
var auth: Auth
var displayName: string | null
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      uid.value = user.uid
      if (user.displayName)
        displayName = user.displayName
      else
        displayName = user.email
    }
    else {
      isLoggedIn.value = false
    }
    console.log("User Logged In: "+ isLoggedIn.value)
    console.log("User UID: " + uid.value)
  })
})

const logOut = () => {
    signOut(auth)
}

const modal = ref({
  show: false,
  type: '' // 'login' or 'signup'
});


type NavbarProp = {
    icon: string
    cart: string
}

const props = withDefaults(defineProps<NavbarProp>(),
      {
         icon: "",
         cart: "",
      })

const showModal = (type: any) => {
  modal.value.show = true;
  modal.value.type = type;
};

const hideModal = () => {
  modal.value.show = false;
};


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
}

.nav-menu ul li:hover {
  position: relative;
  cursor: pointer;
  color: #000;
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

@media screen and (max-width: 768px) {
    .navbar {
      flex-direction: column;
      height: auto;
    }
    .nav-menu {
    width: 80%;
    padding: 0 20px;
    font-size: 14px;
    }
}
li a {
  color: inherit;
  text-decoration: none;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  min-width: 400px;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}


</style>
