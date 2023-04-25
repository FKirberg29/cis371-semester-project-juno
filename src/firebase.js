import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACHfAYEzjUFhSqT7QJV1EAW1Jx7x2Jqwc",
    authDomain: "cis371-semester-project-b860c.firebaseapp.com",
    projectId: "cis371-semester-project-b860c",
    storageBucket: "cis371-semester-project-b860c.appspot.com",
    messagingSenderId: "685988760069",
    appId: "1:685988760069:web:b1b374cdee9086dc5cea6c"
};

initializeApp(firebaseConfig);
const isLoggedIn = ref(false)
const auth = getAuth();
const uid = ref("");
var displayName = ref("");

const db = getFirestore();

const cart = ref([]);

async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const arrayOfProducts = [];
    querySnapshot.forEach((doc) => {
      //doc.data() is never undefined for query doc snapshots
      var id = doc.get("ID")
      var image = doc.get("image")
      var text = doc.get("text")
      var description = doc.get("description")
      var price = doc.get("price")

      let product = {
          id: id,
          image: image,
          text: text,
          description: description,
          price: price
      }
      arrayOfProducts.push(product)
    });

    // for (let i = 0; i < arrayOfProducts.length; i++) {
    //   console.log(arrayOfProducts[i])
    // }
    return arrayOfProducts;
  }

  async function getNumProductsSold() {
    const querySnapshot = await getDocs(collection(db, "numOfProductsSold"));
    const array = [];
    querySnapshot.forEach((doc) => {
      //doc.data() is never undefined for query doc snapshots
      var quantity = doc.get("quantity")

      let product = {
          quantity: quantity
      }
      array.push(product)
    });

    // for (let i = 0; i < array.length; i++) {
    //   console.log(array[i])
    // }
    return array;
  }

async function getUserCart(userId) {
    const cartRef = doc(db, 'carts', userId);
    const cartDoc = await getDoc(cartRef);
  
    if (cartDoc.exists()) {
      cart.value = cartDoc.data().items;
    } else {
      cart.value = [];
    }
  
    return cart;
  }
  
  async function saveUserCart(userId, items) {
    const cartRef = doc(db, 'carts', userId);
    await setDoc(cartRef, { items });
  }
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      uid.value = user.uid
      if (user.displayName)
        displayName = user.displayName
      else
        displayName = user.email
      getUserCart(user.uid);
    } else {
      isLoggedIn.value = false;
      cart.value = [];
    }
  });
  
  export { auth, db, cart, isLoggedIn, uid, displayName, getUserCart, saveUserCart, getProducts, getNumProductsSold };
