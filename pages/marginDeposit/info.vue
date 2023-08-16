<template>
  <div class="mb-auto h-10 lg:mx-auto" id="divMargin">
    <MarginDepositModal />
    <MarginDepositDateModal />
    <!-- 上方導覽列 -->
    <div class="p-2 bg-[#151F28] lg:bg-white text-gray-400 lg:text-black">
      <div
        class="grid grid-cols-3 justify-around text-center text-[#5B8EDD] w-full border lg:border-0 border-sky-600"
      >
        <div
          class="p-1 font-bold border-r-2 lg:border-r-0 border-sky-600 text-sm lg:text-lg"
          :class="
            activeTab === index
              ? ` text-[#fff] lg:text-black bg-sky-600 lg:bg-white lg:border-b-2`
              : ` text-[#6489C6] lg:text-black`
          "
          v-for="(tab, index) in tabs"
          @click="setActiveTab(index)"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <!-- 期帳戶資訊 -->
    <MarginDepositSelectAccount class=" px-0 lg:mx-auto lg:px-16" />
    <!-- 日期區間 activeTab === 1才顯示 -->
    <div
      class="grid grid-cols-4 h-10 gap-2 items-center text-center font-bold w-full px-0 lg:mx-auto lg:px-16
      bg-[#151F28] lg:bg-white text-sm sm:text-base md:text-lg lg:text-xl"
      v-show="activeTab === 1"
    >
      <div
        class="p-1 border 
        text-sm
        lg:text-lg
        "
        :class="
          activeMonth === index
            ? ` text-[#5D7093] lg:text-black  border-[#5D7093]`
            : ` text-[#8D9BA8] border-[#8D9BA8]`
        "
        v-for="(tab, index) in months"
        @click="queryHistory(index)"
      >
        {{ tab }}
      </div>
    </div>
    <!-- 重新整理 -->
    <MarginDepositReload class="" v-show="activeTab === 0 || activeTab === 1" />
    <!-- 內容 -->
    <div class="
    bg-[#151F28] lg:bg-white">
      <div v-show="activeTab === 0">
        <MarginDepositStepOne />
      </div>
      <div v-show="activeTab === 1">
        <MarginDepositStepTwo />
      </div>
      <div v-show="activeTab === 2">
        <MarginDepositStepThree />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useReloadStore } from '@/stores/reloadStore'
import { useWindowStore } from '@/stores/windowStore'
import { useDateModalStore } from '@/stores/dateModalStore'
const { setDateModalShow } = useDateModalStore()
const { eventType } = storeToRefs(useReloadStore())
const { setWindowWidth } = useWindowStore()
const { windowWidth } = storeToRefs(useWindowStore())

const tabs = ref<string[]>(['線上出金', '出入金查詢', '入金帳號查詢'])
const months = ref<string[]>(['近一日', '近三日', '近一月', '選擇區間'])
// 當前索引，預設0
const activeTab = ref<number>(0)
const activeMonth = ref<number>(0)

useHead({
  title: '線上出金',
  meta: [{ name: 'description', content: '線上出金' }],
  bodyAttrs: {
    class: '',
  },
})
/**
 * 重新整理按鈕點擊事件
 */
const setActiveTab = (index: number) => {
  activeTab.value = index
  eventType.value = index
  /**
   * 0 重新整理線上出金
   * 1 重新整理出入金查詢
   * 2 重新整理入金帳號查詢
   */
  console.log(`重新整理 ${activeTab.value}`)
}
/**
 * 出入金查詢申請紀錄
 * @param index 點擊的日期區間
 */
const queryHistory = (index: number) => {
  activeMonth.value = index
  // TODO: 要顯示選擇區間Modal
  if (activeMonth.value === 3) {
    setDateModalShow(true)
  }
  console.log(`queryHistory ${activeMonth.value}`)
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  setWindowWidth(window)
})


</script>

<style scoped></style>
