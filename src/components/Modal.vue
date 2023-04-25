<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              {{selectedItem.text}}
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <img :src="selectedItem.image" style="width:250px;height:200px; object-fit: cover;" alt="product image" />
            </slot>
            <p>Price: ${{ selectedItem.price }}</p>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button @click="$emit('add')">Add to Cart</button>
              <button @click="$emit('close')">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: ['selectedItem'],
    mounted() {
      document.addEventListener('keydown', this.onEsc);
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.onEsc);
    },
    methods: {
      onEsc(event) {
        if (event.key === 'Escape') {
          this.$emit('close');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-wrapper {
    position: relative;
    width: 80%;
    max-width: 500px;
  }
  
  .modal-container {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .modal-header {
    padding: 16px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  
  .modal-body {
    padding: 16px;
    flex-grow: 1;
    text-align: center;
  }
  
  .modal-footer {
    padding: 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    border-top: 1px solid #eee;
  }
  
  button {
    background-color: #98d485;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #77a179;
    cursor: pointer;
  }
  </style>
  