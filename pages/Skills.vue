<template>
  <div class="skills">
    <h1>スキル</h1>
    <section>
      <section>
        <p>Qualifications</p>
        <p>基本情報技術者試験</p>
      </section>
      <section>
        <p>Programming Languages</p>
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
      </section>
      <section>
        <p>Frameworks</p>
        <table>
          <tbody>
            <tr>
              <th>Nuxt.js</th>
              <td>★★☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <p>Tools</p>
        <table>
          <tbody>
            <tr>
              <th>Microsoft Office</th>
              <td>★★☆☆☆</td>
            </tr>
            <tr>
              <th>Adobe Creative Cloud</th>
              <td>★★☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'Skills'
})
</script>

<style scoped>
section {
  text-align: center;
  /* セクション全体を中央揃えに */
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