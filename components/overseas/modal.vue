<template>
  <div
    v-show="modalData.isShowModal"
  >
    <dialog id="my_modal_3" class="modal bg-slate-200 !opacity-90" :open="modalData.isShowModal">
      <form method="dialog" class="modal-box">
        <button
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          @click="setModalShow(false)"
        >
          ✕
        </button>
        <h3 class="font-bold text-lg">{{ modalData.title }}</h3>
        <div class="divider"></div>
        <p class="py-4">{{ modalData.content }}</p>
        <div class="modal-action" v-show="modalData.showButton">
          <button class="btn" @click="doCallBack">確定</button>
          <button class="btn" @click="setModalShow(false)">取消</button>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores/modalStore'
import ModalEnum from '@/models/ModalEnum'

const store = useModalStore()
const { setModalShow } = store
const { modalData } = storeToRefs(useModalStore())

/**
 * Modal 確定按鈕點擊執行事件
 */
const doCallBack = () => {
  setModalShow(false)
  console.log('1')
  switch (modalData.value.modalType) {
    case ModalEnum.Default:
      console.log('Default')
      break
    case ModalEnum.ChuRuJin:
      // TODO: 請求Api 並等完成後才關閉Modal
      console.log('ChuRuJin')
      break
  }
}
</script>

<style scoped></style>
