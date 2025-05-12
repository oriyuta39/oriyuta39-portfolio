<template>
  <div>
    <Breadcrumb />
    <div class="contact mb-4">
      <div id="title-contact">
        <h1>連絡先</h1>
      </div>
      <section class="container-contact">
        <h2 class="m-4">メールアドレス</h2>
        <a href="mailto:oriyuta39.dev@gmail.com " class="text-link">oriyuta39.dev@gmail.com</a>
      </section>
      <section class="container-contact">
        <h2 class="m-4">SNS</h2>
        <div class="row justify-content-center">
          <!-- GitHub -->
          <div class="container-sns">
            <a href="https://github.com/oriyuta39" target="_blank" class="sns-item">
              <i class="fa-brands fa-square-github fa-7x" />
            </a>
            <p>GitHub</p>
          </div>
          <!-- Twitter -->
          <div class="container-sns">
            <a href="https://twitter.com/oriyuta39" target="_blank" class="sns-item">
              <i class="fa-brands fa-square-x-twitter fa-7x" />
            </a>
            <p>X</p>
          </div>
        </div>
      </section>
      <section class="container-contact">
        <h2 class="m-4">お問い合わせ</h2>
        <p>準備中</p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'Contact',
})
</script>

<style scoped>
.contact {
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

#title-contact {
  width: 100%;
  max-width: 840px;
  border-top: 2px solid #ffaa39;
  border-bottom: 2px solid #ffaa39;
  padding: 30px;
}

.container-contact {
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  width: 640px;
}

.text-link {
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.text-link:hover {
  color: #39aaff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.container-sns {
  margin: 0 20px;
  width: 120px;
}

.sns-item {
  text-align: center;
  display: block;
  text-decoration: none;
  color: initial;
}

.sns-item p {
  margin-top: 10px;
  font-size: 18px;
}
</style>
