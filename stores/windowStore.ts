/**
 * 視窗寬度
 */
export const useWindowStore = defineStore('windowStore', () => {
  /**
   * 當前視窗寬度
   */
  const windowWidth = ref<number>(0)
  /**
   * 設置當前視窗寬度
   * @param w 視窗DOM元件
   */
  const setWindowWidth = (w: Window): void => {
    w.addEventListener('resize', () => windowWidth.value = w.innerWidth)
  }
  return { setWindowWidth, windowWidth }
})