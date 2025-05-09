<template>
  <div class="contact">
    <h1>連絡先</h1>
    <section>
      <h2>メールアドレス</h2>
      <p>example@example.com</p>
    </section>
    <section>
      <h2>SNS</h2>
      <p>GitHub</p>
      <p>X</p>
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
  padding: 20px;
}
</style>
