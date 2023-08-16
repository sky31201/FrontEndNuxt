<template>
  <div
    class="relative z-10 mx-4 py-6 md:px-10 md:py-12 max-w-3xl md:mx-auto lg:max-w-4xl flex flex-col md:flex-row md:justify-between items-center bg-white shadow-lg rounded-2xl -mt-16 text-primary"
  >
    
    <!-- TODO: 串上真實資料 -->
    <div class="md:flex flex-wrap items-center">
      <div class="font-bold text-lg md:w-full">債券總參考市值 (TWD)</div>
      <div class="mt-5 flex flex-col items-center md:flex-row">
        <div class="font-medium text-5xl">$ 60,916</div>
        <div
          class="flex items-center mt-3 md:mt-0 md:ml-7 text-lg text-green"
        >
          − $252 /
          <img class="ml-1" src="@/assets/img/icon-pricing-short.svg" />1.40%
        </div>
      </div>
    </div>
      
    <!-- TODO: 需補上轉跳 => 庫存分佈 -->
    <button
      class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"
      v-if="isLogin"
    >
      查看庫存分佈
      <img
        src="@/assets/img/icon-arrow-right.svg"
        alt="查看庫存分佈"
        class="h-4 ml-4 relative top-[-1px]"
      />
    </button>

    <!-- TODO: 需補上轉跳 => 登入 -->
    <button
      @click="doLogin"
      class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"
      v-else
    >
      登入查看您的資產
      <img
        src="@/assets/img/icon-arrow-right.svg"
        alt="登入查看您的資產"
        class="h-4 ml-4 relative top-[-1px]"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useKgiTwPriOltsAPICustomerQueryStore } from '@/stores/api/kgiTwPriOltsAPICustomerQueryStore'
import { Response } from '@/models/Api/KGIAuthVerify/index'
import StorageName from '@/models/StorageName/index'
// TODO: 串接登入狀態
const isLogin = ref(false)
const loginData = ref<Response>()
onMounted(() => {
  if (sessionStorage.getItem(StorageName.AuthVerify)) {
    loginData.value = JSON.parse(
      <string>sessionStorage.getItem(StorageName.AuthVerify)
    ).responseData
    isLogin.value = true
  }
})
const customerStore = useKgiTwPriOltsAPICustomerQueryStore()
/**
 * 取回客戶資料
 */
customerStore.fetchData()

/**
 * @param apVer APP簽章使用, J1 as IOS , J3 as android
 * @param applytype OB複委託海外債 MD 貨出金/互轉
 * @param dirpack 無帳號登入後的頁面紀錄, 登入重導後, 連至客戶上次瀏覽頁面 (訪客登入後導回)
 */
const doLogin = () => {
  // apVer: string, applytype: string, dirpack: string

  const route = useRoute()
  console.log(route)
  console.log(1)
  const urlModel = ref<string>('')
  const url = ref<string>('')
  // iOS Devices (iPhone、iPad)
//   if (apVer === 'J1' || apVer === 'J2') urlModel.value = '?'
//   url.value = `kgi://${urlModel}mode=login;applytype=${applytype};dirpack=${dirpack}`

//   navigateTo(url.value, {
//     replace: true
//   })
}
</script>

<style scoped></style>
