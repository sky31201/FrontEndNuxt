/**
 * Modal元件
 */
export const useDateModalStore = defineStore('dataModalStore', () => {
  interface DateModal {
    title: string
    isShow: boolean
    showButton: boolean
    startDate: string
    endDate: string
  }
  /**
   * DateModal資料
   */
  const dateModalData = ref<DateModal>({ title: '選擇區間', isShow: false, startDate: '2023-05-01', endDate: '2023-07-18',showButton: true })
  /**
   * 設置DateModal組件是否顯示
   * @params 顯示Modal組件值
   */
  const setDateModalShow = (b: boolean): void => {
    dateModalData.value.isShow = b
  }
  return { setDateModalShow, dateModalData }
})