import BottomData from "@/models/BottomData"

/**
 * 出入金及保證金傳送資料
 */
export const useBottomStore = defineStore('bottomStore', () => {

  /**
   * 顯示Bottom
   */
  const isShowBottom = ref(false)
  /**
   * Bottom顯示資料
   */
  const bottomData = ref<BottomData>({ currency: '無', amount: 0, account: '', time: '' })
  /**
   * 設置Bottom是否顯示
   * @params 顯示Bottom組件值
   */
  const setBottomShow = (b: boolean): void => {
    isShowBottom.value = b
  }
  /**
   * 設置Bottom資料
   * @params Bottom資料
   */
  const setBottomData = (data: BottomData): void => {
    bottomData.value = data
  }
  return { setBottomShow, setBottomData, isShowBottom, bottomData }
})