<template>
  <nav aria-label="breadcrumb" class="breadcrumb">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <NuxtLink v-if="index !== breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.meta?.breadcrumb || crumb.name }}
        </NuxtLink>
        <span v-else aria-current="page">
          {{ crumb.meta?.breadcrumb || crumb.name }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute()

const breadcrumbs = computed(() => {
  const matched = route.matched.filter(r => r.meta?.breadcrumb)
  if (matched.length > 0 && matched[0].path !== '/') {
    return [{ path: '/', name: 'ホーム', meta: { breadcrumb: 'ホーム' } }, ...matched]
  }
  return matched
})

</script>

<style scoped>
.breadcrumb {
  text-align: left;
  /* テキストを左寄せに */
  width: 700px;
  /* 固定幅を設定 */
  margin: 0 auto;
  /* 中央に配置 */
}

.breadcrumb ul {
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: inline;
  /* <li>をインライン表示 */
  list-style: none;
  /* リストスタイルを無効に */
  margin-right: 8px;
  /* アイテム間のスペース */
}

.breadcrumb li+li::before {
  content: "/";
  /* 各アイテムの間にスラッシュ */
  margin: 0 8px;
  color: #999;
}
</style>
