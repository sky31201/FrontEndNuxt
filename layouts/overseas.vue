<!-- 海外債使用模版 -->
<template>
  <OverseasHeader />
  <OverseasCarTop v-if='cartVisible' />
  <div id="app" class="bg-[#f6f6f6]">
    <OverseasNavBar />
    <slot name="default" />
  </div>
  <OverseasFooter />
  <OverseasGoTop />
</template>

<script lang="ts" setup>
useHead({
  title: '海外投資',
  meta: [{ name: 'description', content: '凱基專區' }],
  bodyAttrs: {},
})

const cartVisible = useCartVisible();

</script>
<style scoped>
</style>