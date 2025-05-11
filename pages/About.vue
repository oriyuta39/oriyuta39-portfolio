<template>
  <div class="about">
    <div id="title-about">
      <h1>自己紹介</h1>
    </div>
    <section class="container-about">
      <h2 class="m-4">プロフィール</h2>
      <table>
        <tbody>
          <tr>
            <th>氏名:</th>
            <td>Orihara, Yuta</td>
          </tr>
          <tr>
            <th>生年月日:</th>
            <td>2002/06/11</td>
          </tr>
          <tr>
            <th>居住地:</th>
            <td>東京都</td>
          </tr>
          <tr>
            <th>所属:</th>
            <td>専門学校在学中(2027年卒業予定)</td>
          </tr>
          <tr>
            <th>趣味:</th>
            <td>ゲーム、音楽鑑賞</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="container-about mb-5">
      <h2 class="m-4">コメント</h2>
      <div>
        <p>現在、IT系専門学校に在学し、IT技術の習得に積極的に取り組んでいます。<br>
          中学卒業後、しばらくの間は自分の進路について模索する時期が続いていましたが、<br>
          「将来につながる力を身につけたい」という思いからIT分野の学習に取り組むようになりました。<br>
          現在は、HTML/CSS・JavaScript・Python・Javaなどを中心に学習を進めており、<br>
          国家資格の応用情報技術者試験にも挑戦しています。<br>
          まだ学習の途中段階ではありますが、少しずつでも成長していけるよう日々努力を続けています。<br>
          小さな積み重ねを大切にしながら学ぶことで、自分自身の成長やスキルの向上を日々実感しています。<br>
          今は、チームの一員として実務経験を積みながら、スキルを磨きたいと考え、IT企業への就職を目指しています。<br>
          一緒に働かせていただける企業様とのご縁を心よりお待ちしております。</p>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  breadcrumb: 'About',
})
</script>

<style scoped>
.about {
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

#title-about {
  width: 100%;
  max-width: 1080px;
  border-bottom: 2px solid #ffaa39;
  padding: 30px;
}

.container-about {
  max-width: 820px;
  border-bottom: 1px solid #ffaa39;
  padding: 20px 0px 40px 0px;
  margin: 0 20px 0px 20px;
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
  width: 120px;
}
</style>
