<template>
  <header id="header">
    <div class="container">
      <h1>oriyuta39</h1>
      <nav class="header_navi">
        <ul>
          <li>
            <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" exact-active-class="active">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/skills" exact-active-class="active">Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works" exact-active-class="active">Works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" exact-active-class="active">Contact</NuxtLink>
          </li>
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
  }
  else {
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
ul,
li {
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto, 'Open Sans', Arial, sans-serif;
  overflow: hidden;
  padding: 1px;
}

#header {
  width: 100%;
  max-height: 84px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(to bottom, #ffffff 70%, #ffe3a9);
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.8);
}

#header>div>h1 {
  line-height: 35px;
  text-align: center;
  transition: font-size 0.2s linear, line-height 0.2s linear;
  font-size: 30px;
  transform: none;
  background: linear-gradient(to bottom right, #ffffff 10%, #00000039);
  font-family: "Limelight", sans-serif;
  width: 320px;
  margin: 0 auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

#header.small>div>h1 {
  transition: font-size 0.2s linear, line-height 0.2s linear;
  font-size: 0px;
  line-height: 0px;
}

.header_navi {
  display: flex;
  justify-content: center;
}

.header_navi ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
}

.header_navi li a {
  margin: 0;
  font-size: 2rem;
  color: initial;
  text-decoration: none;
  transition: color 0.2s linear;
  line-height: 40px;
  padding: 0px 21px;
  color: initial;
  text-decoration: initial;
  font-family: "Markazi Text", serif;
  color: #393939;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header_navi li:hover a {
  color: #ff0039;
}

.header_navi li a.active {
  border-bottom: 2px solid #ffaa39;
}

@media (max-width: 520px) {

  .header_navi li a {
    font-size: 22px;
    padding: 0px 15px;
    line-height: 32px;
  }
}
</style>
