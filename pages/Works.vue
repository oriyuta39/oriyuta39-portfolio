<template>
  <div>
    <Breadcrumb />
    <div class="works mb-4">
      <div id="title-works">
        <h1>作品</h1>
      </div>
      <section id="container-works">
        <div id="work-1" class="container-work">
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
          <p class="m-2">初めて作ったシンプルなWEBアプリです<br>
            とあるゲームに登場する「装備品の性能を厳選するシステム」を再現した、静的WEBアプリです
          </p>
        </div>
        <div id="work-2" class="container-work">
          <h2 class="mt-4">ポートフォリオサイト</h2>
          <p>2025/05</p>
          <div>
            <a href="https://oriyuta39-portfolio.netlify.app/" target="_blank">
              <img src="../public/images/oriyuta39-portfolio.png" alt="oriyuta39-portfolio">
            </a>
            <p>Nuxt.js/Vue.js</p>
            <a href="https://github.com/oriyuta39/oriyuta39-portfolio" class="text-link">
              <p>Github Repository</p>
            </a>
          </div>
          <p class="m-2">専門学校で学んだ内容を活かし、個人で制作しました<br>
            初めてフレームワークを導入し、ゼロから構築しています
          </p>
        </div>
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
p {
  margin: 0;
}

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

#container-works {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container-work {
  max-width: 380px;
  border-bottom: 1px solid #ffaa39;
  margin: 0 20px;
}

.container-work h2 {
  font-size: 20px;
}

img {
  width: 200px;
  height: 130px;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.39);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  transform: scale(1);
  object-fit: cover;
}

img:hover {
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
