<template>
  <div>
    <div class="header-text">
      <h1> Explore our Products below</h1>
    </div>

    <div class="card-container">
      <div
        class="card"
        v-for="item in products"
        :key="item.id"
        @click="showModal(item)"
      >
        <img :src="item.image" style="width:250px;height:200px; object-fit: cover;" alt="product image" />
        <h3>{{ item.text }}</h3>
        <p>Price: ${{ item.price }}</p>
      </div>
    </div>

    <Modal v-if="selectedItem" :selectedItem="selectedItem" @close="closeModal" v-on:add="addToCart">
      <div class="modal-content">
        <div class="image-container">
          <img :src="selectedItem.image" style="width:250px;height:200px; object-fit: cover;" alt="product image" />
        </div>
        <div class="description-container">
          <h2>{{ selectedItem.text }}</h2>
          <p>{{ selectedItem.description }}</p>
          <p>Price: ${{ selectedItem.price }}</p>
          <button @click="$emit('add', selectedItem)">Add to Cart</button>
        </div>
      </div>
    </Modal>
  </div>
  
  <!-- <Footer /> -->
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { collection, doc, setDoc, getDoc, getDocs, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getProducts, auth, db, uid, cart } from '../firebase';
import Card from './Card.vue';
import Modal from './Modal.vue';
import Footer from './Footer.vue';


export default {
  name: 'Home',
  components: {
    Card,
    Modal,
    Footer,
  },
  data() {
    return {
      products: [],
      selectedItem: null,
    };
  },
  computed: {
    isLoggedIn() {
      return computed(() => auth.currentUser !== null);
    },
  },
  methods: {
    showModal(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
    addToCart() {
  console.log('Add to cart clicked');

  // If a user is logged in, send the data to Firebase using their UID
  if (this.isLoggedIn.value) {
    const docData = {
      ID: this.selectedItem.id,
      image: this.selectedItem.image,
      text: this.selectedItem.text,
      description: this.selectedItem.description,
      price: this.selectedItem.price,
      quantity: 1
    };

    // Check if the item is already in the cart
    const existingItem = cart.value.find(item => item.ID === docData.ID);

    if (existingItem) {
      // If it is, update its quantity
      existingItem.quantity++;
      const itemRef = doc(db, 'customers', uid.value, 'cart', existingItem.id);
      setDoc(itemRef, existingItem);
    } else {
      // If it's not, add it to the cart as a new item
      addDoc(collection(db, 'customers', uid.value, 'cart'), docData)
        .then(docRef => {
          const newItem = { ...docData, id: docRef.id };
          cart.value.push(newItem);
        })
        .catch(error => console.error('Error adding document: ', error));
    }
  }

  // Close the modal after adding the item to the cart
  this.closeModal();
},



  },
  created() {
    getProducts().then((products) => {
      products.sort((a, b) => {
        if (a.id < b.id) { return -1; }
        if (a.id > b.id) { return 1;  }
        return 0;
      });
      // console.log(products);
      this.products = products;
    });
  },
};
</script>

<style scoped>
.header-text {
  text-align: center;
  padding-bottom: 100px;
  padding-top: 100px;
}

.card {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: -1px 0px 5px rgba(0, 0, 0, 0.1), 0px 3px 1px rgba(0, 0, 0, 0.1);
  margin: 5px;
  overflow: hidden; 
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  gap: 50px;
}

.card h3 {
  font-size: 20px; 
  line-height: 5;
  margin-top: 10px; 
}

@media (max-width: 800px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
}
.card:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.modal-image {
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.modal-description {
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-description h2 {
  margin-bottom: 10px;
}

.modal-description p {
  margin-bottom: 20px;
}

.modal-description button {
  background-color: #a2d9a5;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  width: 200px;
  height: 40px;
  align-self: center;
}

.modal-description button:hover {
  background-color: #77a179;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

</style>
