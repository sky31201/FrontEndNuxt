<template>
  <div class="bg-slate-300 rounded-2xl shadow-xl container mx-auto w-[400px]">
    <OverseasModal />
    <div
      class="p-2 bg-blue-grey rounded-sm mx-4 text-base font-medium text-dark-blue mt-5"
    >
      IDs
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="testLoginStoreRef.postData.value.IDs"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      Orign
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="testLoginStoreRef.postData.value.Orign"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      ApplyType
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="testLoginStoreRef.postData.value.ApplyType"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      WithOSB
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="testLoginStoreRef.postData.value.WithOSB"
        />
      </div>
    </div>

    <div
      class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"
    >
      PWD
      <div>
        <input
          type="text"
          class="bg-slate-700 text-slate-100 w-full rounded"
          v-model="testLoginStoreRef.postData.value.PWD"
        />
      </div>
    </div>

    <div class="flex justify-center gap-2 mt-5 pb-4 px-4">
      <button
        class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-2 rounded-xl"
        @click="doLogin"
      >
        前往海外債(登入版)
      </button>
      <button
        class="flex-1 text-white font-medium btn-info px-5 py-2 rounded-xl"
        @click="showModal"
      >
        前往海外債(免登版開發中)
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useKgiTestLoginStore } from '@/stores/api/kgiTestLoginStore'
import { useKgiAuthVerifyStore } from '@/stores/api/kgiAuthVerifyStore'
import { useModalStore } from '@/stores/modalStore'
const testLoginStore = useKgiTestLoginStore()
const authVerifyStore = useKgiAuthVerifyStore()
const testLoginStoreRef = storeToRefs(useKgiTestLoginStore())
const authVerifyStoreRef = storeToRefs(useKgiAuthVerifyStore())
const { modalData } = storeToRefs(useModalStore())

/**
 * 模擬登入
 */
const doLogin = () => {
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
        await navigateTo('/overseas', {
          replace: true
        })
      }
    })
  })
}

// 設置Modal
const showModal = () => {
  modalData.value.title = '提醒'
  modalData.value.content = '開發中'
  modalData.value.showButton = false
  useModalStore().setModalShow(true)
}
</script>

<style scoped></style>
