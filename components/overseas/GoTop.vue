<template>
  <Transition>
    <div
      v-if="showGoTop"
      id="divTop"
      class="flex fixed float-left bottom-24 right-6 w-[40px] h-[40px] bg-[#052a68] border border-indigo-700 rounded justify-center items-center cursor-pointer md:bottom-10"
    >
      <img
        class="p-3"
        src="@/assets/img/ico_arrow_1.png"
        @click="goTop"
        alt="top"
      />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
const showGoTop = ref<boolean>(false)

// 回到最上層
const goTop = () => {
  document.getElementById('app')?.scrollIntoView()
}

/**
 * 頁面滑動處理事件
 */
const handleScroll = () => (showGoTop.value = window.scrollY > 160)

onMounted(() => window.addEventListener('scroll', handleScroll))

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
