/**
 * Api 請求參數
 */
export interface Request {
  SYSTEM_ID: string
  IP: string
  CUSTOMER_ID: string
  ID: string
}


/**
 * Api返回資料
 */
export interface Response {
  ERR_CODE: string
  ERR_MSG: string
  datas: Datas[]
}

/**
 * Api返回詳細資料
 */
export interface Datas {
  CUSTOMER_ID: string
  CUSTOMER_NAME: string
  ADDRESS: string
  AUTH_NAME: any
  BRANCH: string
  SALES: string
  G_SALES: string
  BANK_NAME: string
  BANK_ACCOUNT: string
  BANK_ACCOUNT2: string
  BANK_NAME_TWD: string
  BANK_ACCOUNT_TWD: string
  OPENDATE: string
  ESTATEMENT: string
  E_MAIL: string
  CUSTOMER_TYPE: string
  W8_FORM: string
  ETRADE: string
  ETRADE_PWDNO: number
  ETRADE_APPLYDATE: string
  ETRADE_CANCELDATE: string
  ETRADE_PWDDATE: string
  BRANCH_CODE: string
  ID: string
  W8W9_DATE: string
  W9: string
  RISK_LEVEL: any
  RISK_LEVEL_DATE: string
  PI_STATUS: string
  HYDEBTFUND_RISK: string
  HYDEBTFUND_RISK_DATE: string
  ACCT_TYPE: string
  PRE_ESTATEMENT: string
  BANK_ACC_SIN: string
  BANK_ID_SIN: string
  SINGLE_APPLY: string
  SINGLE_APPLY_DATE: string
  KGI_ACCOUNT: any
  DOCUMENT_STATUS: any
  SIGNING_DATE: any
  DOCUMENT_TYPE1_DATE: any
  R_EQUITY_AGREEMENT: string
  R_EQUITY_AGREEMENT_DATE: string
  PD_TRANSFER_AGREEMENT: string
  PD_SIGNING_DATE: string
  QI_NATIONALITY: string
  SETTLE_TWD: string
}
