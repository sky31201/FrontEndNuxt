import { UseFetchOptions } from 'nuxt/app'
import { useLoadingStore } from '@/stores/loadingStore'
import { Request, Response } from '@/models/Api/KGITestLogin/index';

/**
 * 取回複委託客戶資料
 */
export const useKgiTestLoginStore = defineStore('kgiTestLoginStore', () => {

  /**
   * Api傳入資料
   */
  const postData = ref<Request>({
    IDs: 'F123326781',
    Orign: 'A',
    ApplyType: 'OB',
    WithOSB: 'Y',
    PWD: '0000'
  })

  /**
   * Api返回結果
   */
  const responseData = ref<Response>()

  /**
   * 設置傳入參數選項
   */
  const options: UseFetchOptions<Response> = {
    onRequest({ options }) {
      // 設置讀取中組件顯示
      useLoadingStore().setLoadingShow(true)
      // TODO: 記得要打開
      // 測試註解 Start
      options.body = postData.value
      // options.headers = {
      //   Authorization: `Bearer 2223332`
      // }
      // 測試註解 End
    },
    onResponse({ response }) {
      // 設置讀取中組件隱藏
      useLoadingStore().setLoadingShow(false)
      const result: Response = response._data
      if (result.userIdAccountsDataList.length === 0) return
      responseData.value = result
    }
  }

  /**
   * 取回測試資料
   * @returns 測試資料
   */
  const fetchData = async () => await useBaseFetch<Response>(`/api/auth/TestLogin`, options);
  // const fetchData = async () => await useFetch<Response>(`http://localhost:3000/api/TestLogin`, options);
  return { fetchData, postData, responseData }
}, {
  persist: {
    key: 'testLogin',
    storage: persistedState.sessionStorage,
  }
})