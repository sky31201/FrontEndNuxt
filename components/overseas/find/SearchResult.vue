<!-- 找債券結果顯示 -->
<template>

    <div class="pb-20 max-w-6xl mx-auto mt-10 lg:mt-12">

        <div class="container mx-auto px-4">
            <h1 class="text-xl font-medium text-black text-center lg:text-2xl">查詢結果</h1>
            <div class='mt-4 flex gap-3 justify-center flex-wrap md:mt-10'>
                <span v-for='value, key of filterParams' v-show='value !== null'
                    class='px-4 py-2 bg-blue-grey rounded-full text-black inline-flex items-center gap-2'
                >
                    {{ value ?? 'null' }}
                    <button class='text-primary hover:text-white group' @click='setFilterParam(key, null)'>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <g fill="none" stroke="currentColor" stroke-width="1">
                                <circle cx="10" cy="10" r="10" stroke="none"/>
                                <circle cx="10" cy="10" r="9.5" fill="none" class='group-hover:fill-primary'/>
                            </g>
                            <g transform="translate(6.403 6.403)">
                                <line id="Line_8" data-name="Line 8" x1="6.577" y2="6.577" transform="translate(0.308 0.308)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                <line id="Line_9" data-name="Line 9" x2="6.577" y2="6.577" transform="translate(0.308 0.308)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </g>
                        </svg>
                    </button>
                </span>
            </div>
            <div class="mt-5 text-sm text-black font-medium md:text-right md:mt-0">資料更新日期 {{latestQuoteDate}}</div>
            <div class="mt-5 text-sm text-black font-medium md:text-right md:mt-0">總共查詢到 {{itemsCount}} 筆</div>
        </div>

        <Loading v-show="useLoadingStore().isShow" />

        <div class="px-4 mt-10 mx-auto grid gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden" v-for="bond in bonds">
                <div class="p-5 bg-dark-blue text-white text-xl flex items-center justify-between">
                    <h3 class="">
                        {{ bond.symbolName }}<br/>
                        ({{ bond.valuationCurrency }})
                    </h3>

                    <!-- TODO: 串接追蹤狀態 -->
                    <button>
                        <svg width="24" height="23" viewBox="0 0 24 23">
                            <!-- 未選 -->
                            <path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class='fill-transparent stroke-white'
                            />

                            <!-- 已選 -->
                            <!-- 
                            <path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class='fill-orange stroke-orange'
                            /> 
                            -->
                        </svg>
                    </button>
                </div>
                
                <div class="py-1 px-5 bg-blue-grey rounded-full text-base font-medium text-dark-blue w-max mx-auto mt-5">
                    {{ bond.couponRate }}｜{{ bond.dueDate.split('.')[0] }}年
                </div>

                <div class="flex gap-3 justify-evenly items-center px-4 mt-3">
                    <div>
                        <p class="text-sm text-black text-center">參考殖利率(%)</p>
                        <p class="mt-2 text-3xl font-light text-center text-primary">{{ Number(bond.referenceYieldToMaturity).toFixed(2) }}</p>
                    </div>
                    <hr class="h-auto self-stretch border-r border-gray-2"/>
                    <div>
                        <p class="text-sm text-black text-center">參考申購價</p>
                        <p class="mt-2 text-3xl font-light text-center text-primary">{{ Number(bond.referencePurchasePrice).toFixed(2) }}</p>
                    </div>
                    <hr class="h-auto self-stretch border-r border-gray-2"/>
                    <div>
                        <p class="text-sm text-black text-center">剩餘年期</p>
                        <p class="mt-2 text-3xl font-light text-center text-primary">{{ bond.remainingTenure }}</p>
                    </div>
                </div>

                <div class="flex justify-center gap-2 mt-5 pb-4 px-4">
                    <button class="flex-1 text-primary font-medium border border-primary px-5 py-3 rounded-lg" @click='showBondDetailModal(bond)'>
                        商品資訊
                    </button>
                    <button class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-3 rounded-lg">
                        立即申購
                    </button>
                </div>
            </div>

        </div>

        <div class="mt-10 px-4 flex justify-between items-center max-w-sm mx-auto">
            <button class="text-primary border border-current rounded-lg w-10 h-10 flex justify-center items-center disabled:text-gray-2" 
                :disabled="pagination.currentPage <= 1"
                @click='handlePageChange(pagination.currentPage - 1)'
            >
                <svg width="7" height="14" viewBox="0 0 7 14" class="rotate-180">
                    <path d="M.75,13.4,6.515,7.073.75.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </svg>
            </button>

            <div class="flex-1 flex justify-center gap-2">
                <button v-if='pagination.currentPage - 2 > 1' class="w-8 h-8 text-primary font-medium">⋯</button>
                <button v-for='page of (new Array(5).fill(0).map((_, index) => pagination.currentPage - 2 + index))'
                    v-show='page > 0 && page <= pagination.totalPage'
                    @click='handlePageChange(page)'
                    :data-active='page === pagination.currentPage'
                    class="w-8 h-8 text-primary font-medium rounded-full data-[active=true]:font-bold data-[active=true]:bg-blue-grey "
                >{{ page }}</button>
                <button v-if='pagination.currentPage + 2 < pagination.totalPage' class="w-8 h-8 text-primary font-medium">⋯</button>
            </div>

            <button class="text-primary border border-current rounded-lg w-10 h-10 flex justify-center items-center disabled:text-gray-2" 
                :disabled='pagination.currentPage >= pagination.totalPage'
                @click='handlePageChange(pagination.currentPage + 1)'
            >
                <svg width="7" height="14" viewBox="0 0 7 14">
                    <path d="M.75,13.4,6.515,7.073.75.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </svg>
            </button>
        </div>

    </div>
</template>

<script lang="ts" setup>

import { useLoadingStore } from '@/stores/loadingStore'
import { useOverseasFindFilterStore } from '@/stores/overseasFindFilterStore';
import { useBondDetailModalStore } from '@/stores/bondDetailModalStore';
import Bond from '@/models/Overseas/Bond';

const { setFilterParam } = useOverseasFindFilterStore();
const { filterParams } = storeToRefs(useOverseasFindFilterStore());
const { showBondDetailModal } = useBondDetailModalStore();

// TODO: 需要更換為真實資料
const bonds = ref<Bond[]>([
    { 
        id: 'CUSD00500',
        symbolName: '蘋果公司公司債',
        symbol: 'AAPL',
        dueDate: '2047.02.09',
        couponRate: '4.25%',
        dividendType: '每半年',
        valuationCurrency: 'USD',
        bondType: '公司債',
        referencePurchasePrice: '98.650000',
        quoteDate: '2023.06.15',
        issuingInstitution: 'APPLE INC',
        referenceYieldToMaturity: '4.34',
        referenceYieldToCall: '4.34',
        needPI: 'N',
        productRiskLevel: 'R1',
        remainingTenure: '23.66',
        nextAllotmentDate: '2023.08.09',
        registeredCountry: '美國',
        issuingCompanyIndustry: 'Computers',
        isCallable: 'Y',
        nextCallDate: '2046.08.09',
    },
    { 
        id: 'CUSD00500',
        symbolName: '默克藥廠公司債',
        symbol: 'AAPL',
        dueDate: '2047.02.09',
        couponRate: '4.25%',
        dividendType: '每半年',
        valuationCurrency: 'USD',
        bondType: '公司債',
        referencePurchasePrice: '98.650000',
        quoteDate: '2023.06.15',
        issuingInstitution: 'APPLE INC',
        referenceYieldToMaturity: '4.34',
        referenceYieldToCall: '4.34',
        needPI: 'N',
        productRiskLevel: 'R1',
        remainingTenure: '23.66',
        nextAllotmentDate: '2023.08.09',
        registeredCountry: '美國',
        issuingCompanyIndustry: 'Computers',
        isCallable: 'Y',
        nextCallDate: '2046.08.09',
    },
    { 
        id: 'CUSD00500',
        symbolName: '聯合包裹服務公司債',
        symbol: 'AAPL',
        dueDate: '2047.02.09',
        couponRate: '4.25%',
        dividendType: '每半年',
        valuationCurrency: 'USD',
        bondType: '公司債',
        referencePurchasePrice: '98.650000',
        quoteDate: '2023.06.15',
        issuingInstitution: 'APPLE INC',
        referenceYieldToMaturity: '4.34',
        referenceYieldToCall: '4.34',
        needPI: 'N',
        productRiskLevel: 'R1',
        remainingTenure: '23.66',
        nextAllotmentDate: '2023.08.09',
        registeredCountry: '美國',
        issuingCompanyIndustry: 'Computers',
        isCallable: 'Y',
        nextCallDate: '2046.08.09',
    },
    { 
        id: 'CUSD00500',
        symbolName: '高特利集團',
        symbol: 'AAPL',
        dueDate: '2047.02.09',
        couponRate: '4.25%',
        dividendType: '每半年',
        valuationCurrency: 'USD',
        bondType: '公司債',
        referencePurchasePrice: '98.650000',
        quoteDate: '2023.06.15',
        issuingInstitution: 'APPLE INC',
        referenceYieldToMaturity: '4.34',
        referenceYieldToCall: '4.34',
        needPI: 'N',
        productRiskLevel: 'R1',
        remainingTenure: '23.66',
        nextAllotmentDate: '2023.08.09',
        registeredCountry: '美國',
        issuingCompanyIndustry: 'Computers',
        isCallable: 'Y',
        nextCallDate: '2046.08.09',
    },
])

// TODO: 串接分頁器
const pagination = ref({
    currentPage: 1,
    totalPage: 4,
})

const latestQuoteDate = ref('2021.06.15')
const itemsCount = ref(100)

function handlePageChange(page: number) {
    if (page > 0 && page <= pagination.value.totalPage) {
        pagination.value.currentPage = page;
    }
}

</script>
