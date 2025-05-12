<template>
  <div>
    <Breadcrumb />
    <div class="works">
      <div id="title-works">
        <h1>作品</h1>
      </div>
      <section id="container-works">
        <div id="work-1" class="container-work">
          <h2>シミュレーション型WEBアプリ</h2>
          <p>2025/03</p>
          <div>
            <a href="https://oriyuta39.github.io/overload-simulator/" target="_blank">
              <img src="/images/overloadsimulator.png" alt="オーバーロードシミュレーター">
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
          <h2>ポートフォリオサイト</h2>
          <p>2025/05</p>
          <div>
            <a href="https://oriyuta39-portfolio.netlify.app/" target="_blank">
              <img src="/images/oriyuta39-portfolio.png" alt="oriyuta39-portfolio">
            </a>
            <p>Nuxt.js/Vue.js</p>
            <a href="https://github.com/oriyuta39/oriyuta39-portfolio" class="text-link">
              <p>Github Repository</p>
            </a>
          </div>
          <p class="m-2">学校で学んだ内容を活かし、個人で制作しました<br>
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
  color: #393939;
}

#title-works {
  width: 100%;
  max-width: 840px;
  border: 1px solid #ffaa39;
  border-radius: 50px;
  padding: 30px;
  font-family: "Mochiy Pop One", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom right, #ffffff 50%, #00ff0039);
}

#container-works {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 10px 0px 10px;
}

.container-work {
  width: 380px;
  border-bottom: 1px solid #ffaa39;
  margin: 20px;
  padding-bottom: 20px;
}

.container-work h2 {
  font-size: 20px;
  font-family: "Mochiy Pop One", sans-serif;
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
