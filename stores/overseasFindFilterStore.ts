import FindFilterParam from '@/models/Overseas/FindFilterParam';

export const useOverseasFindFilterStore = defineStore('overseasFindFilterStore', () => {

    /**
     * 進階篩選是否有開啟？
     */
    const isFilterPanelOpen = ref<boolean>(false)

    /**
     * 已選取的篩選參數
     */
    const filterParams = ref<FindFilterParam>({
        keyword: null,
        investorRestriction: null,
        minTradeAmount: null,
        remainingTenure: null,
        type: null,
        dividendType: null,
        valuationCurrency: null,
        couponRate: null,
        maturityYield: null,
        redemptionYield: null,
        referenceSubscriptionPrice: null,
    });

    /**
     * 設定進階篩選是否開啟
     * @param open 開啟？
     */
    const setFilterPanelOpen = (open: boolean): void => {
        isFilterPanelOpen.value = open;
    }

    /**
     * 設定篩選參數
     */
    const setFilterParam = (key: keyof FindFilterParam, value: string | null): void => {
        filterParams.value[key] = value;
    }

    /**
     * 清除篩選參數
     */
    const clearFilterParams = (): void => {
        for (const key in filterParams.value) {
            filterParams.value[key as keyof FindFilterParam] = null;
        }
    };

    return { isFilterPanelOpen, setFilterPanelOpen, filterParams, setFilterParam, clearFilterParams }
})