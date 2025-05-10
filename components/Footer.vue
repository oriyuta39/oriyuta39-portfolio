<template>
  <footer id="footer">
    <nav class="footer_navi">
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
    <small>&copy; 2025 oriyuta39.</small>
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
  margin-top: 20px;
}

.footer_navi {
  display: flex;
  padding: 10px;
  line-height: 30px;
  width: 470px;
  margin: 0 auto;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.footer_navi ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
}

.footer_navi li {
  position: relative;
}

.footer_navi li a {
  margin: 0;
  font-size: 24px;
  color: initial;
  text-decoration: none;
  transition: color 0.2s linear;
  font-family: "Markazi Text", serif;
}

.footer_navi li:hover a {
  color: red;
}

.footer_navi li a {
  padding: 0px 21px;
  color: initial;
  text-decoration: initial;
}

@media (max-width: 520px) {
  .footer_navi {
    width: 340px;
  }

  .footer_navi li a {
    font-size: 22px;
    padding: 10px;
  }
}
</style>
