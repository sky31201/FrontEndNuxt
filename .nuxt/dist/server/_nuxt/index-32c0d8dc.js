import { mergeProps, useSSRContext, ref, defineComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0$3 } from "./landing-bg-3294193d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { d as defineStore, p as persistedState, f as useHead } from "../server.mjs";
import { u as useBaseFetch } from "./useBaseFetch-b45509e5.js";
import { u as useLoadingStore } from "./loadingStore-df149339.js";
import "./index-e12b288f.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "defu";
const _imports_1$2 = "" + __buildAssetsURL("icon-kv-money.cfdfeb7e.svg");
const LandingHead_vue_vue_type_style_index_0_scoped_30183628_lang = "";
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative lg:h-[600px]" }, _attrs))} data-v-30183628><img class="absolute z-0 top-i0 left-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-30183628><div class="bg-deco absolute z-0 top-24 left-0 w-full bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-3/5 xl:w-1/2 bg-primary opacity-80" data-v-30183628></div><div class="container mx-auto px-4 py-10 pb-20 lg:pb-0 lg:py-40 relative z-10 flex flex-col lg:flex-row justify-between text-white" data-v-30183628><h1 class="text-dark-blue text-4xl lg:text-7xl font-light tracking-widest" data-v-30183628>海外債券專區</h1><div class="lg:max-w-[360px] mt-24 lg:mt-0 lg:ml-10" data-v-30183628><img${ssrRenderAttr("src", _imports_1$2)} alt="凱基債券產品" data-v-30183628><h2 class="text-2xl font-medium mt-2" data-v-30183628>凱基債券產品</h2><p class="text-base font-normal leading-6 mt-5" data-v-30183628>債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。</p></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/LandingHead.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-30183628"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex justify-center" }, _attrs))}><div class="absolute w-full md:w-3/5 lg:w-3/5 xl:w-2/5"><svg viewBox="0 0 414 404" class="w-full"><path d="M1263.467,404H1004.348L1157.868,0h260.48Z" transform="translate(-1004.348)" fill="#f0f4f7"></path></svg></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/BackgroundDeco1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$2 = "" + __buildAssetsURL("icon-pricing-short.f2311dbc.svg");
const _imports_2$1 = "" + __buildAssetsURL("icon-arrow-right.8674851c.svg");
const useKgiTwPriOltsAPICustomerQueryStore = defineStore("kgiTwPriOltsAPICustomerQueryStore", () => {
  const postData = ref({
    FunId: "KGItwPriOltsAPICustomer",
    Data: {
      SYSTEM_ID: "",
      IP: "",
      CUSTOMER_ID: "",
      ID: ""
    }
  });
  const responseData = ref();
  const options = {
    onRequest({ options: options2 }) {
      useLoadingStore().setLoadingShow(true);
      options2.body = postData.value;
      options2.headers = {
        Authorization: `Bearer 2223332`
      };
    },
    onResponse({ response }) {
      useLoadingStore().setLoadingShow(false);
      const result = response._data;
      if (result.StatusCode !== "0")
        return;
      responseData.value = result;
    }
  };
  const fetchData = async () => await useBaseFetch(`/api/OffShoreBond/Query`, options);
  return { fetchData, postData, responseData };
}, {
  persist: {
    key: "customer",
    storage: persistedState.sessionStorage
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BondTotalMarketValue",
  __ssrInlineRender: true,
  setup(__props) {
    const isLogin = ref(false);
    ref();
    const customerStore = useKgiTwPriOltsAPICustomerQueryStore();
    customerStore.fetchData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-10 mx-4 py-6 md:px-10 md:py-12 max-w-3xl md:mx-auto lg:max-w-4xl flex flex-col md:flex-row md:justify-between items-center bg-white shadow-lg rounded-2xl -mt-16 text-primary" }, _attrs))}><div class="md:flex flex-wrap items-center"><div class="font-bold text-lg md:w-full">債券總參考市值 (TWD)</div><div class="mt-5 flex flex-col items-center md:flex-row"><div class="font-medium text-5xl">$ 60,916</div><div class="flex items-center mt-3 md:mt-0 md:ml-7 text-lg text-green"> − $252 / <img class="ml-1"${ssrRenderAttr("src", _imports_0$2)}>1.40% </div></div></div>`);
      if (unref(isLogin)) {
        _push(`<button class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"> 查看庫存分佈 <img${ssrRenderAttr("src", _imports_2$1)} alt="查看庫存分佈" class="h-4 ml-4 relative top-[-1px]"></button>`);
      } else {
        _push(`<button class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"> 登入查看您的資產 <img${ssrRenderAttr("src", _imports_2$1)} alt="登入查看您的資產" class="h-4 ml-4 relative top-[-1px]"></button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/BondTotalMarketValue.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function useCarousel(itemsSelector = ".carousel-item") {
  const activeIndex = ref(0);
  const isEnd = ref(false);
  const isStart = ref(true);
  function handleCarouselScroll(e) {
    const container = e.currentTarget;
    if (!container)
      return;
    const items = container.querySelectorAll(itemsSelector);
    const scrollPosition = container.scrollLeft;
    let currentIndex = 0;
    let minDistance = Infinity;
    items.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - scrollPosition);
      const align = getComputedStyle(item).scrollSnapAlign;
      const isAligned = align === "start" || align === "center" || align === "end";
      if (distance < minDistance && isAligned) {
        minDistance = distance;
        currentIndex = index;
      }
    });
    if (currentIndex !== activeIndex.value) {
      activeIndex.value = currentIndex;
    }
    if (isStart.value !== (scrollPosition === 0)) {
      isStart.value = scrollPosition === 0;
    }
    if (isEnd.value !== (scrollPosition === container.scrollWidth - container.clientWidth)) {
      isEnd.value = scrollPosition === container.scrollWidth - container.clientWidth;
    }
  }
  return {
    activeIndex,
    isStart,
    isEnd,
    handleCarouselScroll
  };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IntroCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const { activeIndex, handleCarouselScroll } = useCarousel();
    const items = ref([
      {
        imgSrc: "/img/fake-img-index-carousel-1.jpg",
        title: "債券主要組成部分",
        description: "債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。"
      },
      {
        imgSrc: "/img/fake-img-index-carousel-1.jpg",
        title: "債券主要組成部分",
        description: "債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative mx-4 lg:container lg:px-10 lg:mx-auto" }, _attrs))}><div class="flex carousel mt-20"><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<div${ssrRenderAttr("id", `item${index + 1}`)} class="carousel-item w-full relative box-border flex-col lg:flex-row-reverse lg:items-start"><img${ssrRenderAttr("src", item.imgSrc)} class="w-full rounded-2xl lg:ml-14"><div class="mt-6 lg:mt-0"><div class="text-5xl font-light text-primary">${ssrInterpolate((index + 1).toString().padStart(2, "0"))}</div><h3 class="text-3xl font-medium text-black mt-5">${ssrInterpolate(item.title)}</h3><p class="text-base text-black mt-3">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center w-full py-2 gap-2 mt-3 lg:absolute lg:bottom-0 lg:left-10 lg:w-auto"><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<a${ssrRenderAttr("href", `#item${index + 1}`)}${ssrRenderAttr("id", `#item${index + 1}`)}${ssrRenderAttr("data-active", unref(activeIndex) === index)} class="w-7 h-2 rounded-full bg-gray-2 border-0 data-[active=true]:bg-primary data-[active=true]:w-12 transition-all"></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/IntroCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("icon-arrow-left.3f8b0aad.svg");
const _imports_1$1 = "" + __buildAssetsURL("icon-collapse.90a66254.svg");
const _imports_2 = "" + __buildAssetsURL("icon-keep-scroll-right.cca62e6f.svg");
const _imports_3 = "" + __buildAssetsURL("icon-arrow-right-black.e688a1b4.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PopularBonds",
  __ssrInlineRender: true,
  setup(__props) {
    const cardOpen = ref(false);
    const { isStart, isEnd, handleCarouselScroll, activeIndex } = useCarousel();
    const bonds = ref([
      {
        id: "US084664CR08",
        symbolName: "蘋果公司公司債",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "每半年",
        valuationCurrency: "USD",
        bondType: "公司債",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "美國",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "默克藥廠公司債",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "每半年",
        valuationCurrency: "USD",
        bondType: "公司債",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "美國",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "聯合包裹服務公司債",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "每半年",
        valuationCurrency: "USD",
        bondType: "公司債",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "美國",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "高特利集團",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "每半年",
        valuationCurrency: "USD",
        bondType: "公司債",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "美國",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-0 container overflow-hidden text-black mt-20 px-4 mx-auto max-w-4xl" }, _attrs))} data-v-1b04daf2><h2 class="text-3xl font-medium text-center" data-v-1b04daf2>凱基熱門債券</h2><p class="text-center text-base mt-3" data-v-1b04daf2> 各種不同年期、利率和配息類型的債券，一目了然 </p><div class="relative mt-5" data-v-1b04daf2><div class="carousel w-full" data-v-1b04daf2><!--[-->`);
      ssrRenderList(unref(bonds), (bond, index) => {
        _push(`<div${ssrRenderAttr("id", "symbolName" + index)} class="carousel-item relative px-3 pb-10 w-[calc(100%-24px)]" data-v-1b04daf2><div class="card card-compact w-full bg-white shadow-xl mt-6" data-v-1b04daf2><div style="${ssrRenderStyle(index !== 0 ? null : { display: "none" })}" class="absolute top-0 left-[-20px] h-full flex justify-end items-center w-10" data-v-1b04daf2><a${ssrRenderAttr("href", "#symbolName" + (index - 1))} class="flex justify-center items-center w-10 z-10" data-v-1b04daf2><img class="relative -top-1 w-7"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-1b04daf2></a></div><figure class="bg-dark-blue text-white p-5 flex items-center flex-col md:flex-row" data-v-1b04daf2><h3 class="text-xl leading-8 mr-auto" data-v-1b04daf2>${ssrInterpolate(bond.symbolName)} （${ssrInterpolate(bond.valuationCurrency)}） <span class="hidden md:inline" data-v-1b04daf2>｜</span><br class="md:hidden" data-v-1b04daf2> ${ssrInterpolate(bond.id)}</h3><button class="ml-auto mt-3 flex-shrink-0 px-5 py-3 bg-orange text-white text-base rounded-lg md:ml-5 md:mt-0" data-v-1b04daf2> 立即申購 </button></figure><div class="card-body p-5 gap-3 lg:flex-row" data-v-1b04daf2><table class="lg:flex-1 lg:border-r-2" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>到期日</td><td data-v-1b04daf2>${ssrInterpolate(bond.dueDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>票面利率</td><td data-v-1b04daf2>${ssrInterpolate(bond.couponRate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>配息類型</td><td data-v-1b04daf2>${ssrInterpolate(bond.dividendType)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>計價幣</td><td data-v-1b04daf2>${ssrInterpolate(bond.valuationCurrency)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>債券類型</td><td data-v-1b04daf2>${ssrInterpolate(bond.bondType)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>參考申購買進價</td><td data-v-1b04daf2>${ssrInterpolate(bond.referencePurchasePrice)}</td></tr></tbody></table><hr data-v-1b04daf2><table class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:[display:table] lg:flex-1 lg:border-r-2`)}" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>報價日</td><td data-v-1b04daf2>${ssrInterpolate(bond.quoteDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>發行機構</td><td data-v-1b04daf2>${ssrInterpolate(bond.issuingInstitution)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>參考到期殖利率 YTM</td><td data-v-1b04daf2>${ssrInterpolate(bond.referenceYieldToMaturity)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>參考贖回收益率 YTC</td><td data-v-1b04daf2>${ssrInterpolate(bond.referenceYieldToCall)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>是否需要PI</td><td data-v-1b04daf2>${ssrInterpolate(bond.needPI)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>商品風險等級</td><td data-v-1b04daf2>${ssrInterpolate(bond.productRiskLevel)}</td></tr></tbody></table><hr class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:block`)}" data-v-1b04daf2><table class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:[display:table] lg:flex-1`)}" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>剩餘年期</td><td data-v-1b04daf2>${ssrInterpolate(bond.remainingTenure)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>下次配席日</td><td data-v-1b04daf2>${ssrInterpolate(bond.nextAllotmentDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>註冊國家</td><td data-v-1b04daf2>${ssrInterpolate(bond.registeredCountry)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>發行公司產業別</td><td data-v-1b04daf2>${ssrInterpolate(bond.issuingCompanyIndustry)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>是否可買回</td><td data-v-1b04daf2>${ssrInterpolate(bond.isCallable)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>下次買回日</td><td data-v-1b04daf2>${ssrInterpolate(bond.nextCallDate)}</td></tr></tbody></table><button class="mt-2 text-medium flex items-center justify-center gap-2 lg:hidden" data-v-1b04daf2>${ssrInterpolate(unref(cardOpen) ? "收合" : "展開")} <img${ssrRenderAttr("src", _imports_1$1)} class="${ssrRenderClass(unref(cardOpen) ? "rotate-180" : "")}" data-v-1b04daf2></button></div></div><div class="absolute top-0 right-0 h-full flex justify-end items-center w-10 bg-red-500 z-10 bg-scroll-end" style="${ssrRenderStyle(!unref(isEnd) ? null : { display: "none" })}" data-v-1b04daf2><a${ssrRenderAttr("href", "#symbolName" + (index + 1))} data-v-1b04daf2><img class="relative -top-1 w-7"${ssrRenderAttr("src", _imports_2)} alt="" data-v-1b04daf2></a></div></div>`);
      });
      _push(`<!--]--></div></div><div class="text-sm mt-5 pl-3" data-v-1b04daf2>資料更新日期 2023.06.15</div><button class="mt-10 mx-auto text-primary text-medium flex items-center justify-center gap-2 lg:mr-0" data-v-1b04daf2> 查看更多 <img${ssrRenderAttr("src", _imports_3)} data-v-1b04daf2></button></div>`);
    };
  }
});
const PopularBonds_vue_vue_type_style_index_0_scoped_1b04daf2_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/PopularBonds.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1b04daf2"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-0 lg:-top-10" }, _attrs))}><div class="absolute"><svg width="414" height="268" viewBox="0 0 414 268" class="max-w-[100vw] w-auto lg:h-[50vh]"><path d="M950.141,0H639.07V268h414Z" transform="translate(-639.07)" fill="#f0f4f7"></path></svg></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/BackgroundDeco2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const icon1 = "" + __buildAssetsURL("icon-overseas-my-choice.d28ca3ba.svg");
const icon2 = "" + __buildAssetsURL("icon-overseas-purchase.3769656a.svg");
const icon3 = "" + __buildAssetsURL("icon-overseas-view-all-bonds.560e2964.svg");
const icon4 = "" + __buildAssetsURL("icon-overseas-open-account.3798c7ef.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FunctionButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const buttons = [
      { label: "自選", icon: icon1, link: "" },
      { label: "申購", icon: icon2, link: "" },
      { label: "查看所有債券標的", icon: icon3, link: "/overseas/find" },
      { label: "立即開戶", icon: icon4, link: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20 relative z-0" }, _attrs))}><h2 class="text-3xl text-center font-medium text-black">海外債券自選申購</h2><div class="container mt-5 px-4 max-w-4xl mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(buttons, (item, index) => {
        _push(`<button class="group/button flex flex-col items-center justify-center py-5 px-6 bg-white rounded-2xl shadow-lg text-center lg:py-8 lg:px-7 hover:bg-primary"><div class="relative flex justify-center items-center w-20 h-20 bg-blue-grey rounded-full lg:w-28 lg:h-28"><img class="w-full h-full"${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.label)}></div><span class="text-lg font-medium text-primary mt-4 group-hover/button:text-white">${ssrInterpolate(item.label)}</span></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/FunctionButtons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("img/fake-promotion-mobile.jpg");
const _imports_1 = "" + __publicAssetsURL("img/fake-promotion-desktop.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PromotionSection",
  __ssrInlineRender: true,
  setup(__props) {
    const notes = [
      "本行公告之申購參考報價、贖回參考報價由交易對手提供，僅供投資人作為申購或提前贖回之參考。受債券市場交易狀況影響，實際成交價格與本行公告之參考報價可能會有差異。",
      "參考申購參考報價及參考贖回參考報價為不含息報價；亦即，該報價不含應計配息（前手息）。",
      "債券不具備充分之市場流動性，在流動性缺乏或市場交易量不足的情況下，實際交易價格極可能會與申購參考報價及贖回參考報價產生顯著的價差（Spread），造成投資人於債券到期前贖回時，可能會發生損及原始投資金額的狀況，甚至在市場發生完全喪失流動性後，投資人必須持有債券至到期日。",
      "參考報價尚未考量手續費、信託管理費及相關費用（若有），投資人交易或商品到期時，仍可能需支付信託管理費及相關費用（若有）。相關費用均於各產品專用之「商品說明書」中載明，投資人應參詳閱產品說明文件以了解細節。",
      "若有任何問題，請洽各分行理財專員。"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container px-4 md:px-0 mx-auto mt-20"><div class="relative w-full py-10 px-5 pb-48 md:py-14 lg:py-24 lg:px-24"><img class="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 md:hidden"${ssrRenderAttr("src", _imports_0)} alt="凱基銀行新戶好匯過暑假"><img class="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0 hidden md:block"${ssrRenderAttr("src", _imports_1)} alt="凱基銀行新戶好匯過暑假"><h2 class="text-3xl text-white font-medium relative lg:text-4xl">凱基銀行新戶好匯過暑假</h2><p class="relative text-white text-xl mt-5 lg:text-2xl lg:mt-7">112/6/1~112/7/31 ，美元高利定存 6 個月期最高 4.68%</p><button class="relative bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center flex-shrink-0"> 活動詳情 <img${ssrRenderAttr("src", _imports_2$1)} alt="icon-arrow-right" class="block ml-4"></button></div></div><div class="container mx-auto px-4 mt-20 md:mt-24 max-w-4xl"><h3 class="text-xl text-primary text-center font-medium md:text-2xl">注意事項</h3><hr class="mt-2 border-primary"><ul class="relative mt-5 pl-6 text-base text-black"><!--[-->`);
      ssrRenderList(notes, (item, index) => {
        _push(`<li class="mb-2 marker:bg-primary"><span class="absolute left-0 w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-sm">${ssrInterpolate(index + 1)}</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/PromotionSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TradeInstructions",
  __ssrInlineRender: true,
  setup(__props) {
    const instructions = [
      {
        title: "主要投資風險",
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
        title: "主要投資風險",
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
        title: "主要投資風險",
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
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10 mt-10 pb-20 md:mt-16 md:pt-16 bg-gray-3" }, _attrs))} data-v-b47c2770><div class="container mx-auto px-4 max-w-4xl" data-v-b47c2770><h3 class="text-xl text-primary text-center font-medium md:text-2xl" data-v-b47c2770>交易說明</h3><hr class="mt-2 border-primary" data-v-b47c2770><div data-v-b47c2770><!--[-->`);
      ssrRenderList(instructions, (instruction, index) => {
        _push(`<div class="collapse px-1 mt-5 transition-none" data-v-b47c2770><input type="checkbox" class="peer collapse-item-checkbox" data-v-b47c2770><h4 class="collapse-title p-5 h-16 shadow-md rounded-2xl bg-white text-black text-lg flex justify-between items-center peer-checked:bg-primary peer-checked:text-white" data-v-b47c2770>${ssrInterpolate(instruction.title)} <svg width="20" height="20" viewBox="0 0 20 20" class="transition-all duration-300" data-v-b47c2770><line y2="18.605" transform="translate(10 0.698)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-v-b47c2770></line><line x2="18.605" transform="translate(0.698 10)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-v-b47c2770></line></svg></h4><div class="collapse-content my-0 p-0 bg-white rounded-2xl shadow-md peer-checked:my-3 peer-checked:p-5" data-v-b47c2770><!--[-->`);
        ssrRenderList(instruction.items, (item, index2) => {
          _push(`<div class="relative text-black text-base pl-6 border-b-2 pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0" data-v-b47c2770><span class="absolute left-0 w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-sm" data-v-b47c2770>${ssrInterpolate(index2 + 1)}</span><h5 class="text-primary font-medium" data-v-b47c2770>${ssrInterpolate(item.title)}</h5><p class="mt-2" data-v-b47c2770>${ssrInterpolate(item.content)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const TradeInstructions_vue_vue_type_style_index_0_scoped_b47c2770_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/index/TradeInstructions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b47c2770"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "凱基專區市場資訊",
      meta: [{ name: "description", content: "凱基專區市場資訊" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasIndexLandingHead = __nuxt_component_0;
      const _component_OverseasIndexBackgroundDeco1 = __nuxt_component_1;
      const _component_OverseasIndexBondTotalMarketValue = _sfc_main$7;
      const _component_OverseasIndexIntroCarousel = _sfc_main$6;
      const _component_OverseasIndexPopularBonds = __nuxt_component_4;
      const _component_OverseasIndexBackgroundDeco2 = __nuxt_component_5;
      const _component_OverseasIndexFunctionButtons = _sfc_main$3;
      const _component_OverseasIndexPromotionSection = _sfc_main$2;
      const _component_OverseasIndexTradeInstructions = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OverseasIndexLandingHead, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexBackgroundDeco1, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexBondTotalMarketValue, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexIntroCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexPopularBonds, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexBackgroundDeco2, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexFunctionButtons, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexPromotionSection, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasIndexTradeInstructions, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/overseas/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-32c0d8dc.js.map
