<template>
  <div id="main">
    <Header />
    <div id="app">
      <Breadcrumb />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<style scoped>
body {
  display: flex;
  place-items: center;
  min-width: 320px;
}

#main {
  background-color: #ffffff39;
  font-display: swap;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 78px;
  text-align: center;
}

@media (max-width: 520px) {

  #app {
    padding-top: 70px;
  }
}
</style>
