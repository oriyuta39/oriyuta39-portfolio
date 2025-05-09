<template>
  <div class="home">
    <section class="title-box">
      <h1>oriyuta39<br><small>Portfolio</small></h1>
    </section>
    <section>
      <h1>「ITの世界で新しい自分に出会うために挑戦中です。」</h1>
      <p>
        技術力をさらに高め、柔軟に対応できるエンジニアになりたいと思っています
        このポートフォリオサイトでは、私がこれまでに作成した作品や学んできたことをまとめています
      </p>
    </section>

    <section>
      <h2>ページ紹介</h2>
      <article>
        <NuxtLink to="/about">
          <h3>About/自己紹介</h3>
        </NuxtLink>
        <p>My Story Writing</p>
        <div>
          <p>プロフィールやこれまでの経験について</p>
        </div>
      </article>
      <article>
        <NuxtLink to="/skills">
          <h3>Skills/スキル</h3>
        </NuxtLink>
        <p>My Technical Ability</p>
        <div>
          <p>保有資格や専門スキルについて</p>
        </div>
      </article>
      <article>
        <NuxtLink to="/works">
          <h3>Works/作品</h3>
        </NuxtLink>
        <p>My Creative Creations</p>
        <div>
          <p>開発プロジェクトと成果物について</p>
        </div>
      </article>
      <article>
        <NuxtLink to="/skills">
          <h3>Contact/連絡先</h3>
        </NuxtLink>
        <p>My Connection Details</p>
        <div>
          <p>お問い合わせフォームや関連リンクについて</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  min-width: 320px;
  font-family: "Kosugi Maru", sans-serif;
}

.title-box {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.title-box::before {
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

.title-box h1 {
  position: relative;
  z-index: 1;
  font-family: "Tangerine", cursive;
  font-size: 70px;
}
</style>
