import { UseFetchOptions } from 'nuxt/app'
import { useLoadingStore } from '@/stores/loadingStore'
import { ApiRequest, ApiResponse } from 'models/Api/Base/index';
import { Request, Response } from '@/models/Api/KGItwPriOltsAPICustomer/index';

/**
 * 取回複委託客戶資料
 */
export const useKgiTwPriOltsAPICustomerQueryStore = defineStore('kgiTwPriOltsAPICustomerQueryStore', () => {

  /**
   * Api傳入資料
   */
  const postData = ref<ApiRequest<Request>>({
    FunId: 'KGItwPriOltsAPICustomer',
    Data: {
      SYSTEM_ID: '',
      IP: '',
      CUSTOMER_ID: '',
      ID: ''
    }
  })

  /**
   * Api返回結果
   */
  const responseData = ref<ApiResponse<Response>>()

  /**
   * 設置傳入參數選項
   */
  const options: UseFetchOptions<ApiResponse<Response>> = {
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
      const result: ApiResponse<Response> = response._data
      if (result.StatusCode !== '0') return
      responseData.value = result
    }
  }

  /**
   * 取回複委託客戶資料
   * @returns 複委託客戶資料
   */
  const fetchData = async () => await useBaseFetch<ApiResponse<Response>>(`/api/OffShoreBond/Query`, options);
  // const fetchData = async () => await useFetch<ApiResponse<Response>>(`http://localhost:3000/api/QueryCustomer`, options);
  return { fetchData, postData, responseData }
}, {
  persist: {
    key: 'customer',
    storage: persistedState.sessionStorage,
  }
})