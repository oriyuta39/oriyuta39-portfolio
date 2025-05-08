<template>
	<div class="about">
		<section>
			<h1>自己紹介</h1>
			<section>
				<h2>基本情報</h2>
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
							<td>Playing games, Listening to music</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h2>コメント</h2>
				<div>
					<p>現在、情報系専門学校に在学し、IT分野の技術を幅広く学んでいます。</p>
					<p>中学卒業以降、しばらくの間、自分の進路に迷う時期が続いていましたが、
						「新しいことに挑戦したい」という思いから、ITの世界に興味を持ち、学び始めました。</p>
					<p>現在は、HTML/CSS・JavaScript・Python・Javaなどを中心に学習を進めており、
						国家資格の応用情報技術者試験の合格も目指しています。</p>
					<p>まだ学習の途中段階ではありますが、少しずつでも成長していけるよう日々努力を続けています。
						これまでの学習で「自分の手で誰かの役に立つものを作る」喜びを知りました。</p>
					<p>今は、チームの一員として現場で経験を積みながら、スキルを磨きたいと考え、IT企業へ就職する決意をしました。
						一緒に働かせていただける企業様を募集しています。</p>
				</div>
			</section>
		</section>
	</div>
</template>

<script setup>
definePageMeta({
	breadcrumb: 'About'
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
