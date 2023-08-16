import { PostData } from "@/models/Api/Base/postdata"

/**
 * Api 請求參數
 */
export interface Request {
  IDs: string
  Orign: string
  ApplyType: string
  WithOSB: string
  PWD: string
}

/**
 * Api返回資料
 */
export interface Response {
  postData: PostData
  userIdAccountsDataList: []
}


