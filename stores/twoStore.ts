import BottomData from "@/models/BottomData"

/**
 * 出入金查詢
 */
export const useTwoStore = defineStore('twoStore', () => {

  /**
   * 期貨與外期帳戶資料
   */
  const twoDataList = ref<BottomData[]>([])
  /**
   * 取回期貨帳戶資訊
   * TODO: 先模擬用假資料
   */
  const queryTwoDataList = (): void => {
    twoDataList.value = [
      { currency: '台幣', amount: 1000000, account: '凱基大安分行-6040********95', time: '2023-01-01', },
      { currency: '美元', amount: 400.35, account: '凱基美元分行-4060********59', time: '2023-01-01', },
      { currency: '日圓', amount: 700.35, account: '凱基日圓分行-1060********59', time: '2023-01-01', },
      { currency: '港幣', amount: 5200.35, account: '凱基港幣分行-2060********59', time: '2023-01-01', },
      { currency: '歐元', amount: 2300.35, account: '凱基歐元分行-3060********59', time: '2023-01-01', },
      { currency: '英鎊', amount: 8100.35, account: '凱基英鎊分行-5060********59', time: '2023-01-01', },
      { currency: '新幣', amount: 3400.35, account: '凱基新幣分行-8060********59', time: '2023-01-01', },
    ]
  }
  const cleanTwoDataList = (): void => {
    twoDataList.value = []
  }
  return { queryTwoDataList, cleanTwoDataList, twoDataList }
})