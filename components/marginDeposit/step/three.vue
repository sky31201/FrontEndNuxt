<template>
  <div>
    <!-- 標題 -->
    <div
      v-show="windowWidth > 0 && windowWidth < 1024"
      class="grid grid-cols-3 h-10 items-center text-center font-bold w-full bg-[#151F28] lg:bg-slate-300 text-gray-400 lg:text-black text-sm sm:text-base md:text-lg lg:text-xl"
    >
      <div>約定入金銀行</div>
      <div>帳號</div>
      <div>幣別</div>
    </div>
    <!-- 表格內容 -->
    <div
      v-if="windowWidth > 1024"
      data-theme="light"
      class="p-4 mx-auto grid 
      lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] 
      md:grid-cols-2 md:justify-evenly md:gap-6 md:max-w-[768px] 
      sm:grid-cols-1 sm:justify-evenly sm:gap-6 sm:max-w-[476px]"
    >
      <div
        class="flex gap-3 justify-items-center items-center px-4"
        v-for="(item, index) in testData"
      >
        <div class="card w-96 bg-base-100 shadow-xl grid grid-col">
          <div class="card-body text-left">
            <h2 class="card-title">約定入金銀行:</h2>
            <p class="text-lg font-bold">{{ item.account.split('-')[0] }}</p>
            <p>帳號: {{ item.account.split('-')[1] }}</p>
            <p>幣別: {{ item.currency }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 申請 -->
    <div
      v-else-if="windowWidth > 100"
      data-theme="drak"
      class="grid grid-cols-3 lg:grid-cols-4 lg:grid-flow-col h-16 lg:w-72 lg:m-4 items-center text-center bg-black lg:bg-white text-gray-400 lg:text-black pt-1 text-sm sm:text-base md:text-lg lg:text-xl"
      v-for="(item, index) in testData"
    >
      <div>{{ item.account.split('-')[0] }}</div>
      <div>{{ item.account.split('-')[1] }}</div>
      <div>{{ item.currency }}</div>

      <div class="border-t w-screen"></div>
    </div>
    <div class="h-[100px] lg:bg-white"></div>
    <!-- 查詢保證金入金帳號 -->
    <transition>
      <footer class="h-16 bg-[#081827] lg:bg-white">
        <div class="px-6">
          <a href="https://www.kgif.com.tw/zh-tw/margin-deposit" target="_self"
          class="btn btn-block botder-2 border-slate-100 text-white
          text-sm sm:text-base md:text-lg lg:text-xl
          ">查詢保證金入金帳號</a>
        </div>
      </footer>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useWindowStore } from '@/stores/windowStore'
const { windowWidth } = storeToRefs(useWindowStore())

const testData = ref([
  { currency: '台幣', amount: 1000000, account: '凱基大安分行-6040********95' },
  { currency: '美元', amount: 400.35, account: '凱基美元分行-4060********59' },
  { currency: '日圓', amount: 700.35, account: '凱基日圓分行-1060********59' },
  { currency: '港幣', amount: 5200.35, account: '凱基港幣分行-2060********59' },
  { currency: '歐元', amount: 2300.35, account: '凱基歐元分行-3060********59' },
  { currency: '英鎊', amount: 8100.35, account: '凱基英鎊分行-5060********59' },
  { currency: '新幣', amount: 3400.35, account: '凱基新幣分行-8060********59' },
])
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
