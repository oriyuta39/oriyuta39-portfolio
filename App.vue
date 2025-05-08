<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<template>
  <Header />
  <div id="app">
    <Breadcrumb />
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
  padding-top: 80px;
  text-align: center;
}
</style>
