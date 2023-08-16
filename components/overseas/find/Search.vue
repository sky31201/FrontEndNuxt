<!-- 找債券結果顯示 -->
<template>
    <div class="mt-10 px-6 py-5 w-[calc(100%-32px)] rounded-2xl bg-blue-grey max-w-4xl mx-auto lg:mt-16">

        <div class='md:flex items-center gap-4'>
            <h2 class="text-xl font-medium text-black">快速搜尋</h2>

            <div class="mt-3 flex items-center md:flex-1 md:mt-0">
                <input type="search" placeholder='輸入債券名稱／ISIN'
                    class='input min-w-0 flex-1 text-black text-lg p-5 bg-white border border-black' />
                <button class="flex-shrink-0 flex justify-center items-center w-11 h-11 rounded-full bg-orange ml-2">
                    <svg width="20.314" height="20.314" viewBox="0 0 20.314 20.314">
                        <path
                            d="M16.031,14.617,20.314,18.9,18.9,20.314l-4.282-4.283a9,9,0,1,1,1.414-1.414m-2.006-.742a7,7,0,1,0-.15.15Z"
                            fill="#fff" />
                    </svg>
                </button>
            </div>
        </div>

        <hr class="my-5 border-primary" />

        <div class='md:flex items-center gap-4'>
            <button @click='handleAdvanceFilterOpenClick' type='button'
                class="bg-primary text-white px-5 py-3 text-base flex items-center flex-shrink-0 rounded-lg">進階篩選</button>
            <div class="text-black mt-4 md:mt-0 text-base font-normal flex flex-wrap items-center">
                <button>熱門商品推薦</button>
                <hr class="mx-2 h-[1em] border-r border-black" />
                <button>主推商品</button>
                <hr class="mx-2 h-[1em] border-r border-black" />
                <button>凱基精選</button>
                <hr class="mx-2 h-[1em] border-r border-black" />
                <button>自選清單</button>
            </div>
        </div>

    </div>

    <div>
        <dialog id="overseas_find_filter" class="modal bg-[rgba(0,0,0,0.6)]" :open="isFilterPanelOpen">
            <form method="dialog" class="modal-box bg-white max-w-3xl relative">
                
                <div class='bg-white -m-6 mb-0 p-6 pb-0 sticky -top-6'>
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-5 top-6" @click='setFilterPanelOpen(false)'>
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <line x1="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                            <line x2="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </svg>
                    </button>
                    
                    <h2 class="flex items-center text-xl text-black font-medium gap-1 mt-1 border-b pb-5 mb-2">
                        <svg id="icon_fliter_blue" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12.246,12.947H7.573L1,6.211h17.82Z" transform="translate(-0.185 -1.147)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path d="M0,0H4.11V7.874L0,10.342Z" transform="translate(7.669 11.8)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <rect width="17.82" height="4.248" transform="translate(0.815 0.815)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                        自訂條件進階篩選
                    </h2>
                </div>

                <div class='mb-10 md:mx-5' 
                    v-for='filterSet of filterSets'
                >
                    <h3 class='flex items-center gap-2 text-black text-lg'>
                        {{ filterSet.label }}
                        <button @click='toggleFilterCollapse(filterSet.key)' type='button'>
                            <svg width="14" height="7" viewBox="0 0 14 7" :class="collapsedFilters.has(filterSet.key) ? '' : 'rotate-180'">
                                <path d="M.75,13.4,6.515,7.073.75.75" transform="translate(0 7) rotate(-90)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </h3>

                    <div class="flex flex-wrap gap-2 mt-2" v-if='collapsedFilters.has(filterSet.key)'>
                        <button v-if='filterSet.all' @click='handleOptionClick(filterSet.key, null)' 
                            :data-selected='modalSelectedFilterParams[filterSet.key] === null'
                            type='button'
                            class="btn text-primary border border-primary bg-transparent
                                hover:bg-primary hover:text-white
                                data-[selected=true]:bg-primary data-[selected=true]:text-white
                            "
                        >全部</button>
                        <button v-for='option of filterSet.options' @click='handleOptionClick(filterSet.key, option)'
                            :data-selected='modalSelectedFilterParams[filterSet.key] === option'
                            type='button'
                            class="btn text-primary border border-primary bg-transparent
                                hover:bg-primary hover:text-white
                                data-[selected=true]:bg-primary data-[selected=true]:text-white
                            "
                        >{{ option }}</button>
                    </div>
                </div>

                <div class="modal-action bg-blue-grey -m-6 py-4 px-6 flex justify-between items-center sticky -bottom-6" v-show="true">
                    <div class='text-black'>已選 {{ selectedOptionCount }} 個條件</div>
                    <button class="btn bg-orange text-white border-0" @click="handleAdvanceFilterSubmitClick">立即查詢</button>
                </div>

            </form>
        </dialog>
    </div>
</template>

<script lang="ts" setup>
    import FindFilterParam from '@/models/Overseas/FindFilterParam';
    import { useOverseasFindFilterStore } from '@/stores/overseasFindFilterStore';

    const { filterParams, setFilterParam, setFilterPanelOpen } = useOverseasFindFilterStore();
    const { isFilterPanelOpen } = storeToRefs(useOverseasFindFilterStore());

    const modalSelectedFilterParams = ref({...filterParams});

    const filterSets: {
        key: keyof FindFilterParam,
        label: string,
        all: boolean,
        options: string[]
    }[] = [
        { 
            key: 'investorRestriction',
            label: '投資人限制',
            all: false,
            options: [ '一般客戶', '專業投資人', '高資產客戶' ]
        },
        { 
            key: 'minTradeAmount',
            label: '最低交易面額',
            all: false,
            options: [ '2,000~9,999', '10,000~100,000', '>100,000' ]
        },
        { 
            key: 'remainingTenure',
            label: '剩餘年期',
            all: true,
            options: [ '3年期以下', '3~7年', '7~10年', '10年期以上' ]
        },
        { 
            key: 'type',
            label: '類型',
            all: true,
            options: [ '公司債', '公債', '國際金融', '可轉換公司債', 'NCD' ]
        },
        { 
            key: 'dividendType',
            label: '配息類型',
            all: true,
            options: [ '每半年', '每一年', '每季', '每月' ]
        },
        { 
            key: 'valuationCurrency',
            label: '計價幣別',
            all: true,
            options: [ '美元', '澳幣', '南非幣', '人民幣', '其他幣別' ]
        },
        { 
            key: 'couponRate',
            label: '票面利率',
            all: true,
            options: [ '3%以下', '3%~5%', '5%~8%', '8%以上' ]
        },
        { 
            key: 'maturityYield',
            label: '到期殖利率',
            all: true,
            options: [ '3%以下', '3%~5%', '5%以上' ]
        },
        { 
            key: 'redemptionYield',
            label: '贖回收益率',
            all: true,
            options: [ '3%以下', '3%~5%', '5%以上' ]
        },
        { 
            key: 'referenceSubscriptionPrice',
            label: '參考申購價',
            all: true,
            options: [ '90以下', '90~95', '95~100', '100~105', '105以上' ]
        },
    ];

    const collapsedFilters = ref(new Set( filterSets.map( filterSet => filterSet.key ) ));

    function toggleFilterCollapse( key: keyof FindFilterParam ) {
        if ( collapsedFilters.value.has( key ) ) {
            collapsedFilters.value.delete( key );
        } else {
            collapsedFilters.value.add( key );
        }
    }

    function handleOptionClick(key: keyof FindFilterParam, value: string | null) {
        modalSelectedFilterParams.value[key] = value;
    }

    function handleAdvanceFilterOpenClick() {
        modalSelectedFilterParams.value = {...filterParams};
        setFilterPanelOpen(true);
    }

    function handleAdvanceFilterSubmitClick() {
        Object.keys(modalSelectedFilterParams.value).forEach(key => {
            setFilterParam(key as keyof FindFilterParam, modalSelectedFilterParams.value[key as keyof FindFilterParam]);
        })
        setFilterPanelOpen(false);
    }

    const selectedOptionCount = computed(() => {
        return Object.values(modalSelectedFilterParams.value).filter( value => value !== null ).length;
    })

    // 將沒有「全部」的篩選項目預設選取第一個
    // onMounted(() => {
    //     filterSets.forEach(filterSet => {
    //         if (!filterSet.all) {
    //             setFilterParam(filterSet.key, filterSet.options[0]);
    //         }
    //     })
    // })

</script>
