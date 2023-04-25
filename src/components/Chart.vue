<template>
  <div class="outer-chart">
    <canvas id="bar-chart" height="100" width="100"></canvas>
  </div>
</template>


<script setup lang="ts">
import { initializeApp } from '@firebase/app';
import { getFirestore, getDocs, collection } from '@firebase/firestore';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js/auto'
import { onMounted } from 'vue';


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACHfAYEzjUFhSqT7QJV1EAW1Jx7x2Jqwc",
    authDomain: "cis371-semester-project-b860c.firebaseapp.com",
    projectId: "cis371-semester-project-b860c",
    storageBucket: "cis371-semester-project-b860c.appspot.com",
    messagingSenderId: "685988760069",
    appId: "1:685988760069:web:b1b374cdee9086dc5cea6c"
};

// Initialize Firebase and Firestore DB
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

let productData = [] as any[];

async function getProductData() {
  const querySnapshot = await getDocs(collection(db, "numOfProductsSold"));
  querySnapshot.forEach((doc) => {
    productData.push({
      name: doc.data().name,
      quantity: doc.data().quantity
    });
  });
}

onMounted(() => {
  getProductData().then(() => {
    const chartLabels = productData.map((data: any) => data.name);
    const chartData = productData.map((data: any) => data.quantity);

    const data = {
      labels: chartLabels,
      datasets: [{
        label: "Number of Products Sold",
        backgroundColor: "rgba(50, 205, 50, 0.7)",
        borderColor: "rgb(50, 205, 50)",
        borderWidth: 1,
        xAxisID: "x",
        yAxisID: "y",
        data: chartData,
      }]
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            min: 0,
            title: {
              display: true,
              text: '# of Products Sold',
            },
            ticks: {
              stepSize: 1,
            }
          },
          x: {
            title: {
              display: true,
              text: 'Product Name',
            }
          }
        }
      }
    };

    const canvasTag = <ChartItem>document.getElementById('bar-chart');
    const barChart = new Chart(canvasTag, config);
  });
});

</script>


<style>


.outer-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
}




</style>