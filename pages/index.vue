<template>
  <div class="home">
    <section id="title-box">
      <NuxtImg src="/images/simaenaga.webp" alt="背景画像" class="title-bg" quality="50" preload />
      <h1>oriyuta39 - portfolio</h1>
    </section>

    <section id="about-site" class="m-5">
      <h2 class="p-2">Rewriting My Story</h2>
      <p class="p-2">
        情報系専門学校に通う学生のポートフォリオサイトです<br>
        私がこれまでに制作した作品や学んできたことをまとめています
      </p>
    </section>

    <section id="pages">
      <div id="title-pages">
        <h2>ページ紹介</h2>
      </div>
      <div id="container-pages" class="row g-3">
        <div class="col">
          <NuxtLink to="/about">
            <div class="card">
              <div class="card-body card-about">
                <h3 class="card-title mt-4">About / 自己紹介</h3>
                <h4 class="card-title small">My Story Writing</h4>
                <p class="card-text mt-5">プロフィールやこれまでの経験について</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink to="/skills">
            <div class="card">
              <div class="card-body card-skills">
                <h3 class="card-title mt-4">Skills / スキル</h3>
                <h4 class="card-title small">My Technical Ability</h4>
                <p class="card-text mt-5">保有資格や専門スキルについて</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink to="/works">
            <div class="card">
              <div class="card-body card-works">
                <h3 class="card-title mt-4">Works / 作品</h3>
                <h4 class="card-title small">My Creative Creations</h4>
                <p class="card-text mt-5">開発プロジェクトと成果物について</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink to="/contact">
            <div class="card">
              <div class="card-body card-contact">
                <h3 class="card-title mt-4">Contact / <span class="jp-font">連絡先</span></h3>
                <h4 class="card-title small ">My Connection Details</h4>
                <p class="card-text mt-5">お問い合わせフォームや関連リンクについて</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
a {
  text-decoration: none;
}

.home {
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

#title-box {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.title-bg {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.5;
}

#title-box h1 {
  position: relative;
  z-index: 1;
  font-family: "Tangerine", cursive;
  font-size: 70px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

#about-site {
  width: 100%;
  max-width: 640px;
}

#about-site h2 {
  margin: 0 auto;
  font-family: "Tangerine", cursive;
  font-size: 80px;
  color: lightcoral;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 520px;
}

#pages {
  max-width: 840px;
}

#title-pages {
  border: 1px solid #ffaa39;
  border-radius: 50px;
  padding: 30px 0;
  margin: 10px;
  font-family: "Mochiy Pop One", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom right, #ffffff 50%, #ffe3a9 100%);
}

#container-pages {
  max-width: 840px;
  margin: 25px 0;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
}

.card {
  width: 355px;
  height: 220px;
  overflow: hidden;
  background-color: #f0f0f5;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.39);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  transform: scale(1);
}

.card h3 {
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: color 0.3s ease;
  font-family: "Mochiy Pop One", sans-serif;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.50);
  transform: scale(1.02);
}

.card:hover h3 {
  color: #ff0039;
}

.card-about {
  background: linear-gradient(to bottom right, #ffffff 40%, #ff000039);
}

.card-skills {
  background: linear-gradient(to bottom right, #ffffff 40%, #00ffff39);
}

.card-works {
  background: linear-gradient(to bottom right, #ffffff 40%, #00ff0039);
}

.card-contact {
  background: linear-gradient(to bottom right, #ffffff 40%, #ffff0039);
}

.card-title {
  font-family: "Markazi Text", serif;
}

@media (max-width: 520px) {
  #about-site h2 {
    width: 320px;
  }

  .card {
    width: 370px;
  }
}
</style>
