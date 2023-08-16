import { UseFetchOptions } from 'nuxt/app'
import { useLoadingStore } from '@/stores/loadingStore'
import { ApiRequest, ApiResponse } from 'models/Api/Base/index';
import { Request, Response } from '@/models/Api/KGIAuthVerify/index';

/**
 * 客戶資料驗證
 */
export const useKgiAuthVerifyStore = defineStore('kgiAuthVerifyStore', () => {

  /**
   * Api傳入資料
   */
  const postData = ref<Request>({
    applytype: '',
    orign: '',
    orignolts: '',
    orgclient: '',
    orgserver: '',
    trust_seq: '',
    idno: '',
    idaccounts: '',
    stock: '',
    adflag: '',
    uitype: '',
    dirpack: '',
    syncert: '',
    apver: '',
    verno: '',
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
      options.headers = {
        Authorization: `Bearer 2223332`
      }
      // 測試註解 End
    },
    onResponse({ response }) {
      // 設置讀取中組件隱藏
      useLoadingStore().setLoadingShow(false)
      const result: Response = response._data
      if (result.userData.length === 0) return
      responseData.value = result
    }
  }

  /**
   * 取回測試資料
   * @returns 測試資料
   */
  const fetchData = async () => await useBaseFetch<Response>(`/api/auth/Verify`, options);
  // const fetchData = async () => await useFetch<Response>(`http://localhost:3000/api/AuthVerify`, options);
  return { fetchData, postData, responseData }
}, {
  persist: {
    key: 'authVerify',
    storage: persistedState.sessionStorage,
  }
})