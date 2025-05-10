<template>
  <div class="skills">
    <div id="title_skill">
      <h1>スキル</h1>
    </div>
    <section>
      <div>
        <h2 class="m-4">資格</h2>
        <p class="fw-bold">基本情報技術者試験</p>
      </div>
      <div>
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
              <td>★★☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
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
      <div>
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
}

section {
  margin-bottom: 60px;
}

section div {
  margin-top: 60px;
}

#title_skill {
  width: 100%;
  max-width: 1080px;
  border-bottom: 1px solid #393939;
  padding-bottom: 30px;
}

table {
  margin: 0 auto;
  /* テーブルを中央揃えに */
  border-collapse: collapse;
  /* テーブルの枠線を重ならないように */
}

th,
td {
  padding: 8px 12px;
  text-align: left;
  /* テーブル内のテキストを左揃えに */
}

th {
  width: 240px;
  /* th の幅を固定 */
}
</style>
