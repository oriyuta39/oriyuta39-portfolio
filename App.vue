<template>
  <div id="main">
    <Header />
    <div id="app">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 520px) {

  #app {
    padding-top: 70px;
  }
}
</style>
