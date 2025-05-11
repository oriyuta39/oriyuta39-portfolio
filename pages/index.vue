<template>
  <div class="home">
    <section id="title-box">
      <h1>oriyuta39 - portfolio</h1>
    </section>

    <section id="about-site">
      <h2 class="p-2">Rewriting My Story</h2>
      <p class="p-3 mb-5">
        とあるIT系専門学校に通う学生のポートフォリオサイトです。<br>
        私がこれまでに作成した作品や学んできたことをまとめています。
      </p>
    </section>

    <section id="pages">
      <h1 class="pt-2">ページ紹介</h1>
      <div id="container-pages" class="row g-3">
        <div class="col">
          <NuxtLink to="/about">
            <div class="card">
              <div class="card-body card-about">
                <h3 class="card-title mt-4">About / <span class="jp-font">自己紹介</span></h3>
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
                <h3 class="card-title mt-4">Skills / <span class="jp-font">スキル</span></h3>
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
                <h3 class="card-title mt-4">Works / <span class="jp-font">作品</span></h3>
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

p {
  color: #393939;
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

#title-box::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('../public/images/simaenaga.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 0;
}

#title-box h1 {
  position: relative;
  z-index: 1;
  font-family: "Tangerine", cursive;
  font-size: 70px;
  color: #393939;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

#about-site {
  width: 100%;
  max-width: 640px;
  border-bottom: 2px solid #ffaa39;
  margin-bottom: 60px;
}

#about-site h2 {
  margin: 0 auto;
  font-family: "Tangerine", cursive;
  font-size: 80px;
  color: lightcoral;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 520px;
}

#pages h1 {
  padding-bottom: 60px;
  border-bottom: 2px solid #ffaa39;
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

.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.50);
  transform: scale(1.02);
}

.card h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.card-about {
  background: linear-gradient(to bottom right, #ffffff 40%, #ff000039);
}

.card-about h3 {
  color: #393939;
  font-weight: bold;
  letter-spacing: 2px;
}

.card-skills {
  background: linear-gradient(to bottom right, #ffffff 40%, #00ffff39);
}

.card-skills h3 {
  color: #393939;
  font-weight: bold;
  letter-spacing: 2px;
}

.card-works {
  background: linear-gradient(to bottom right, #ffffff 40%, #00ff0039);
}

.card-works h3 {
  color: #393939;
  font-weight: bold;
  letter-spacing: 2px;
}

.card-contact {
  background: linear-gradient(to bottom right, #ffffff 40%, #ffff0039);
}

.card-contact h3 {
  color: #393939;
  font-weight: bold;
  letter-spacing: 2px;
}

.card-title {
  font-family: "Markazi Text", serif;
}

.jp-font {
  font-family: "Kosugi Maru", sans-serif;
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
