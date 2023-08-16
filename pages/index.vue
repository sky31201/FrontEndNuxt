<template>
  <div class="bg-white">
    <div class="flex flex-col mx-auto container w-[400px]">
      <Loading v-show="isShow" />
      <NuxtLink to="/margindeposit/info">測試未登入出金申請-出入金</NuxtLink>  
      <NuxtLink to="/margindeposit/trans">測試未登入保證金互轉</NuxtLink>
      // TODO: 測試完刪除
      {{ useRuntimeConfig().public.env }}
      <OverseasMocklogin />
      <MarginDepositMocklogin />
      <!-- <OverseasMocklogin
        v-show="useRuntimeConfig().public.env.toLocaleLowerCase() !== 'prod'"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLoadingStore } from '@/stores/loadingStore'

const { isShow } = storeToRefs(useLoadingStore())
</script>

<style scoped></style>
