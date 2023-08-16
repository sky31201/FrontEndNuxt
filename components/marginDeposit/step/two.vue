<template>
  <div>
    <!-- 標題 v-show="windowWidth > 0 && windowWidth < 1024" -->
    <div
      class="grid grid-cols-5 h-10 items-center text-center font-bold w-full bg-[#151F28] lg:bg-slate-300 text-gray-400 lg:text-black text-sm sm:text-base md:text-lg lg:text-xl"
    >
      <div></div>
      <div @click="showData(true)">申請時間</div>
      <div @click="showData(false)">存提類別</div>
      <div>金額</div>
      <div>幣別</div>
    </div>
    <!-- 表格內容 -->
    <div
      v-if="windowWidth > 1024 && twoDataList.length > 0"
      data-theme="light"
      class="p-4 mx-auto grid lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] md:grid-cols-2 md:justify-evenly md:gap-6 md:max-w-[768px] sm:grid-cols-1 sm:justify-evenly sm:gap-6 sm:max-w-[476px]"
    >
      <div
        class="flex gap-3 justify-items-center items-center px-4"
        v-for="(item, index) in twoDataList"
      >
        <div class="card w-96 bg-base-100 shadow-xl grid grid-col">
          <div class="card-body text-left">
            <h2 class="card-title">申請時間: {{ item.time }}</h2>
            <p>金額: {{ toThousands(item.amount) }}</p>
            <p>存提類別: {{ toThousands(item.amount) }}</p>
            <p>幣別: {{ item.currency }}</p>
            <div class="card-actions w-full">
              <button
                class="btn btn-primary btn-block text-lg"
                @click="doCancel(index)"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else-if="windowWidth > 100"
      data-theme="drak"
      class="grid grid-cols-5 lg:grid-flow-col h-16 lg:w-72 lg:m-4 items-center text-center bg-black lg:bg-white text-gray-400 lg:text-black pt-1 text-sm sm:text-base md:text-lg lg:text-xl"
      v-for="(item, index) in twoDataList"
    >
      <div>
        <button
          @click="doCancel(index)"
          class="bg-white text-black w-20 rounded h-18 font-bold hover:bg-slate-200"
        >
          <span class="text-black text-sm sm:text-base md:text-lg lg:text-xl"
            >取消</span
          >
        </button>
      </div>
      <div>{{ item.currency }}</div>
      <div>{{ item.currency }}</div>
      <div>{{ item.currency }}</div>
      <div>{{ toThousands(item.amount) }}</div>
      <div class="border-t w-screen"></div>
    </div>
    <div
      v-show="twoDataList.length === 0"
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
        <span class="text-red-500 font-bold">點申請時間可以摸擬有資料</span>
        <span class="text-red-500 font-bold">點存提類別可以摸擬無資料</span>
        <span class="text-red-500 font-bold text-center">⬆⬆測試⬆⬆</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModalEnum from '@/models/ModalEnum'
import { useModalStore } from '@/stores/modalStore'
import { useTwoStore } from '@/stores/twoStore'
import { useWindowStore } from '@/stores/windowStore'
const { queryTwoDataList, cleanTwoDataList } = useTwoStore()
const { windowWidth } = storeToRefs(useWindowStore())
const { twoDataList } = storeToRefs(useTwoStore())
const { modalData } = storeToRefs(useModalStore())

queryTwoDataList()
const showData = (isShow: boolean) => {
  isShow ? queryTwoDataList() : cleanTwoDataList()
}
showData(false)
/**
 * 取消按鈕點擊事件(要跳confirm?)
 * @param index 
 */
const doCancel = (index: number) => {
  console.log(index)
  modalData.value.title = '提醒'
  modalData.value.content = '是否確定要取消?'
  modalData.value.showButton = true
  modalData.value.modalType = ModalEnum.ChuRuJin
  useModalStore().setModalShow(true)
}
</script>

<style scoped></style>
