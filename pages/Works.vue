<template>
  <div class="works">
    <h1>作品</h1>
    <section id="works_1">
      <h2>2025/03 シミュレーション型WEBアプリ</h2>
      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="../public/images/overloadsimulator.png" alt="">
        </a>
        <p>HTML/CSS/JavaScript</p>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'Works',
})
</script>

<style scoped>
#works_1 img {
  width: 400px;
  height: auto;
  /* アスペクト比を保ったまま */
}
</style>
