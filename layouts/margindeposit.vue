<!-- 出入金模版 -->
<template>
  <div id="app" class="">
    <slot name="default" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: '出金入金帳務',
  meta: [{ name: 'description', content: '凱基專區' }],
  bodyAttrs: {},
})
</script>
<style scoped></style>
