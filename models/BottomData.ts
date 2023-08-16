/**
 * 出入金及保證金傳送資料
 */
export default interface BottomData {
  /**
   * 幣別
   */
  currency: string
  /**
   * 金額
   */
  amount: number
  /**
   * 帳戶
   */
  account: string
  /**
   * 日期
   */
  time: string
}