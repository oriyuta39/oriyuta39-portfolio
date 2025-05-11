<template>
  <div class="contact mb-4">
    <div id="title-contact">
      <h1>連絡先</h1>
    </div>
    <section class="container-contact">
      <h2 class="m-4">メールアドレス</h2>
      <p>oriyuta39.dev@gmail.com</p>
    </section>
    <section class="container-contact">
      <h2 class="m-4">SNS</h2>
      <div class="row justify-content-center">
        <!-- GitHub -->
        <div class="container-sns">
          <a href="https://github.com/your-github" target="_blank" class="sns-item">
            <FontAwesomeIcon :icon="['fab', 'github-square']" size="7x" />
          </a>
          <p>GitHub</p>
        </div>
        <!-- Twitter -->
        <div class="container-sns">
          <a href="https://twitter.com/your-twitter" target="_blank" class="sns-item">
            <FontAwesomeIcon :icon="['fab', 'square-x-twitter']" size="7x" />
          </a>
          <p>X</p>
        </div>
      </div>
    </section>
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
  max-width: 1080px;
  border-bottom: 2px solid #ffaa39;
  padding: 30px;
}

.container-contact {
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  width: 640px;
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
