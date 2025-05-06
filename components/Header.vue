<template>
  <header id="header">
    <div class="container">
      <h1>oriyuta39</h1>
      <nav class="header_navi">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/skills">Skills</NuxtLink></li>
          <li><NuxtLink to="/works">Works</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const handleScroll = () => {
  const el = document.querySelector('#header')
  if (!el) return

  if (window.scrollY > 10) {
    el.classList.add('small')
  } else {
    el.classList.remove('small')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

ul, li {
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  color: #444;
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto, 'Open Sans', Arial, sans-serif;
  overflow: hidden;
  padding: 1px;
}

#header {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(245, 245, 245, 0.97);
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.8);
}

#header > div > h1 {
  line-height: 35px;
  text-align: center;
  transition: font-size 0.2s linear, line-height 0.2s linear;
  font-size: 30px;
  transform: none;
  background: rgb(200, 200, 200);
  font-family: "Limelight", sans-serif;
  width: 320px;
  margin: 0 auto;
}

#header.small > div > h1 {
  transition: font-size 0.2s linear, line-height 0.2s linear;
  font-size: 0px;
  line-height: 0px;
}

.header_navi {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.header_navi ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
}

.header_navi li a {
  margin: 0;
  font-size: 18px;
  color: initial;
  text-decoration: none;
  transition: color 0.2s linear;
}

.header_navi li:hover a {
  color: red;
}

.header_navi li a {
  padding: 21px;
  color: initial;
  text-decoration: initial;
}

</style>
