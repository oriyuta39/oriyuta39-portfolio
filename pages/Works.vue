<template>
  <div class="works mb-4">
    <div id="title-works">
      <h1>作品</h1>
    </div>
    <section id="works_1" class="container-works">
      <h2 class="mt-4">シミュレーション型WEBアプリ</h2>
      <p>2025/03</p>
      <div>
        <a href="https://oriyuta39.github.io/overload-simulator/" target="_blank">
          <img src="../public/images/overloadsimulator.png" alt="オーバーロードシミュレーター">
        </a>
        <p>HTML/CSS/JavaScript</p>
        <a href="https://github.com/oriyuta39/overload-simulator">
          <p>Github</p>
        </a>
      </div>
      <p>初めて作ったシンプルなWEBアプリです。<br>
        とあるゲームに登場する「装備品の性能を厳選する仕組み」を再現した、静的WEBアプリです。<br>
      </p>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'Works',
})
</script>

<style scoped>
.works {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  min-width: 320px;
  font-family: "Kosugi Maru", sans-serif;
  overflow-x: hidden;
  width: 100%;
}

#title-works {
  width: 100%;
  max-width: 1080px;
  border-bottom: 2px solid #ffaa39;
  padding: 30px;
}

.container-works {
  max-width: 820px;
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  margin: 0 20px 0px 20px;
}

#works_1 img {
  width: 400px;
  height: auto;
  /* アスペクト比を保ったまま */
}
</style>
