import { PostData } from "@/models/Api/Base/postdata"

/**
 * Api 請求參數
 */
export interface Request {
  applytype: string
  orign: string
  orignolts: any
  orgclient: string
  orgserver: string
  trust_seq: string
  idno: any
  idaccounts: string
  stock: any
  adflag: any
  uitype: any
  dirpack: any
  syncert: any
  apver: any
  verno: any
}

/**
 * Api返回資料
 */
export interface Response {
  token: string
  postData: PostData
  userData: UserData[]
}

export interface UserData {
  ID: string
  Accounts: Accounts
}

/**
 * 客戶帳號資訊
 */
 export interface Accounts {
  STK: string[]
  FUT: string[]
  OSB: string[]
  WM: string[]
}

