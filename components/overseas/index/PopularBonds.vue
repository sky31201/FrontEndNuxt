<template>
  <div
    class="relative z-0 container overflow-hidden text-black mt-20 px-4 mx-auto max-w-4xl"
  >
    <h2 class="text-3xl font-medium text-center">凱基熱門債券</h2>
    <p class="text-center text-base mt-3">
      各種不同年期、利率和配息類型的債券，一目了然
    </p>

    <div class="relative mt-5">
      <!-- <div class='absolute h-full flex justify-start items-center w-10 bg-red-500 z-10 bg-scroll-start' v-if='!isStart'>
                <img class="relative -top-1 rotate-180" src="@/assets/img/icon-keep-scroll-right.svg" alt="">
            </div> -->
      <div class="carousel w-full" @scroll="handleCarouselScroll">
        <div
          v-for="(bond, index) in bonds"
          :id="'symbolName' + index"
          class="carousel-item relative px-3 pb-10 w-[calc(100%-24px)]"
        >
          <div class="card card-compact w-full bg-white shadow-xl mt-6">
            <div
            v-show="index !== 0"
              class="absolute top-0 left-[-20px] h-full flex justify-end items-center w-10 "
            >
              <a
                :href="'#symbolName' + (index - 1)"
                class="flex justify-center items-center w-10 z-10"
              >
                <img
                  class="relative -top-1 w-7"
                  src="@/assets/img/icon-arrow-left.svg"
                  alt=""
                />
              </a>
            </div>
            <figure
              class="bg-dark-blue text-white p-5 flex items-center flex-col md:flex-row"
            >
              <h3 class="text-xl leading-8 mr-auto">
                {{ bond.symbolName }} （{{ bond.valuationCurrency }}）
                <span class="hidden md:inline">｜</span>
                <br class="md:hidden" />
                {{ bond.id }}
              </h3>
              <button
                class="ml-auto mt-3 flex-shrink-0 px-5 py-3 bg-orange text-white text-base rounded-lg md:ml-5 md:mt-0"
              >
                立即申購
              </button>
            </figure>
            <div class="card-body p-5 gap-3 lg:flex-row">
              <table class="lg:flex-1 lg:border-r-2">
                <tbody class="text-base">
                  <tr>
                    <td>到期日</td>
                    <td>{{ bond.dueDate }}</td>
                  </tr>
                  <tr>
                    <td>票面利率</td>
                    <td>{{ bond.couponRate }}</td>
                  </tr>
                  <tr>
                    <td>配息類型</td>
                    <td>{{ bond.dividendType }}</td>
                  </tr>
                  <tr>
                    <td>計價幣</td>
                    <td>{{ bond.valuationCurrency }}</td>
                  </tr>
                  <tr>
                    <td>債券類型</td>
                    <td>{{ bond.bondType }}</td>
                  </tr>
                  <tr>
                    <td>參考申購買進價</td>
                    <td>{{ bond.referencePurchasePrice }}</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table
                :class="`${
                  !cardOpen ? 'hidden' : ''
                } lg:[display:table] lg:flex-1 lg:border-r-2`"
              >
                <tbody class="text-base">
                  <tr>
                    <td>報價日</td>
                    <td>{{ bond.quoteDate }}</td>
                  </tr>
                  <tr>
                    <td>發行機構</td>
                    <td>{{ bond.issuingInstitution }}</td>
                  </tr>
                  <tr>
                    <td>參考到期殖利率 YTM</td>
                    <td>{{ bond.referenceYieldToMaturity }}</td>
                  </tr>
                  <tr>
                    <td>參考贖回收益率 YTC</td>
                    <td>{{ bond.referenceYieldToCall }}</td>
                  </tr>
                  <tr>
                    <td>是否需要PI</td>
                    <td>{{ bond.needPI }}</td>
                  </tr>
                  <tr>
                    <td>商品風險等級</td>
                    <td>{{ bond.productRiskLevel }}</td>
                  </tr>
                </tbody>
              </table>
              <hr :class="`${!cardOpen ? 'hidden' : ''} lg:block`" />
              <table
                :class="`${
                  !cardOpen ? 'hidden' : ''
                } lg:[display:table] lg:flex-1`"
              >
                <tbody class="text-base">
                  <tr>
                    <td>剩餘年期</td>
                    <td>{{ bond.remainingTenure }}</td>
                  </tr>
                  <tr>
                    <td>下次配席日</td>
                    <td>{{ bond.nextAllotmentDate }}</td>
                  </tr>
                  <tr>
                    <td>註冊國家</td>
                    <td>{{ bond.registeredCountry }}</td>
                  </tr>
                  <tr>
                    <td>發行公司產業別</td>
                    <td>{{ bond.issuingCompanyIndustry }}</td>
                  </tr>
                  <tr>
                    <td>是否可買回</td>
                    <td>{{ bond.isCallable }}</td>
                  </tr>
                  <tr>
                    <td>下次買回日</td>
                    <td>{{ bond.nextCallDate }}</td>
                  </tr>
                </tbody>
              </table>

              <button
                class="mt-2 text-medium flex items-center justify-center gap-2 lg:hidden"
                @click="cardOpen = !cardOpen"
              >
                {{ cardOpen ? '收合' : '展開' }}
                <img
                  src="@/assets/img/icon-collapse.svg"
                  :class="cardOpen ? 'rotate-180' : ''"
                />
              </button>
            </div>
          </div>
          <div
            class="absolute top-0 right-0 h-full flex justify-end items-center w-10 bg-red-500 z-10 bg-scroll-end"
            v-show="!isEnd"
          >
            <a :href="'#symbolName' + (index + 1)">
              <img
                class="relative -top-1 w-7"
                src="@/assets/img/icon-keep-scroll-right.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="text-sm mt-5 pl-3">資料更新日期 2023.06.15</div>

    <button
      class="mt-10 mx-auto text-primary text-medium flex items-center justify-center gap-2 lg:mr-0"
    >
      查看更多
      <img src="@/assets/img/icon-arrow-right-black.svg" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const cardOpen = ref(false)
const { isStart, isEnd, handleCarouselScroll, activeIndex } = useCarousel()

// TODO: 需要更換為真實資料
const bonds = ref([
  {
    id: 'US084664CR08',
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
    nextCallDate: '2046.08.09'
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
    nextCallDate: '2046.08.09'
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
    nextCallDate: '2046.08.09'
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
    nextCallDate: '2046.08.09'
  }
])

</script>

<style scoped>
.bg-scroll-start {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.bg-scroll-end {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
