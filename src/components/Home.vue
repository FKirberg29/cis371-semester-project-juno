<template>
  <div class="hero-section">
    <div class="hero-text">
      <h1>Organic Products.</h1>
      <h1>Tailored for you.</h1>
    </div>
    <div class="hero-image">
      <img src="..\assets\landing.jpg" alt="Your Image" />
    </div>
  </div>

  <div>
    <div class="card-container">
      <Card v-for="(item, index) in items" :key="index" :image="item.image" :text="item.text" />
    </div>
  </div>

  <div class="button-container">
    <router-link to="/itemlist">
      <button class="see-products-button" @click="scrollToTop">
        See our Products
      </button>
    </router-link>
  </div>

  <div class="section-container">
    <div class="left-section">
<h1>Add some marketing text here</h1>

    </div>
    <div class="right-section">

      <h1> Healthy Decisions start with eating Healthy Foods.</h1>
    </div>
  </div>



</template>
  
<script>
import Card from './Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          image: 'src/assets/fruit.png',
          text: 'Fruits',
        },
        {
          image: 'src/assets/vegetable.png',
          text: 'Vegetables',
        },
        {
          image: 'src/assets/fish.png',
          text: 'Fish',
        },
        {
          image: 'src/assets/grain.png',
          text: 'Grains',
        },
        {
          image: 'src/assets/beverage.png',
          text: 'Beverages',
        },
      ],

    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

};
</script>
  
<style scoped>
.hero-section {
  display: flex;
  height: 70vh;
  background-color: white;
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}


@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse;
  }

  .hero-text h1 {
    font-size: 2rem;
  }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
}

@media (max-width: 600px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
}

.see-products-button {
  width: 200px;
  height: 40px;
  margin-top: 50px;
  background-color: #98d485;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.see-products-button:hover {
  background-color: #77a179;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.section-container {
  display: flex;
  width: 100%;
  height: 300px;
  margin-top: 50px;
}

.left-section {
  width: 50%;
  height: 100%;
  background-color: white;
}

.right-section {

  width: 50%;
  height: 100%;
  background-color: #98d485;
  border-radius: 5px;
}

.right-section h1 {
  padding-top: 100px;
  text-align: center;
  color: white;
}



</style>
  
  