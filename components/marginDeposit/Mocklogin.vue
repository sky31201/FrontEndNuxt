<template>
  <div class="bg-slate-300 rounded-2xl shadow-xl container mx-auto w-[400px]">
    <div
      class="p-2 bg-blue-grey rounded-sm mx-4 text-base font-medium text-dark-blue mt-5"
    >
      applytype
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.applytype"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      orign
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.orign"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      orignolts
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.orignolts"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      orgclient
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.orgclient"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      orgserver
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.orgserver"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      trust_seq
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.trust_seq"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      idno
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.idno"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      idaccounts
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.idaccounts"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      stock
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.stock"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      adflag
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.adflag"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      uitype
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.uitype"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      dirpack
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.dirpack"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      syncert
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.syncert"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      apver
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.apver"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      verno
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="authVerifyStoreRef.postData.value.verno"
        />
      </div>
    </div>
    <div class="flex justify-center gap-2 mt-5 pb-4 px-4">
      <button
        class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-2 rounded-xl"
        @click="doLoginInfo"
      >
        出金申請-出入金
      </button>
      <button
        class="flex-1 text-white font-medium btn-info px-5 py-2 rounded-xl"
        @click="doLoginTrans"
      >
        保證金互轉
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useKgiTestLoginStore } from '@/stores/api/kgiTestLoginStore'
import { useKgiAuthVerifyStore } from '@/stores/api/kgiAuthVerifyStore'
const testLoginStore = useKgiTestLoginStore()
const authVerifyStore = useKgiAuthVerifyStore()
const testLoginStoreRef = storeToRefs(useKgiTestLoginStore())
const authVerifyStoreRef = storeToRefs(useKgiAuthVerifyStore())

/**
 * 模擬登入
 */
const doLoginInfo = () => {
  testLoginStore.fetchData().then(async (res) => {
    authVerifyStoreRef.postData.value.applytype = <string>(
      testLoginStoreRef.responseData.value?.postData.applytype
    )
    authVerifyStoreRef.postData.value.orign = <string>(
      testLoginStoreRef.responseData.value?.postData.orign
    )
    authVerifyStoreRef.postData.value.orgclient = <string>(
      testLoginStoreRef.responseData.value?.postData.orgclient
    )
    authVerifyStoreRef.postData.value.orgserver = <string>(
      testLoginStoreRef.responseData.value?.postData.orgserver
    )
    authVerifyStoreRef.postData.value.trust_seq = <string>(
      testLoginStoreRef.responseData.value?.postData.trust_seq
    )
    authVerifyStoreRef.postData.value.idaccounts = <string>(
      testLoginStoreRef.responseData.value?.postData.idaccounts
    )
    authVerifyStore.fetchData().then(async (s) => {
    // 有資料
    if (s.data.value?.token) {
      await navigateTo({
        path: '/margindeposit/info',
        query: {
          token: s.data.value?.token
        }
      })
    }
  })
  })
}

const doLoginTrans = () => {
  testLoginStore.fetchData().then(async (res) => {
    authVerifyStoreRef.postData.value.applytype = <string>(
      testLoginStoreRef.responseData.value?.postData.applytype
    )
    authVerifyStoreRef.postData.value.orign = <string>(
      testLoginStoreRef.responseData.value?.postData.orign
    )
    authVerifyStoreRef.postData.value.orgclient = <string>(
      testLoginStoreRef.responseData.value?.postData.orgclient
    )
    authVerifyStoreRef.postData.value.orgserver = <string>(
      testLoginStoreRef.responseData.value?.postData.orgserver
    )
    authVerifyStoreRef.postData.value.trust_seq = <string>(
      testLoginStoreRef.responseData.value?.postData.trust_seq
    )
    authVerifyStoreRef.postData.value.idaccounts = <string>(
      testLoginStoreRef.responseData.value?.postData.idaccounts
    )
    authVerifyStore.fetchData().then(async (s) => {
    // 有資料
    if (s.data.value?.token) {
      await navigateTo({
        path: '/margindeposit/trans',
        query: {
          token: s.data.value?.token
        }
      })
    }
  })
  })
}

</script>

<style scoped></style>
