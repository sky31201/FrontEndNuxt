<template>
  <div>
    <!-- 標題 -->
    <div
      class="grid grid-cols-3 h-10 items-center text-center font-bold w-full bg-[#151F28] lg:bg-slate-300 text-gray-400 lg:text-black text-sm sm:text-base md:text-lg lg:text-xl"
    >
      <div @click="showData(false)">幣別</div>
      <div @click="showData(true)">可出金金額</div>
      <div></div>
    </div>
    <!-- 表格內容 -->
    <div
      v-if="windowWidth > 1024"
      data-theme="light"
      class="p-4 mx-auto grid lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] md:grid-cols-2 md:justify-evenly md:gap-6 md:max-w-[768px] sm:grid-cols-1 sm:justify-evenly sm:gap-6 sm:max-w-[476px]"
    >
      <div
        class="flex gap-3 justify-items-center items-center px-4"
        v-for="(item, index) in oneDataList"
      >
        <div class="card w-96 bg-base-100 shadow-xl grid grid-col">
          <div class="card-body text-left">
            <h2 class="card-title">幣別: {{ item.currency }}</h2>
            <p>可出金金額: {{ toThousands(item.amount) }}</p>
            <div class="card-actions w-full">
              <button
                class="btn btn-primary btn-block text-lg"
                @click="showTrans(index)"
              >
                申請
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 申請 -->
    <div
      v-else-if="windowWidth > 100"
      data-theme="drak"
      class="grid grid-cols-3 lg:grid-cols-4 lg:grid-flow-col h-16 lg:w-72 lg:m-4 items-center text-center bg-black lg:bg-white text-gray-400 lg:text-black pt-1 text-sm sm:text-base md:text-lg lg:text-xl"
      v-for="(item, index) in oneDataList"
    >
      <div>{{ item.currency }}</div>
      <div>{{ toThousands(item.amount) }}</div>
      <button
        @click="showTrans(index)"
        class="bg-white text-black w-20 rounded h-18 font-bold hover:bg-slate-200"
      >
        <span class="text-black text-sm sm:text-base md:text-lg lg:text-xl"
          >申請</span
        >
      </button>
      <div class="border-t w-screen"></div>
    </div>

    <div
      v-show="oneDataList.length === 0"
      class="h-screen flex items-center justify-center"
    >
      <div class="flex flex-col">
        <img
          class="mx-auto w-[32px] h-[32px] lg: w-[64px] lg: h-[64px]"
          alt="無資料"
          src="@/assets/img/nodata.png"
        />
        <span class="pt-2 text-center text-sm lg:text-lg"
          >目前查無相關資料</span
        >
        <span class="text-red-500 font-bold text-center">⬇⬇測試⬇⬇</span>
        <span class="text-red-500 font-bold">點可出金金額可以摸擬有資料</span>
        <span class="text-red-500 font-bold">點幣別可以摸擬無資料</span>
        <span class="text-red-500 font-bold text-center">⬆⬆測試⬆⬆</span>
      </div>
    </div>
    <!-- 底部輸入出金選項 -->
    <transition>
      <MarginDepositBottom v-show="isShowBottom" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useBottomStore } from '@/stores/bottomStore'
import { useOneStore } from '@/stores/oneStore'
import { useWindowStore } from '@/stores/windowStore'
const { windowWidth } = storeToRefs(useWindowStore())
const { setBottomShow, setBottomData } = useBottomStore()
const { queryOneDataList, cleanOneDataList } = useOneStore()
const { isShowBottom } = storeToRefs(useBottomStore())
const { oneDataList } = storeToRefs(useOneStore())

queryOneDataList()

const showData = (isShow: boolean) => {
  isShow ? queryOneDataList() : cleanOneDataList()
}
showData(false)
// 是否顯示出金申請
const showTrans = (index: number) => {
  // 沒顯示要改為顯示
  if (!isShowBottom.value) {
    setBottomShow(!isShowBottom.value)
  }
  // 重新帶入值
  setBottomData(oneDataList.value[index])

  const height = document.body.scrollHeight + 256 + 40
  nextTick(async () => {
    window.scrollTo(0, height)
  })
}
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
