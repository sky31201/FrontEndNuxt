import { defineEventHandler } from 'h3';

const QueryCustomer = defineEventHandler(() => {
  return {
    "StatusCode": "0",
    "Data": {
      "ERR_CODE": "0",
      "ERR_MSG": "null",
      "datas": [
        {
          "CUSTOMER_ID": "20001277607",
          "CUSTOMER_NAME": "\u6E2C-20001277607",
          "ADDRESS": "\u5317\u5E02\u4E2D\u5C71\u5340\u660E\u6C34\u8DEF700\u865F",
          "AUTH_NAME": null,
          "BRANCH": "\u57CE\u4E2D\u5206\u516C\u53F8\u4E00",
          "SALES": "\u9673\uFF2F\uFF2F",
          "G_SALES": "\u5F90\uFF2F\uFF2F",
          "BANK_NAME": "N/A",
          "BANK_ACCOUNT": "N/A",
          "BANK_ACCOUNT2": "N/A",
          "BANK_NAME_TWD": "XXXXXXXX\u696D\u9280\u884C\u4E2D\u5C71\u5206",
          "BANK_ACCOUNT_TWD": "00001535802604",
          "OPENDATE": "2013/05/22",
          "ESTATEMENT": "1",
          "E_MAIL": "test@kgi.com.tw",
          "CUSTOMER_TYPE": "1",
          "W8_FORM": "N",
          "ETRADE": "Y",
          "ETRADE_PWDNO": 9999999999,
          "ETRADE_APPLYDATE": "2013/05/22",
          "ETRADE_CANCELDATE": "1900/01/01",
          "ETRADE_PWDDATE": "1900/01/01",
          "BRANCH_CODE": "270",
          "ID": "F123326781",
          "W8W9_DATE": "1900/01/01",
          "W9": "N",
          "RISK_LEVEL": null,
          "RISK_LEVEL_DATE": "2013/05/22",
          "PI_STATUS": "0",
          "HYDEBTFUND_RISK": "Y",
          "HYDEBTFUND_RISK_DATE": "2021/03/25",
          "ACCT_TYPE": "DSU",
          "PRE_ESTATEMENT": "N",
          "BANK_ACC_SIN": "00014586157007",
          "BANK_ID_SIN": "8090016",
          "SINGLE_APPLY": "Y",
          "SINGLE_APPLY_DATE": "2021/03/25",
          "KGI_ACCOUNT": null,
          "DOCUMENT_STATUS": null,
          "SIGNING_DATE": null,
          "DOCUMENT_TYPE1_DATE": null,
          "R_EQUITY_AGREEMENT": "Y",
          "R_EQUITY_AGREEMENT_DATE": "2022/04/23",
          "PD_TRANSFER_AGREEMENT": "Y",
          "PD_SIGNING_DATE": "2022/03/04",
          "QI_NATIONALITY": "1",
          "SETTLE_TWD": "Y"
        }
      ]
    }
  };
});

export { QueryCustomer as default };
//# sourceMappingURL=QueryCustomer.mjs.map
