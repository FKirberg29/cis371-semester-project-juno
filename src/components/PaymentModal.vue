<template>
    <div class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="closing-wrapper">
        <button class="close-btn" @click="$emit('close')">&times;</button>
      </div>


        <h2>Shipping Details</h2>

        <div class="form-group">
          <label for="name-on-card">Shipping Address</label>
          <input id="name-on-card" type="text" v-model="shippingAddress" />
        </div>
        <div class="form-group">
          <label for="name-on-card">Zip Code</label>
          <input id="name-on-card" type="text" v-model="zip" />
        </div>
        <div class="form-group">
          <label for="name-on-card">City</label>
          <input id="name-on-card" type="text" v-model="city" />
        </div>
        <div class="form-group">
          <label for="name-on-card">State</label>
          <input id="name-on-card" type="text" v-model="state" />
        </div>
        <div class="form-group">
          <label for="name-on-card">Phone Number</label>
          <input id="name-on-card" type="text" v-model="phoneNum" />
        </div>
        <hr>
        <h2>Payment Details</h2>
  
        <div class="form-group">
          <label for="name-on-card">Name on Card</label>
          <input id="name-on-card" type="text" v-model="nameOnCard" />
        </div>
  
        <div class="form-group">
          <label for="card-number">Credit Card Number</label>
          <input id="card-number" type="text" v-model="cardNumber" />
        </div>
  
        <div class="form-group">
          <label for="expiration">Card Expiration</label>
          <input id="expiration" type="text" v-model="expiration" />
        </div>
  
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input id="cvv" type="text" v-model="cvv" />
        </div>
        <div class="button-wrapper">
            <button class="payment-btn" @click="$emit('confirm'); $emit('close')">Confirm Payment</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shippingAddress: "",
        zip: "",
        city: "",
        state: "",
        phoneNum: "",
        creditCard: "",
        nameOnCard: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  input {
    height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 5px;
  }
  
  button {
    background-color: #242424;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    padding: 7px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: black;
    cursor: pointer;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-btn {
  font-size: 20px;
  background: #242424;
  border: none;
  cursor: pointer;
}
.modal-content .closing-wrapper {
    display: flex;
    justify-content: end;
}
  </style>
  