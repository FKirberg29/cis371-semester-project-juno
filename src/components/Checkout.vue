<template>
  <div class="text-banner">
  <p>Thank you for your payment!</p>
</div>
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
      <div class="checkout-payment">
        <button class="checkout-payment-btn" @click="openPaymentModal">Pay Now</button>
        <PaymentModal v-show="paymentModal" @close="closePaymentModal" @confirm="confirmPayment" />
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
import { getProducts, db, uid, getNumProductsSold } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import PaymentModal from './PaymentModal.vue';



export default {
  components: {
    PaymentModal,
  },
  data() {
    return {
      products: []
    };
  },
  setup() {
  const isLoggedIn = computed(() => auth.currentUser !== null);

  const paymentModal = ref(false);

  const quantities = [];

  function openPaymentModal() {
    paymentModal.value = true;
  }

  function closePaymentModal() {
    paymentModal.value = false;
  }
  async function confirmPayment() {
  console.log("Payment confirmed");

  // Collect # of products sold info
  for (const item of cart.value) {
    if (!quantities[item.ID]) {
      quantities[item.ID] = 0;
    }
    quantities[item.ID] += item.quantity;
    await removeFromCart(item);
  }

  console.log(quantities);
  // Update the database with the quantities
  for (const id in quantities) {
    const itemRef = doc(db, 'numOfProductsSold', id.toString());
    const existingItem = await getDoc(itemRef);
    if (existingItem.exists()) {
      const data = existingItem.data();
      const quantity = data.quantity || 0;
      const newData = { ...data, quantity: quantity + quantities[id] };
      await setDoc(itemRef, newData);
    } else {
      await setDoc(itemRef, { id: id, quantity: quantities[id] });
    }
  }
  
  closePaymentModal();

const textBanner = document.querySelector('.text-banner');
textBanner.classList.add('show');
setTimeout(() => {
  textBanner.classList.remove('show');
}, 3000);

}

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
    removeFromCart,
    openPaymentModal,
    closePaymentModal,
    paymentModal,
    confirmPayment,
    quantities
  };
},

computed: {
  calculateTotal() {
    let total = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }
},
created() {
    getNumProductsSold().then((products) => {
      this.products = products;
    });
},

}
</script>
  
<style>
.text-banner {
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #a2d9a5;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.5s ease-out;
}

.text-banner.show {
  top: 0;
}

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
.checkout-payment {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout-payment-btn {
  width: 200px;
  height: 40px;
  background-color: #98d485;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.checkout-payment-btn:hover {
cursor: pointer;
background-color: #77a179;
}
.total {
  font-size: 25px;
  padding-top: 20px;
}
</style>
  