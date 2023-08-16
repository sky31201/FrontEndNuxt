<template>
    <div class="pt-10 mt-10 pb-20 md:mt-16 md:pt-16 bg-gray-3">
        <div class="container mx-auto px-4 max-w-4xl">
            <h3 class="text-xl text-primary text-center font-medium md:text-2xl">交易說明</h3>    
            <hr class="mt-2 border-primary">
            <div>
                <div v-for="(instruction, index) in instructions" :key="index" class="collapse px-1 mt-5 transition-none">
                    <input type="checkbox" class="peer collapse-item-checkbox"/> 
                    <h4 class="collapse-title p-5 h-16 shadow-md rounded-2xl bg-white text-black text-lg flex justify-between items-center peer-checked:bg-primary peer-checked:text-white ">
                        {{ instruction.title }}
                        <svg width="20" height="20" viewBox="0 0 20 20" class="transition-all duration-300">
                            <line y2="18.605" transform="translate(10 0.698)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <line x2="18.605" transform="translate(0.698 10)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </svg>
                    </h4>
                    <div class="collapse-content my-0 p-0 bg-white rounded-2xl shadow-md peer-checked:my-3 peer-checked:p-5">
                        <div v-for="(item, index) in instruction.items" :key="index" class="relative text-black text-base pl-6 border-b-2 pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0">
                            <span class="absolute left-0 w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-sm">{{ index + 1 }}</span>
                            <h5 class="text-primary font-medium">{{ item.title }}</h5>
                            <p class="mt-2">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const instructions = [
        {
            title: '主要投資風險',
            items: [
                { 
                    title: "流動性風險及提前贖回風險",
                    content: "若債券流動性不佳，會影響其變現速度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "利率風險",
                    content: "債券自正式交割發行後，存續期間的市場價格，將受發行幣別利率變動影響；當該幣別利率調升時，債券的市場價格有可能下降，並有可能低於票面價格而損及原始投資金額"
                },
                { 
                    title: "信用風險",
                    content: "若債券流動性不佳，會影響其變現速投資人需考慮發行機構的實力及財務狀況，以及信評機構的評等。投資人須自行承擔發行機構的信用風險度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "匯率風險",
                    content: "外幣計價的投資產品，若原始以新台幣或非計價幣別的外幣承作，須留意不同幣別間轉換的匯率風險"
                }
            ]
        },
        {
            title: '主要投資風險',
            items: [
                { 
                    title: "流動性風險及提前贖回風險",
                    content: "若債券流動性不佳，會影響其變現速度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "利率風險",
                    content: "債券自正式交割發行後，存續期間的市場價格，將受發行幣別利率變動影響；當該幣別利率調升時，債券的市場價格有可能下降，並有可能低於票面價格而損及原始投資金額"
                },
                { 
                    title: "信用風險",
                    content: "若債券流動性不佳，會影響其變現速投資人需考慮發行機構的實力及財務狀況，以及信評機構的評等。投資人須自行承擔發行機構的信用風險度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "匯率風險",
                    content: "外幣計價的投資產品，若原始以新台幣或非計價幣別的外幣承作，須留意不同幣別間轉換的匯率風險"
                }
            ]
        },
        {
            title: '主要投資風險',
            items: [
                { 
                    title: "流動性風險及提前贖回風險",
                    content: "若債券流動性不佳，會影響其變現速度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "利率風險",
                    content: "債券自正式交割發行後，存續期間的市場價格，將受發行幣別利率變動影響；當該幣別利率調升時，債券的市場價格有可能下降，並有可能低於票面價格而損及原始投資金額"
                },
                { 
                    title: "信用風險",
                    content: "若債券流動性不佳，會影響其變現速投資人需考慮發行機構的實力及財務狀況，以及信評機構的評等。投資人須自行承擔發行機構的信用風險度及價格；投資人提前贖回，可能有本金折價的風險。通常政府公債的流動性最高，金融及公司債次之。部分債券因發行量較小、缺乏信用評等機構評估債信等因素而喪失流動性"
                },
                { 
                    title: "匯率風險",
                    content: "外幣計價的投資產品，若原始以新台幣或非計價幣別的外幣承作，須留意不同幣別間轉換的匯率風險"
                }
            ]
        }
    ]
</script>

<style scoped>
    .collapse-item-checkbox:checked + h4 > svg {
        transform: rotate(45deg);
    }
</style>
