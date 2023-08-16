<template>
  <footer class="h-72 bg-[#081827]">
    <div class="w-full">
      <img
        @click="closeBottom"
        class="float-right pr-2"
        src="@/assets/img/close.png"
        alt=""
      />
    </div>
    <!-- 轉出金額 -->
    <div class="flex flex-row items-center text-gray-400 w-full pt-2">
      <div
        class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        轉出金額：
      </div>
      <div class="w-16 lg:w-32">
        <span
          class="text-white pl-2 text-sm sm:text-base md:text-lg lg:text-xl"
          >{{ bottomData.currency }}</span
        >
      </div>
      <div class="px- lg:px-16">
        <input
          placeholder="請輸入"
          v-model="bottomData.amount"
          class="text-right w-36 lg:w-72 bg-slate-100 text-black h-8 rounded-lg pr-5"
        />
      </div>
    </div>
    <!-- 我要換成 -->
    <div
      class="flex flex-row items-center py-4 text-gray-400 w-full"
      v-if="bottomData.currency !== '台幣'"
    >
      <div
        class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        我要換成：
      </div>
      <div class="text-black font-bold">
        <select
          class="select select-bordered select-xs w-18 max-w-xs bg-white"
          @change="doChange($event)"
        >
          <option>{{ bottomData.currency }}</option>
          <option>台幣</option>
        </select>
      </div>
    </div>
    <div class="pt-8" v-else></div>
    <div
      class="flex flex-row flex-nowrap items-center text-gray-400 w-full"
      v-show="!isEnableTransAccount"
    >
      <div
        class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        轉入帳號：
      </div>
      <div class="flex flex-row text-white">
        <span class="pl-2 text-sm sm:text-base md:text-lg lg:text-xl">{{
          bottomData.account.split('-')[0]
        }}</span>
        <span class="pl-4 text-sm sm:text-base md:text-lg lg:text-xl">{{
          bottomData.account.split('-')[1]
        }}</span>
      </div>
    </div>
    <div class="px-4">
      <button
        @click="sendRequest"
        class="btn btn-info btn-block text-white text-sm sm:text-base md:text-lg lg:text-xl"
        :class="isEnableTransAccount ? ` my-4 ` : ` my-8 `"
      >
        送出申請
      </button>
    </div>
    <div
      class="text-red-600 text-center pb-3 text-sm sm:text-sm md:text-base lg:text-lg"
    >
      <span>*如有換匯申請，實際出金金額以出金時銀行匯率為準</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useBottomStore } from '@/stores/bottomStore'
import { useModalStore } from '@/stores/modalStore'
import { useAccountListStore } from '@/stores/accountListStore';
import RouteEnum from '@/models/RouteEnum';

const bottomStore = useBottomStore()
const { accountData } = storeToRefs(useAccountListStore())
const { isShowBottom, bottomData } = storeToRefs(bottomStore)

const { modalData } = storeToRefs(useModalStore())

const route = useRoute()

/**
 * 是否顯示轉入帳號
 */
 const isEnableTransAccount = ref(false)
isEnableTransAccount.value =
  route.path.toLowerCase().search(RouteEnum[RouteEnum.Trans].toLocaleLowerCase()) !== -1
  ? true
  : false
onUpdated(() => {
  if (bottomData.value.currency !== '台幣') {
    document.querySelector('select')!.selectedIndex = 0
    selectCurrency.value = bottomData.value.currency
  }
})
/**
 * 點擊申請後的幣別
 */
const selectCurrency = ref('')

/**
 * 監聽申請按鈕點擊後的幣別值
 */
// watch(bottomData, (newValue, oldValue) => {
//   selectCurrency.value = newValue.currency
// })
const doChange = (e: Event) => {
  selectCurrency.value = (e.target as HTMLInputElement).value
}
/**
 * 關閉底部輸入框
 */
const closeBottom = () => {
  isShowBottom.value = false
  useBottomStore().setBottomShow(false)
  document.getElementById('divMargin')?.scrollIntoView()
}
/**
 * 送出申請
 */
const sendRequest = () => {
  if (!isNumber(bottomData.value.amount.toString())) {
    modalData.value.title = '提醒'
    modalData.value.content = '轉出金額僅能輸入數字!'
    modalData.value.showButton = false
    useModalStore().setModalShow(true)
    return
  }
  console.log({
    selectCurrency: selectCurrency.value,
    selectAmount: bottomData.value.amount,
    selectAccount: bottomData.value.account,
    accountDataInfo: accountData.value.info,
    accountDataTitle: accountData.value.title
  })
  // TODO: 呼叫Api then closeBottom
  closeBottom()
}
</script>

<style scoped></style>
