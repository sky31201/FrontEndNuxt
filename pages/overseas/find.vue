<!-- 找債券 -->
<template>
  <div class="bg-white">
    <OverseasFindHead />
    <OverseasFindFeatureButtons />
    <OverseasFindSearch />
    <OverseasFindSearchResult />
    <OverseasModal />
    <OverseasFindBondDetail />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: '凱基專區找債券',
  meta: [{ name: 'description', content: '凱基專區找債券' }]
})
definePageMeta({
  layout: 'overseas'
})
</script>

<style scoped></style>
