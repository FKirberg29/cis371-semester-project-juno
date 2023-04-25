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
    <h1>Discover our organic products today!</h1>

    </div>
    <div class="right-section">

      <h1> Healthy Decisions start with eating Healthy Foods.</h1>
    </div>
  </div>
  <hr>

  <div class="title-baner">

    <h1>We've got all your bases covered.</h1>
  </div>

  <div class="divider-container">
  <div class="divider">
    <img src="src/assets/organic.png" alt="Image 1" class="divider-image">
    <div class="divider-text">USA Certified</div>
  </div>
  <div class="divider">
    <img src="src/assets/canada.png" alt="Image 2" class="divider-image">
    <div class="divider-text">Canada Certified</div>
  </div>
  <div class="divider">
    <img src="src/assets/mexico.png" alt="Image 3" class="divider-image">
    <div class="divider-text">Mexico Certified</div>
  </div>
</div>
<hr>
<div class="headertext">
  <h1>Check out our popular products!</h1>
</div>
<Chart></Chart>
  <Footer />
</template>
  
<script>
import Card from './Card.vue';
import Footer from './Footer.vue';
import Chart from './Chart.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Footer,
    Chart,
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
  text-align: center;
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

.left-section h1 {
  padding-top: 100px;
}
.title-baner {

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

hr {
  background-color: black;
  height: 2px;
  border: none;
  width: 80%;
  margin: 20px auto;
}



.title-baner h1 {
  color: black;
  font-size: 48px;
  text-align: center;
}


.divider-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.divider {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;

  margin: 5px;
  overflow: hidden; 
  margin-bottom: 50px;
  margin-top: 10px;
}

.divider-image {
  width: 80%;
  height: auto;
  object-fit: contain;
}

.divider-text {
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
}
.headertext {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
  
  