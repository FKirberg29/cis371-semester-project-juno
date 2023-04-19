<template>
  <div class="checkout-cart">
    <h2>Checkout Cart</h2>
    <div v-if="items.length > 0">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div>{{ item.text }}</div>
          <div>Price: {{ item.price }}</div>
          <div>Quantity: {{ item.quantity }}</div>
          <div>Total: {{ item.price * item.quantity }}</div>
        </li>
      </ul>
      <div class="total">
        Total: {{ calculateTotal }}
      </div>
    </div>
    <div v-else>
      <p>No items in cart</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { auth, cart, saveUserCart } from '../firebase';

export default {
  name: 'CheckoutCart',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup() {
  const isLoggedIn = computed(() => auth.currentUser !== null);

  function addToCart(item) {
    const existingItem = cart.value.find(i => i.text === item.text);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.value.push({ ...item, quantity: 1 });
    }

    if (isLoggedIn.value) {
      saveUserCart(auth.currentUser.uid, cart.value);
    }
  }

  return {
    isLoggedIn,
    addToCart,
  };
},

  computed: {
    calculateTotal() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.quantity;
      });
      return total;
    }
  },
}
</script>
  
  <style>
  .checkout-cart {
    margin: 20px;
    margin-top: 300px;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .checkout-cart ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .checkout-cart li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .checkout-cart .total {
    text-align: right;
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
  