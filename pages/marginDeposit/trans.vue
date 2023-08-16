<template>
  <div class="mb-auto h-10 lg:mx-auto" id="divMargin">
    <MarginDepositModal />
    <!-- 期帳戶資訊 -->
    <MarginDepositSelectAccount class="px-0 lg:mx-auto lg:px-16" />
    <!-- 重新整理 -->
    <MarginDepositReload />
    <!-- 內容 -->
    <MarginDepositStepOne />
  </div>
</template>

<script lang="ts" setup>
import { useWindowStore } from '@/stores/windowStore'
const { setWindowWidth } = useWindowStore()
const { windowWidth } = storeToRefs(useWindowStore())

useHead({
  title: '保證金互轉',
  meta: [{ name: 'description', content: '保證金互轉' }],
  bodyAttrs: {
    class: '',
  },
})
onMounted(() => {
  windowWidth.value = window.innerWidth
  setWindowWidth(window)
})
</script>

<style scoped></style>
