<template>
  <div
    class="bg-slate-400 h-screen z-50 fixed w-screen opacity-90"
    v-show="dateModalData.isShow"
  >
    <dialog id="date_modal" class="modal" :open="dateModalData.isShow">
      <form method="dialog" class="modal-box h-[360px]">
        <button
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          @click="setDateModalShow(false)"
        >
          ✕
        </button>
        <h3 class="font-bold text-lg">{{ dateModalData.title }}</h3>
        <!-- 分隔線 -->
        <div class="divider"></div>
        <!-- 內容 -->
        <div class="flex flex-col">
          <span class="py-2">開始日期</span>
          <VueDatePicker
            dark
            auto-apply
            :teleport="true"
            :min-date="minDate()"
            :max-date="new Date()"
            locale="tw"
            v-model="startDate"
            :enable-time-picker="false"
            :format="format"
          />
        </div>
        <div class="flex flex-col">
          <span class="py-2">結束日期</span>
          <div class="flex flex-row justify-between">
            <VueDatePicker
              dark
              auto-apply
              :teleport="true"
              :min-date="minDate()"
              :max-date="new Date()"
              v-model="endDate"
              :enable-time-picker="false"
              :format="format"
            />
          </div>
        </div>

        <div class="modal-action" v-show="dateModalData.showButton">
          <button class="btn" @click="doCallBack">確定</button>
          <button class="btn" @click="setDateModalShow(false)">取消</button>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useDateModalStore } from '@/stores/dateModalStore'

const store = useDateModalStore()
const { setDateModalShow } = store
const { dateModalData } = storeToRefs(useDateModalStore())

const startDate = ref(new Date())
const endDate = ref(new Date())
const minDate = () => {
  const date = new Date()
  date.setDate(date.getDate() - 90)
  return date
}
// In case of a range picker, you'll receive [Date, Date]
const format = (date: Date) => {
  const day = date.getDate()
  const month: string =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`
  const year: string = `${date.getFullYear()}`
  return `${year}/${month}/${day}`
}
/**
 * DateModal 確定按鈕點擊執行事件
 */
const doCallBack = () => {
  setDateModalShow(false)
  // TODO: 呼叫API
  console.log(
    `DateModal 確定按鈕點擊執行事件 ${startDate.value.toLocaleDateString()} ${endDate.value.toLocaleDateString()} `
  )
}
</script>

<style scoped></style>
