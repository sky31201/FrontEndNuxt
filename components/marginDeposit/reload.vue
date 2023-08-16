<template>
  <div
    class="flex justify-between lg:justify-center text-white h-[38px] rounded lg:rounded-none items-center
    bg-[#151F28] lg:bg-white"
  >
    <div class="text-sm sm:text-base md:text-lg lg:text-xl
    bg-[#151F28] lg:bg-white
    text-gray-400 lg:text-black pt-1 pl-2 lg:pr-8
    ">
      2022/08/05 16:40:23
    </div>
    <div class="flex items-center text-sm pl-1">
      <button
        @click="doReload"
        class="flex items-center justify-center p-3 w-[80px] sm:w-[110px] md:w-[110px] lg:w-[110px] h-[18px]
         bg-[#0C213C] lg:bg-slate-300 rounded"
      >
        <span class="text-white lg:text-black text-sm sm:text-base md:text-lg ">重新整理</span>
      </button>
      <span class="p-2" @click="showModal">
        <img src="@/assets/img/exmark.png" alt="exclamationmark" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useReloadStore } from '@/stores/reloadStore';
import { useModalStore } from '@/stores/modalStore'
const { eventType } = storeToRefs(useReloadStore())
const { modalData } = storeToRefs(useModalStore())

// 重新整理按鈕事件
const doReload = () => {
  /**
   * 0 重新整理線上出金
   * 1 重新整理出入金查詢
   * 2 重新整理入金帳號查詢
   */
  useReloadStore().setReloadEvent()
  // TODO: 呼叫後端Api
  switch (eventType.value) {
    case 0: break
    case 1: break
    case 2: break
  }
  console.log(`重新整理 ${eventType.value}`) // ${activeTab.value}
}
// 設置Modal
const showModal = () => {
  modalData.value.title = '提醒'
  modalData.value.content = '我是內容'
  modalData.value.showButton = false
  useModalStore().setModalShow(true)
}
</script>

<style scoped></style>
