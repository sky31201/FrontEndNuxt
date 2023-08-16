import { useLoadingStore } from "@/stores/loadingStore"

export const useBaseFetch: typeof useFetch = (request, opts?) => {
  const { $pinia } = useNuxtApp()
  const loadingStore = useLoadingStore($pinia)
  return useFetch(request, {
    baseURL: useRuntimeConfig().public.apiBase,
    method: 'POST' as any,
    onRequestError(context) {
      loadingStore.setLoadingShow(false)
      console.log(context)
    },
    ...opts
  })
}
