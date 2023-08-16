<template>
    <div class="bg-gray-3">
        <div class="py-5 container px-6 mx-auto flex justify-between items-center">
            <img src='@/assets/img/kgi-logo.png' alg='凱基證券 KGI SECURITIES' class='h-11'>

            <button class='md:hidden'>
                <svg width="24" height="10.5" viewBox="0 0 24 10.5">
                    <g transform="translate(-304 -34.165)">
                        <line x2="22.5" transform="translate(304.75 34.915)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <line x2="14.5" transform="translate(312.75 43.915)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                </svg>
            </button>

            <button class="relative hidden md:block" v-if='cartVisible'>
                <svg width="26" height="22" viewBox="0 0 26 22" class="relative left-[-2px] top-[2px]">
                    <path d="M1,1H5.429L9.513,17.306H22.248" transform="translate(-0.008 -0.008)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path d="M6.312,4.382H25.059l-2.353,9.495H8.689Z" transform="translate(-0.05 -0.038)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <line x1="16.413" transform="translate(7.45 8.964)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <line y2="9.159" transform="translate(15.657 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <line x1="1.395" y2="9.159" transform="translate(19.186 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <line x2="1.395" y2="9.159" transform="translate(10.73 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_48" d="M12.6,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.077 -0.166)" />
                    <path id="Path_49" d="M21.976,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.151 -0.166)" />
                </svg>
                <div class="absolute -top-3 -right-3 px-1.5 py-0.5 bg-orange rounded-full text-xs text-white">{{ cartItemCount }}</div>
            </button>

        </div>
        <div class="bg-white hidden md:block">
            <nav class="container px-6 py-3 mx-auto text-black">
                <NuxtLink to='/overseas' v-for='item of menuItems' class='after:[content:"｜"] last:after:hidden'>
                    {{ item.label }}
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const title = ref('')
title.value = route.fullPath.toLowerCase().includes('overseas') ? '海外投資' : ''

const cartVisible = useCartVisible();
// TODO: 串入購物車數字
const cartItemCount = ref(0);

const menuItems = [
    { label: 'myKGI' },
    { label: '凱基公告' },
    { label: '借券專區' },
    { label: '快e貸' },
    { label: '台股定期定額' },
    { label: '海外債券交易' },
    { label: '集保庫存匯撥' },
    { label: '研究報告' },
    { label: '股票申購' },
    { label: '競價拍賣' },
    { label: '網路銀行' },
    { label: '授權扣款約定' },
]

</script>

<style scoped></style>
