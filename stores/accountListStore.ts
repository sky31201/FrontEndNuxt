import AccountData from "@/models/AccountData"

/**
 * 期貨與外期帳戶
 */
export const useAccountListStore = defineStore('accountListStore', () => {

  /**
   * 期貨與外期帳戶資料
   */
  const accountList = ref<AccountData[]>()
  /**
   * 選取的期貨帳戶
   */
  const accountData = ref<AccountData>({ title: '期', info: '' })
  /**
   * 取回期貨帳戶資訊
   * TODO: 先模擬用假資料
   */
  const queryAccountList = (): void => {
    accountList.value =[
      {
        title: '期',
        info: '期-111-9800000-張ＯＯ',
      },
      {
        title: '期',
        info: '期-222-9800000-張ＯＯ',
      },
      {
        title: '期',
        info: '期-333-9800000-張ＯＯ',
      },
    ]
  }
  /**
   * 
   * @param aData 設置選取的期貨帳戶
   */
  const setAccountData = (aData: AccountData) => {
    accountData.value = aData
  }
  return { queryAccountList, setAccountData, accountData, accountList }
})