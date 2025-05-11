<template>
  <footer id="footer">
    <nav class="footer-navi mb-2">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">Skills</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/works">Works</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="footer-bottom">
      <small>&copy; 2025 oriyuta39.</small>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
ul,
li {
  padding: 0;
  margin: 0;
}

#footer {
  text-align: center;
}

.footer-navi {
  display: flex;
  padding: 10px;
  line-height: 30px;
  width: 500px;
  margin: 0 auto;
  border: 1px solid rgba(39, 39, 39, 0.5);
  border-radius: 10px;
}

.footer-navi ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
}

.footer-navi li {
  position: relative;
}

.footer-navi li a {
  margin: 0;
  font-size: 24px;
  color: initial;
  text-decoration: none;
  transition: color 0.2s linear;
  font-family: "Markazi Text", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.footer-navi li:hover a {
  color: #ff0039;
}

.footer-navi li a {
  padding: 0px 21px;
  color: initial;
  text-decoration: initial;
}

.footer-bottom {
  background-color: #00000039;
}

@media (max-width: 520px) {
  .footer-navi {
    width: 360px;
  }

  .footer-navi li a {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
