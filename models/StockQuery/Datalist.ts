/**
 * 美債資料列表
 */
export default interface Datalist {
  /**
   * 市場別
   */
  market: string
  exchange: string
  kind: string
  symbol: string
  /**
   * 名稱
   */
  symbolName: string
  /**
   * 參考現價
   */
  ystPrice?: number
  /**
   * 漲跌
   */
  priceDiff?: number
  /**
   * 更新日期
   */
  updateDate?: string
  typeName: string
  reuterCode: string
}