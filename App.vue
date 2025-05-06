<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <div id="app">
    <NuxtPage />
  </div>

  <Footer />

</template>

<style scoped>
body {
  display: flex;
  place-items: center;
  min-width: 320px;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 0px 0px 0px ;
  text-align: center;
}
</style>
