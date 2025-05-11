<template>
  <div class="about">
    <section>
      <h1>自己紹介</h1>
      <section>
        <h2>プロフィール</h2>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>Orihara, Yuta</td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>2002/06/11</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>Tokyo</td>
            </tr>
            <tr>
              <th>Role:</th>
              <td>Technical school student</td>
            </tr>
            <tr>
              <th>Hobbies:</th>
              <td>Listening to game music</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>コメント</h2>
        <div>
          <p>現在、IT系専門学校に在学し、IT技術の習得に積極的に取り組んでいます。</p>
          <p>中学卒業後、しばらくの間は自分の進路について模索する時期が続いていましたが、
            「将来につながる力を身につけたい」という思いからIT分野の学習に取り組むようになりました。</p>
          <p>現在は、HTML/CSS・JavaScript・Python・Javaなどを中心に学習を進めており、
            国家資格の応用情報技術者試験にも挑戦しています。</p>
          <p>まだ学習の途中段階ではありますが、少しずつでも成長していけるよう日々努力を続けています。
            小さな積み重ねを大切にしながら学ぶことで、自分自身の成長やスキルの向上を日々実感しています。</p>
          <p>今は、チームの一員として実務経験を積みながら、スキルを磨きたいと考え、IT企業への就職を目指しています。
            一緒に働かせていただける企業様とのご縁を心よりお待ちしております。</p>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'About',
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
  width: 150px;
  /* th の幅を固定 */
}
</style>
