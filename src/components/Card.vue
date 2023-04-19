<template>
    <div class="card">
      <img :src="image" alt="Image" class="card-image" />
      <div class="card-text">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 110px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 5px;
  }
  
  .card-image {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  
  .card-text {
    text-align: center;
    margin-top: 2px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
  </style>
  