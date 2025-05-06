<template>
	<div class="home">
		<section>
			<h1>「ITの世界で新しい自分に出会うために挑戦中です。」</h1>
			<p>
				技術力をさらに高め、柔軟に対応できるエンジニアになりたいと思っています
				このポートフォリオサイトでは、私がこれまでに作成した作品や学んできたことをまとめています
			</p>
		</section>

		<section>
			<h2>ページ紹介</h2>
			<article>
				<NuxtLink to="/about">
					<h3>About/自己紹介</h3>
				</NuxtLink>
				<p>My Story Writing</p>
				<div>
					<p>プロフィールやこれまでの経験について</p>
				</div>
			</article>
			<article>
				<NuxtLink to="/skills">
					<h3>Skills/スキル</h3>
				</NuxtLink>
				<p>My Technical Ability</p>
				<div>
					<p>保有資格や専門スキルについて</p>
				</div>
			</article>
			<article>
				<NuxtLink to="/works">
					<h3>Works/作品</h3>
				</NuxtLink>
				<p>My Creative Creations</p>
				<div>
					<p>開発プロジェクトと成果物について</p>
				</div>
			</article>
			<article>
				<NuxtLink to="/skills">
					<h3>Contact/連絡先</h3>
				</NuxtLink>
				<p>My Connection Details</p>
				<div>
					<p>お問い合わせフォームや関連リンクについて</p>
				</div>
			</article>
		</section>
	</div>
</template>

<script setup>
</script>

<style scoped>
.home {
	padding: 20px;
}
</style>