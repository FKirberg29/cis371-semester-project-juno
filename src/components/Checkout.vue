<template>
  <div class="checkout-cart">
    <h2>Checkout Cart</h2>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <div>{{ item.text }}</div>
          <div>Price: {{ item.price }}</div>
          <div>Quantity: {{ item.quantity }}</div>
          <div>Total: {{ item.price * item.quantity }}</div>
          <div>
            <button class="checkout-btn" @click="removeFromCart(item)">Remove</button>
          </div>
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
import { computed, ref, watchEffect } from 'vue';
import { auth, cart, saveUserCart } from '../firebase';
import { getProducts, db, uid } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';



export default {
  setup() {
  const isLoggedIn = computed(() => auth.currentUser !== null);

  watchEffect(() => {
    if (isLoggedIn.value) {
      const userCartRef = collection(db, "customers", auth.currentUser.uid, "cart");
      onSnapshot(userCartRef, (snapshot) => {
        cart.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      });
    }
  });

  async function removeFromCart(item) {
    const itemRef = doc(db, "customers", auth.currentUser.uid, "cart", item.id);
    await deleteDoc(itemRef);
  }

  return {
    isLoggedIn,
    cart,
    removeFromCart
  };
},

computed: {
  calculateTotal() {
    let total = 0;
    this.cart.forEach(item => {
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
.checkout-btn {
  background-color: #242424;
  color: rgb(253, 104, 104);
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 7px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.checkout-btn:hover {
  background-color: black;
  cursor: pointer;
}
</style>
  