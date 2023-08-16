<template>
  <div class="relative lg:h-96">
    <img
      class="absolute z-0 top-i0 left-0 w-full h-full object-cover object-center"
      src="@/assets/img/landing-bg.jpg"
      alt=""
    />
    <div
      class="bg-deco absolute z-0 top-32 left-0 w-full bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-3/5 xl:w-1/2 bg-primary opacity-80"
    ></div>

    <div
      class="container mx-auto px-4 pt-16 pb-20 lg:pb-0 lg:py-40 relative z-10 flex flex-col lg:flex-row justify-between text-white"
    >
      <h1
        class="text-dark-blue text-3xl font-light tracking-widest md:text-4xl"
      >
        海外債交易專區
      </h1>

      <h2
        class="text-xl font-medium mt-2 text-dark-blue"
        v-if="userData.length === 1"
      >
        {{ userData[0].ID }}
      </h2>

      <select
        class="text-xl font-medium mt-2 block bg-transparent text-dark-blue"
        v-if="userData.length > 1"
      >
        <option v-for="user of userData" :value="user.ID">
          {{ user.ID }}
        </option>
      </select>

      <!-- TODO: 串入真實資料 -->
      <div
        class="flex flex-col items-end mt-28 lg:max-w-[360px] lg:mt-0 lg:ml-10"
      >
        <select class="block mt-3 bg-transparent text-lg font-medium">
          <template v-for="data of userData">
            <option v-for="(item, index) of data.Accounts.OSB" :value="index">
              複{{ item }}
            </option>
          </template>
        </select>
        <NuxtLink
          to="/overseas"
          class="mt-3 px-5 py-3 text-base flex items-center flex-shrink-0 border border-current rounded-lg"
          >海外債區首頁</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserData } from '@/models/Api/KGIAuthVerify/index'

/**
 * 客戶帳戶資訊
 */
const userData = ref<UserData[]>([])

/**
 * 讀取帳戶資訊
 */
onMounted(() => {
  userData.value =
    sessionStorage.getItem('authVerify') !== null
      ? JSON.parse(<string>sessionStorage.getItem('authVerify')).responseData
          .userData
      : []
})
</script>

<style scoped>
.bg-deco {
  clip-path: polygon(0 64px, 100% 0, 100% 100%, 0 100%);

  @media (min-width: 1024px) {
    clip-path: polygon(240px 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
