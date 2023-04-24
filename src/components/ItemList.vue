<template>
  <div>
    <div class="header-text">
      <h1> Explore our Products below</h1>
    </div>

    <div class="card-container">
      <div
        class="card"
        v-for="(item, index) in items"
        :key="index"
        @click="showModal(item)"
      >
        <img :src="item.image" alt="product image" />
        <h3>{{ item.text }}</h3>
      </div>
    </div>

    <Modal v-if="selectedItem" @close="closeModal">
      <div class="modal-content">
        <div class="image-container">
          <img :src="selectedItem.image" alt="product image" />
        </div>
        <div class="description-container">
          <h2>{{ selectedItem.text }}</h2>
          <p>{{ selectedItem.description }}</p>
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </Modal>
  </div>
  
  <Footer />
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Card from './Card.vue';
import Modal from './Modal.vue';
import Footer from './Footer.vue';

const firebaseConfig = {
  apiKey: "AIzaSyACHfAYEzjUFhSqT7QJV1EAW1Jx7x2Jqwc",
  authDomain: "cis371-semester-project-b860c.firebaseapp.com",
  projectId: "cis371-semester-project-b860c",
  storageBucket: "cis371-semester-project-b860c.appspot.com",
  messagingSenderId: "685988760069",
  appId: "1:685988760069:web:b1b374cdee9086dc5cea6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  name: 'Home',
  components: {
    Card,
    Modal,
    Footer,
  },
  data() {
    return {
      items: [
      {
          image: 'src/assets/fish1.png',
          text: 'Organic Nordic Salmon',
          description: 'description',
        },
        {
          image: 'src/assets/fish2.jpg',
          text: 'Organic Sourced Salmon',
          description: 'description',
        },
        {
          image: 'src/assets/grains1.jpg',
          text: 'Organic Whole Grains',
          description: 'description',
        },
        {
          image: 'src/assets/grains2.png',
          text: 'Organic Rice Flakes',
          description: 'description',
        },
        {
          image: 'src/assets/veg1.jpg',
          text: 'Organic Cucumbers',
          description: 'description',
        },
        {
          image: 'src/assets/veg2.jpg',
          text: 'Organic Vegetables',
          description: 'description',
        },
        {
          image: 'src/assets/fruit1.png',
          text: 'Organic Strawberries',
          description: 'description',
        },
        {
          image: 'src/assets/fruit2.png',
          text: 'Organic Blueberries',
          description: 'description',
        },
        {
          image: 'src/assets/drink1.png',
          text: 'Organic Coconut Water',
          description: 'description',
        },
        {
          image: 'src/assets/drink2.png',
          text: 'Organic Mango Juice',
          description: 'description',
        },
      ],
      selectedItem: null,
    };
  },
  methods: {
    showModal(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
    addToCart() {
      // Implement add to cart functionality here
      console.log('Add to cart clicked');
    },
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
