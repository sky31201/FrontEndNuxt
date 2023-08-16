/**
 * 重新整理按鈕
 */
export const useReloadStore = defineStore('reloadStore', () => {

  /**
   * 點擊按鈕來源
   */
  const eventType = ref<number>(0)
  /**
   * 設置重新整理按鈕點擊事件
   * @params 顯示Modal組件值
   */
  const setReloadEvent = (): void => {
    console.log(eventType)
  }
  return { setReloadEvent, eventType }
})