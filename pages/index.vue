<template>
  <div class="home">
    <section id="title-box">
      <h1>oriyuta39 - portfolio</h1>
    </section>

    <section id="about-site" class="">
      <h2 class="p-3">Rewriting My Story</h2>
      <p class="p-3 mb-5">
        とあるIT系専門学校に通う学生のポートフォリオサイトです。<br>
        私がこれまでに作成した作品や学んできたことをまとめています。
      </p>
    </section>

    <section>
      <h2 class="pt-2">ページ紹介</h2>
      <div id="container_pages" class="row g-3">
        <div class="col">
          <NuxtLink to="/about">
            <div class="card">
              <div class="card-body">
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
              <div class="card-body">
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
              <div class="card-body">
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
              <div class="card-body">
                <h3 class="card-title mt-4">Contact / 連絡先</h3>
                <h4 class="card-title small">My Connection Details</h4>
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

section {
  margin-bottom: 60px;
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
}

#about-site {
  width: 100%;
  max-width: 1080px;
  border-bottom: 1px solid #393939;
  margin-bottom: 60px;
}

#about-site h2 {
  font-family: "Tangerine", cursive;
  font-size: 80px;
  color: lightcoral;
}

#container_pages {
  padding: 10px;
  max-width: 1080px;
}

.card {
  width: 450px;
  height: 220px;
  overflow: hidden;
  background-color: #f0808011;
}

.card h3,
.card h4 {
  color: skyblue;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.card-title {
  font-family: "Markazi Text", serif;
}

@media (max-width: 520px) {
  .card {
    width: 370px;
  }
}
</style>
