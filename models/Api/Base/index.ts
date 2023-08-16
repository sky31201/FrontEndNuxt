export interface ApiRequest<T> {
  /**
   * 呼叫功能代號
   */
  FunId: string
  /**
   * 傳送參數
   */
  Data: T
}

/**
 * 後端Api統一回傳結果
 */
 export interface ApiResponse<T> {
  /**
   * 回傳代碼
   * 0: 成功
   */
  StatusCode: string
  /**
   * 回傳資料
   */
  Data: T
}
