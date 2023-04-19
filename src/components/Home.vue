<template>
    <div class="hero-section">
      <div class="hero-text">
        <h1>Organic Products.</h1>
        <h1>Made for you.</h1>
        <h1></h1>
      </div>
      <div class="hero-image">
        <img src="..\assets\landing.jpg" alt="Your Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
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
  
  /* Add media query for responsiveness */
  @media screen and (max-width: 768px) {
    .hero-section {
      flex-direction: column-reverse;
    }
  
    .hero-text h1 {
      font-size: 2rem;
    }
  }
  </style>
  
  