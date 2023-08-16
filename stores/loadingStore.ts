/**
 * 讀取中元件
 */
export const useLoadingStore = defineStore('loadingStore', () => {
  /**
   * 顯示讀取中組件值
   */
  const isShow = ref(false)
  /**
   * 設置讀取中組件是否顯示
   * @params 顯示讀取中組件值
   */
  const setLoadingShow = (b: boolean): void => {
    isShow.value = b
  }
  return { setLoadingShow, isShow }
})