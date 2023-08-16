<!-- 預設使用模版 -->
<template>
  <div id="app">
    <slot name="default" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'offshoreBond',
  meta: [{ name: 'description', content: '凱基專區' }],
  bodyAttrs: { },
})
</script>
