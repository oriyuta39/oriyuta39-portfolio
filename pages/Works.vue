<template>
  <div>
    <Breadcrumb />
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
          <a href="https://github.com/oriyuta39/overload-simulator" class="text-link">
            <p>Github Repository</p>
          </a>
        </div>
        <p>初めて作ったシンプルなWEBアプリです。<br>
          とあるゲームに登場する「装備品の性能を厳選する仕組み」を再現した、静的WEBアプリです。<br>
        </p>
      </section>
    </div>
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
  max-width: 840px;
  border-top: 2px solid #ffaa39;
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
  margin: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.39);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  transform: scale(1);
}

#works_1 img:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.50);
  transform: scale(1.02);
}

.text-link {
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.text-link:hover {
  color: #39aaff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
