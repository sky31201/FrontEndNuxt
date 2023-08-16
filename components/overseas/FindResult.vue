<!-- 找債券結果顯示 -->
<template>
  <div>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold">查詢結果</h1>
    </div>
    <Loading v-show="useLoadingStore().isShow" />
    <div
      class="p-4 grid mx-auto lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] md:grid-cols-2 md:justify-evenly md:gap-6 md:max-w-[768px] sm:grid-cols-1 sm:justify-evenly sm:gap-6 sm:max-w-[476px]"
    >
      <div class="bg-white" v-for="data in stockList">
        <div class="flex flex-col h-[80px]">
          <div class="text-black flex justify-end text-sm py-2 pr-4">
            <p>更新：{{ data.updateDate }}</p>
          </div>
          <div class="pl-4">
            <h3 class="text-base text-slate-800">{{ data.symbolName }}</h3>
          </div>
        </div>
        <div class="flex gap-3 justify-items-center items-center px-4">
          <div class="basis-1/4 border-r border-gray-300 pr-2">
            <p class="text-sm text-[#909090] text-center">參考現價</p>
            <p class="text-base text-center">{{ data.ystPrice }}元</p>
          </div>
          <div class="basis-1/2 border-r border-gray-300 pr-2">
            <p class="text-sm text-[#909090] text-center">漲跌</p>
            <p class="text-base text-center">{{ data.priceDiff }}元</p>
          </div>
          <div class="basis-1/4">
            <p class="text-sm text-[#909090] mx-auto">殖利率</p>
          </div>
        </div>
        <div class="flex justify-center gap-2 pt-2 pb-8 px-2">
          <div class="basis-1/2 pl-2">
            <button
              class="flex space-x-2 justify-center p-3 w-full h-full bg-white-500 border border-indigo-700 rounded drop-shadow-md hover:shadow-xl duration-100"
            >
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.40039 11.4504V8"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.40039 19.4873V18.0546"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4001 2.43273V1"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4001 16.9041V12.4364"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4004 5.43273V4"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4004 18.5308V17.098"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 3V22H24"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12H6V18H9V12Z"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3H12V12H15V3Z"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6H19V17H22V6Z"
                  stroke="#04327A"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-[#04327a]">近期走勢</span>
            </button>
          </div>
          <div class="basis-1/2 pr-2">
            <button
              class="flex space-x-2 justify-center p-3 w-full bg-[#04327a] text-lg bg-white-500 rounded border border-indigo-700 drop-shadow-md hover:shadow-xl duration-100"
            >
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="#04327a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1084 5.75H23.4077C24.0978 5.75 24.6286 6.42955 24.4162 7.10909L21.9746 14.95C21.8154 15.3682 21.4438 15.6818 20.9661 15.6818H8.49268"
                  stroke="white"
                  stroke-miterlimit="10"
                />
                <path
                  d="M21.2314 17.7727H9.81953C9.34183 17.7727 8.9172 17.4591 8.81104 17.0409L4.98938 4.39091C4.88323 3.97272 4.4586 3.65909 3.98089 3.65909H0"
                  stroke="white"
                  stroke-miterlimit="10"
                />
                <path
                  d="M9.02326 22.4773C9.9027 22.4773 10.6156 21.7752 10.6156 20.9091C10.6156 20.043 9.9027 19.3409 9.02326 19.3409C8.14383 19.3409 7.43091 20.043 7.43091 20.9091C7.43091 21.7752 8.14383 22.4773 9.02326 22.4773Z"
                  stroke="white"
                  stroke-miterlimit="10"
                />
                <path
                  d="M19.639 22.4773C20.5184 22.4773 21.2313 21.7752 21.2313 20.9091C21.2313 20.043 20.5184 19.3409 19.639 19.3409C18.7596 19.3409 18.0466 20.043 18.0466 20.9091C18.0466 21.7752 18.7596 22.4773 19.639 22.4773Z"
                  stroke="white"
                  stroke-miterlimit="10"
                />
                <path
                  d="M11.6773 5.75H5.30786"
                  stroke="white"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.9851 6.79546C16.9851 3.34546 19.8514 0.522736 23.3546 0.522736H19.6391C16.1359 0.522736 13.2696 3.34546 13.2696 6.79546V7.84092H11.1465L15.3928 13.0682L19.1083 7.84092H16.9851V6.79546Z"
                  stroke="white"
                  stroke-miterlimit="10"
                />
              </svg>
              <span class="text-[#fff]">申購</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLoadingStore } from '@/stores/loadingStore'
import { useStockQueryStore } from '@/stores/stockQueryStore';

const store = useStockQueryStore()
const { fetchStockData } = store
const { stockList } = storeToRefs(store)

// 取回美債資料
await fetchStockData()
</script>
