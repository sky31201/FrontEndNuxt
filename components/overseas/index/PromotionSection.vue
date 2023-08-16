<template>
    <div class="container px-4 md:px-0 mx-auto mt-20">
        <div class="relative w-full py-10 px-5 pb-48 md:py-14 lg:py-24 lg:px-24">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 md:hidden"
                src="/img/fake-promotion-mobile.jpg" alt="凱基銀行新戶好匯過暑假">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0 hidden md:block"
                src="/img/fake-promotion-desktop.jpg" alt="凱基銀行新戶好匯過暑假">
            
            <h2 class="text-3xl text-white font-medium relative lg:text-4xl">凱基銀行新戶好匯過暑假</h2>
            <p class="relative text-white text-xl mt-5 lg:text-2xl lg:mt-7">112/6/1~112/7/31 ，美元高利定存 6 個月期最高 4.68%</p>
            <!-- TODO: 需補上轉跳 -->
            <button class="relative bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center flex-shrink-0">
                活動詳情
                <img src="@/assets/img/icon-arrow-right.svg" alt="icon-arrow-right" class="block ml-4">
            </button>
        </div>
    </div>

    <div class="container mx-auto px-4 mt-20 md:mt-24 max-w-4xl">
        <h3 class="text-xl text-primary text-center font-medium md:text-2xl">注意事項</h3>    
        <hr class="mt-2 border-primary">
        <ul class="relative mt-5 pl-6 text-base text-black">
            <li v-for='(item, index) of notes' class="mb-2 marker:bg-primary">
                <span class="absolute left-0 w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-sm">{{ index + 1 }}</span>
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    // TODO: 替換成真實資料
    const notes = [
        '本行公告之申購參考報價、贖回參考報價由交易對手提供，僅供投資人作為申購或提前贖回之參考。受債券市場交易狀況影響，實際成交價格與本行公告之參考報價可能會有差異。',
        '參考申購參考報價及參考贖回參考報價為不含息報價；亦即，該報價不含應計配息（前手息）。',
        '債券不具備充分之市場流動性，在流動性缺乏或市場交易量不足的情況下，實際交易價格極可能會與申購參考報價及贖回參考報價產生顯著的價差（Spread），造成投資人於債券到期前贖回時，可能會發生損及原始投資金額的狀況，甚至在市場發生完全喪失流動性後，投資人必須持有債券至到期日。',
        '參考報價尚未考量手續費、信託管理費及相關費用（若有），投資人交易或商品到期時，仍可能需支付信託管理費及相關費用（若有）。相關費用均於各產品專用之「商品說明書」中載明，投資人應參詳閱產品說明文件以了解細節。',
        '若有任何問題，請洽各分行理財專員。',
    ]
</script>

<style scoped>

</style>
