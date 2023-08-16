import { UseFetchOptions } from 'nuxt/app'
import { useLoadingStore } from './loadingStore'
import StockQueryResult from '@/models/StockQuery/StockQueryResult';
import Datalist from '@/models/StockQuery/Datalist';

/**
 * 取回美債資料
 */
export const useStockQueryStore = defineStore('stockQueryStore', () => {
  const headersInit: HeadersInit = {};

  /**
   * 美債清單
   */
  const stockList = ref<Datalist[] | undefined>([])

  /**
   * 設置傳入參數選項
   */
  const options: UseFetchOptions<StockQueryResult> = {
    onRequest({ request, options }) {
      // 設置讀取中組件顯示
      useLoadingStore().setLoadingShow(true)
      options.headers = headersInit
      options.headers.Authorization = `Bearer 22`
    },
    onResponse({ response }) {
      // 設置讀取中組件隱藏
      useLoadingStore().setLoadingShow(false)
      const result: StockQueryResult = response._data
      if (!result.ok) return
      stockList.value = result.data.datalist
    }
  }
  // const url = `/web/api/USStock/QueryRegularStock`
  const url = `http://localhost:3000/api/QueryRegularStock`

  /**
   * 取回美債資料
   * @returns 美債資料
   */
  const fetchStockData = async () => await useFetch<StockQueryResult>(`${url}`, options);
  return { fetchStockData, stockList }
})