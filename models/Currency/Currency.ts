export interface Currency {
  QueryTime: string
  rtnCode: any
  msg: any
  ERR_CODE: string
  ERR_MSG: string
  datas: CurrencyDetail[]
  datalist: any
  orderList: any
}

export interface CurrencyDetail {
  CURRENCY: string
  EX_RATE: number
}

export interface CurrencyPostData {
  UserId: string
  Currency: string
}
