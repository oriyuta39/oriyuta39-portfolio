<template>
  <div>
    <Breadcrumb />
    <div class="skills">
      <div id="title-skill">
        <h1>スキル</h1>
      </div>
      <section id="container-skills" class="row mb-4">
        <div class="container-table">
          <h2 class="m-4">プログラミング言語</h2>
          <table>
            <tbody>
              <tr>
                <th>Html/CSS</th>
                <td>★★☆☆☆</td>
              </tr>
              <tr>
                <th>JavaScript</th>
                <td>★★☆☆☆</td>
              </tr>
              <tr>
                <th>Python</th>
                <td>★★☆☆☆</td>
              </tr>
              <tr>
                <th>Java</th>
                <td>★☆☆☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container-table">
          <h2 class="m-4">フレームワーク</h2>
          <table>
            <tbody>
              <tr>
                <th>Nuxt.js</th>
                <td>★★☆☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container-table">
          <h2 class="m-4">資格</h2>
          <table>
            <tbody>
              <tr>
                <th class="fw-bold text-center">基本情報技術者試験</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container-table">
          <h2 class="m-4">ツール</h2>
          <table>
            <tbody>
              <tr>
                <th>Microsoft Office</th>
                <td>★☆☆☆☆</td>
              </tr>
              <tr>
                <th>Adobe Creative Cloud</th>
                <td>★★☆☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'Skills',
})

</script>

<style scoped>
.skills {
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

#title-skill {
  width: 100%;
  max-width: 840px;
  border: 1px solid #ffaa39;
  border-radius: 50px;
  padding: 30px;
  font-family: "Mochiy Pop One", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom right, #ffffff 50%, #00ffff39);
}

#container-skills {
  max-width: 1080px;
  justify-content: center;
}

.container-table {
  max-width: 380px;
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  margin: 0 20px 0 20px;
}

.container-table h2 {
  font-family: "Mochiy Pop One", sans-serif;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  width: 200px;
}
</style>
