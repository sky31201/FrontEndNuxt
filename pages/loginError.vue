<template>
    <div class="bg-white py-24">
      <OverseasHeader />
      <div class="bg-white py-24">
        <div class="flex flex-col items-center">
          <p class="my-8 text-3xl text-gray-800">使用者未登入</p>
          <button @click="handleError">返回登入頁</button>
        </div>
      </div>
      <OverseasFooter />
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['error'])
  const route = useRoute()
  const handleError = () => {
    clearError({ redirect: '/' })
  }
  </script>