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
    return [{ path: '/', name: 'Home', meta: { breadcrumb: 'Home' } }, ...matched]
  }
  return matched
})

</script>

<style scoped>
.breadcrumb {
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
}

.breadcrumb ul {
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: inline;
  list-style: none;
}

.breadcrumb li+li::before {
  content: "/";
  margin: 0 8px;
  color: #999;
}
</style>
