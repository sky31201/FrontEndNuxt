import { UseFetchOptions } from 'nuxt/app'
import { useLoadingStore } from './loadingStore'
import { Currency, CurrencyDetail, CurrencyPostData } from '@/models/Currency/Currency';
import { ApiResponse } from 'models/Api/Base/index';

/**
 * 取回當日參考匯率查詢
 */
export const useCurrencyQueryStore = defineStore('currencyQueryStore', () => {

  /**
   * Api傳入資料
   */
  const currencyPostData = ref<CurrencyPostData>()

  /**
   * 返回結果
   */
  const currencyData = ref<CurrencyDetail[] | undefined>()

  /**
   * 設置傳入參數選項
   */
  const options: UseFetchOptions<ApiResponse<Currency>> = {
    onRequest({ options }) {
      // 設置讀取中組件顯示
      useLoadingStore().setLoadingShow(true)
      options.body = currencyPostData.value
      options.headers = {
        Authorization: `Bearer 2223332`
      }
    },
    onResponse({ response }) {
      // 設置讀取中組件隱藏
      useLoadingStore().setLoadingShow(false)
      const result: ApiResponse<Currency> = response._data
      if (result.StatusCode !== '0000') return
      currencyData.value = result.Data.datas
    }
  }

  /**
   * 取回當日參考匯率查詢
   * @returns 當日參考匯率
   */
  const fetchData = async () => await useBaseFetch<ApiResponse<Currency>>(`/Currency/Query`, options);
  return { fetchData, currencyData, currencyPostData }
}, {
  persist: {
    key: 'currency',
    storage: persistedState.sessionStorage,
  }
})