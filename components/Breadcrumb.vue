<template>
  <nav v-if="!isHomePage" aria-label="breadcrumb" class="breadcrumb bi bi-house">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <NuxtLink v-if="index !== breadcrumbs.length - 1" :to="crumb.path">
          <i class="fas fa-house" />
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

const isHomePage = computed(() => route.path === '/')

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
  padding: 10px;
}

.breadcrumb a {
  text-decoration: none;
  color: #393939;
  transition: color 0.2s linear;
}

.breadcrumb li:hover a {
  color: #ff0039;
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
