<template>
    <div v-if='modalBond'
        class='fixed inset-0 z-50 w-full h-full bg-black bg-opacity-50
            md:flex md:items-center md:justify-center
        '
    >
        <dialog :open='modalBond !== null' ref='dialogRef'
            class='w-full absolute bottom-0 max-h-[calc(100%-64px)] bg-white text-black rounded-t-2xl px-4 py-3 pb-10 overflow-y-auto 
                transition-transform duration-100 dialog-enter
                md:relative md:max-w-4xl md:mx-4 md:rounded-2xl md:p-10 md:pt-5
            '
        >
            <div ref='dragHandlerRef'
                @touchstart='handleTouchStart'
                class='flex justify-center pb-7 md:hidden'
            >
                <div class='w-10 h-1 bg-gray-2 rounded-full'></div>
            </div>

            <div class='hidden md:flex justify-end mb-5'>
                <button class='flex' @click='clearBondDetailModal'>
                    <svg id="icon_close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                        <line x1="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <line x2="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>

            <div class='flex items-start justify-between md:items-center'>
                <h1 class='text-xl font-medium'>
                    {{ modalBond.symbolName }}<br class='md:hidden'/>
                    ({{ modalBond.valuationCurrency }})
                </h1>
                <div class='flex items-center gap-3 md:gap-5'>
                    <!-- TODO: 串接追蹤狀態 -->
                    <button>
                        <svg width="24" height="23" viewBox="0 0 24 23">
                            <!-- 未選 -->
                            <path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class='fill-transparent stroke-gray-1'
                            />

                            <!-- 已選 -->
                            <!-- 
                            <path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class='fill-orange stroke-orange'
                            /> 
                            -->
                        </svg>
                    </button>

                    <button class='btn w-12 h-12 bg-primary text-white p-0 flex items-center md:w-auto md:px-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                            <g transform="translate(5 7)">
                                <path d="M.816.816H4.223L7.364,13.368h9.8" transform="translate(-0.052 -0.052)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <path d="M5.147,3.574H19.568l-1.81,7.309H6.977Z" transform="translate(-0.331 -0.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <line x1="12.626" transform="translate(5.731 6.9)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <line y2="6.853" transform="translate(12.044 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <line x1="1.138" y2="6.853" transform="translate(14.708 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <line x2="1.138" y2="6.853" transform="translate(8.226 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631"/>
                                <path d="M10.14,16.788a1.154,1.154,0,1,1-1.154-1.154,1.154,1.154,0,0,1,1.154,1.154" transform="translate(-0.504 -1.005)" fill="#fff"/>
                                <path d="M17.783,16.788a1.154,1.154,0,1,1-1.154-1.154,1.154,1.154,0,0,1,1.154,1.154" transform="translate(-0.996 -1.005)" fill="#fff"/>
                            </g>
                        </svg>
                        <span class='hidden md:inline'>加入</span>
                    </button>
                </div>
            </div>

            <div 
                class='mt-2 py-1 px-5 text-primary bg-blue-grey w-max rounded-full md:mt-1'
            >{{ modalBond.couponRate }}｜{{ modalBond.dueDate.split('.')[0] ?? '' }}年</div>

            <hr class='my-5 border-gray-1' />
            
            <div class='md:flex'>
                <div class="flex gap-3 justify-evenly items-center px-4 mt-3 
                    md:flex-col md:justify-start md:items-start md:px-0 md:mt-0 md:mr-6"
                >
                    <div>
                        <p class="text-sm text-black text-center md:text-left">參考殖利率(%)</p>
                        <p class="mt-2 text-3xl font-light text-center md:text-left text-primary">{{ Number(modalBond.referenceYieldToMaturity).toFixed(2) }}</p>
                    </div>
                    <hr class="h-auto self-stretch border-r border-gray-2"/>
                    <div>
                        <p class="text-sm text-black text-center md:text-left">參考申購價</p>
                        <p class="mt-2 text-3xl font-light text-center md:text-left text-primary">{{ Number(modalBond.referencePurchasePrice).toFixed(2) }}</p>
                    </div>
                    <hr class="h-auto self-stretch border-r border-gray-2"/>
                    <div>
                        <p class="text-sm text-black text-center md:text-left">剩餘年期</p>
                        <p class="mt-2 text-3xl font-light text-center md:text-left text-primary">{{ modalBond.remainingTenure }}</p>
                    </div>
                </div>

                <div class='md:flex-1'>
                    <div class='p-5 mt-5 bg-blue-grey rounded-2xl leading-7
                        md:flex md:items-start md:mt-0 md:relative
                    '>
                        <table class='w-full'>
                            <tbody>
                                <tr v-for='column of table1Columns'>
                                    <td class='align-baseline'>{{ column.label}}</td>
                                    <td class='align-baseline pl-3'>{{ modalBond[column.key] }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr class='my-3 border-gray-2 md:my-0 md:mx-5' />
                        <table class='w-full'>
                            <tbody>
                                <tr v-for='column of table2Columns'>
                                    <td class='align-baseline'>{{ column.label}}</td>
                                    <td class='align-baseline pl-3'>{{ modalBond[column.key] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- TODO: 串入報價日 -->
                    <div class='text-sm mt-2'>（報價日：2023.04.13）</div>
                </div>

            </div>
        </dialog>
    </div>
</template>

<script lang='ts' setup>
import { useBondDetailModalStore } from '@/stores/bondDetailModalStore';
import Bond from '@/models/Overseas/Bond';
import { del } from 'nuxt/dist/app/compat/capi';

const dialogRef = ref<HTMLDialogElement | null>(null);
const dragHandlerRef = ref<HTMLDivElement | null>(null);

const { clearBondDetailModal } = useBondDetailModalStore();
const { modalBond } = storeToRefs(useBondDetailModalStore());

const draging = ref(false);
const startDragY = ref(0);
const dragingY = ref(0);
const startDragTime = ref(0);
const closing = ref(false);

const table1Columns: {label: string, key: keyof Bond}[] = [
    { label: '到期日', key: 'dueDate' },
    { label: '票面利率', key: 'couponRate' },
    { label: '配息類型', key: 'dividendType' },
    { label: '最低交易面額（計價幣）', key: 'referencePurchasePrice' },
    { label: '債券類型', key: 'bondType' },
    { label: '發行機構', key: 'issuingInstitution' },
    { label: '參考到期殖利率 YTM', key: 'referenceYieldToMaturity' },
    { label: '參考贖回收益率 YTC', key: 'referenceYieldToCall' },
];

const table2Columns: {label: string, key: keyof Bond}[] = [
    { label: '下次配息日', key: 'nextAllotmentDate' },
    { label: '註冊國家', key: 'registeredCountry' },
    { label: '發行公司產業別', key: 'issuingCompanyIndustry' },
    { label: '是否可買回', key: 'isCallable' },
    { label: '下次買回日', key: 'nextCallDate' },
    { label: '投資人限制', key: 'needPI' },
]

watch(modalBond, (newValue) => {
    if (newValue !== null) {
        document.body.style.setProperty('overflow', 'hidden');
    }
    else {
        document.body.style.removeProperty('overflow');
    }
});

onMounted(() => {
    window?.addEventListener('touchmove', handleTouchMove);
    window?.addEventListener('touchend', handleTouchEnd);
})

onUnmounted(() => {
    window?.removeEventListener('touchmove', handleTouchMove);
    window?.removeEventListener('touchend', handleTouchEnd);
})

function handleTouchStart(e: TouchEvent) {
    draging.value = true;
    startDragY.value = e.touches[0].clientY;
    startDragTime.value = e.timeStamp;
}

function handleTouchMove(e: TouchEvent) {
    if (!draging.value) return;
    dragingY.value = e.touches[0].clientY;
    const deltaY = Math.max(dragingY.value - startDragY.value, 0);
    dialogRef.value?.style.setProperty('transform', `translateY(${deltaY}px)`);
}

function handleTouchEnd(e: TouchEvent) {
    if (!draging.value) return;
    draging.value = false;

    const deltaY = Math.max(dragingY.value - startDragY.value, 0);
    const deltaTime = e.timeStamp - startDragTime.value;

    if ((deltaY > 10 && deltaTime < 200) || deltaY > 200) {
        closing.value = true;
        dialogRef.value?.style.setProperty('transform', `translateY(100%)`);
        setTimeout(() => {
            clearBondDetailModal();
            closing.value = false;
        }, 300);
    }
    else {
        dialogRef.value?.style.setProperty('transform', `translateY(0px)`);
    }
}



</script>

<style scoped>
    @keyframes dialog-enter {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0%);
        }
    }
    .dialog-enter {
        animation: dialog-enter .3s ease-out;
    }
</style>