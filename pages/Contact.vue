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
          <div class="container-sns">
            <a href="https://github.com/oriyuta39" target="_blank" class="sns-item">
              <i class="fa-brands fa-square-github fa-7x" />
              <p>GitHub</p>
            </a>
          </div>
          <!-- Twitter -->
          <div class="container-sns">
            <a href="https://twitter.com/oriyuta39" target="_blank" class="sns-item">
              <i class="fa-brands fa-square-x-twitter fa-7x" />
              <p>X</p>
            </a>
          </div>
        </div>
      </section>
      <!--
      #準備中
      <section class="container-contact">
        <h2 class="m-4">お問い合わせ</h2>
        <p>準備中</p>
      </section>
      -->
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
  color: #393939;
}

#title-contact {
  width: 100%;
  max-width: 840px;
  border: 1px solid #ffaa39;
  border-radius: 50px;
  padding: 30px;
  font-family: "Mochiy Pop One", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom right, #ffffff 50%, #ffff0039);
}

.container-contact {
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  width: 640px;
}

.container-contact h2 {
  font-family: "Mochiy Pop One", sans-serif;
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

.sns-item i {
  transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.39);
  transform: scale(1);
}

.sns-item i:hover {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.50);
  transform: scale(1.02);
}

.sns-item p {
  transition: color 0.3s ease,
}

.sns-item p:hover {
  color: #ff0039;
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
