<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2023 Juno Company. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    color: #777;
    padding: 30px 0;
    text-align: center;
    font-size: 14px;
    width: 100%;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
    margin-top: auto;
  }
  
  .footer-nav a {
    color: #777;
    text-decoration: none;
    margin-left: 10px;
  }
  
  .footer-nav a:hover {
    text-decoration: underline;
  }
  </style>
  
  