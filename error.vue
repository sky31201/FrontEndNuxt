<template>
  <div class="bg-white py-24">
    <OverseasHeader />
    <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-8xl font-semibold text-red-500">404</h1>
        <p class="my-8 text-3xl text-gray-800">Not Found</p>
        <button @click="handleError">返回首頁</button>
      </div>
    </div>
    <OverseasFooter />
  </div>
</template>

<script setup>
const props = defineProps(['error'])
const route = useRoute()
const handleError = () => {
  clearError({ redirect: '/overseas' })
}
</script>
