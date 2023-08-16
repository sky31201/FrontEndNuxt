<!-- 主頁面 -->
<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute()
const layoutName = ref('default')
const layouts = [
  { routeName: 'margindeposit', layoutName: 'margindeposit' },
  { routeName: 'overseas', layoutName: 'overseas' },
]
// 依照當前網址設定使用的layout
layouts.forEach((layout) => {
  if (route.path.toLowerCase().search(layout.routeName) === 1)
    layoutName.value = layout.layoutName
})
</script>
