import { b as buildAssetsURL, p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0$3 } from './landing-bg-3294193d.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as defineStore, p as persistedState, f as useHead } from '../server.mjs';
import { u as useBaseFetch } from './useBaseFetch-b45509e5.mjs';
import { u as useLoadingStore } from './loadingStore-df149339.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:path';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'memory-cache';
import 'perf_hooks';
import 'xss';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'pinia-plugin-persistedstate';

const _imports_1$2 = "" + buildAssetsURL("icon-kv-money.cfdfeb7e.svg");
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative lg:h-[600px]" }, _attrs))} data-v-30183628><img class="absolute z-0 top-i0 left-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-30183628><div class="bg-deco absolute z-0 top-24 left-0 w-full bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-3/5 xl:w-1/2 bg-primary opacity-80" data-v-30183628></div><div class="container mx-auto px-4 py-10 pb-20 lg:pb-0 lg:py-40 relative z-10 flex flex-col lg:flex-row justify-between text-white" data-v-30183628><h1 class="text-dark-blue text-4xl lg:text-7xl font-light tracking-widest" data-v-30183628>\u6D77\u5916\u50B5\u5238\u5C08\u5340</h1><div class="lg:max-w-[360px] mt-24 lg:mt-0 lg:ml-10" data-v-30183628><img${ssrRenderAttr("src", _imports_1$2)} alt="\u51F1\u57FA\u50B5\u5238\u7522\u54C1" data-v-30183628><h2 class="text-2xl font-medium mt-2" data-v-30183628>\u51F1\u57FA\u50B5\u5238\u7522\u54C1</h2><p class="text-base font-normal leading-6 mt-5" data-v-30183628>\u50B5\u5238\u7531\u5168\u7403\u653F\u5E9C\u3001\u8DE8\u570B\u9280\u884C\u6216\u77E5\u540D\u4F01\u696D\u767C\u884C\u3002\u5B9A\u671F\u4ED8\u606F\uFF0C\u5230\u671F\u8FD4\u9084 100% \u9762\u984D\u7684\u8CC7\u91D1\uFF0C\u975E\u5E38\u9069\u5408\u5F37\u8ABF\u7A69\u5065\u6536\u76CA\u7684\u6295\u8CC7\u4EBA\u3002</p></div></div></div>`);
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
const _imports_0$2 = "" + buildAssetsURL("icon-pricing-short.f2311dbc.svg");
const _imports_2$1 = "" + buildAssetsURL("icon-arrow-right.8674851c.svg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-10 mx-4 py-6 md:px-10 md:py-12 max-w-3xl md:mx-auto lg:max-w-4xl flex flex-col md:flex-row md:justify-between items-center bg-white shadow-lg rounded-2xl -mt-16 text-primary" }, _attrs))}><div class="md:flex flex-wrap items-center"><div class="font-bold text-lg md:w-full">\u50B5\u5238\u7E3D\u53C3\u8003\u5E02\u503C (TWD)</div><div class="mt-5 flex flex-col items-center md:flex-row"><div class="font-medium text-5xl">$ 60,916</div><div class="flex items-center mt-3 md:mt-0 md:ml-7 text-lg text-green"> \u2212 $252 / <img class="ml-1"${ssrRenderAttr("src", _imports_0$2)}>1.40% </div></div></div>`);
      if (unref(isLogin)) {
        _push(`<button class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"> \u67E5\u770B\u5EAB\u5B58\u5206\u4F48 <img${ssrRenderAttr("src", _imports_2$1)} alt="\u67E5\u770B\u5EAB\u5B58\u5206\u4F48" class="h-4 ml-4 relative top-[-1px]"></button>`);
      } else {
        _push(`<button class="bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center md:mt-0 flex-shrink-0"> \u767B\u5165\u67E5\u770B\u60A8\u7684\u8CC7\u7522 <img${ssrRenderAttr("src", _imports_2$1)} alt="\u767B\u5165\u67E5\u770B\u60A8\u7684\u8CC7\u7522" class="h-4 ml-4 relative top-[-1px]"></button>`);
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
        title: "\u50B5\u5238\u4E3B\u8981\u7D44\u6210\u90E8\u5206",
        description: "\u50B5\u5238\u7531\u5168\u7403\u653F\u5E9C\u3001\u8DE8\u570B\u9280\u884C\u6216\u77E5\u540D\u4F01\u696D\u767C\u884C\u3002\u5B9A\u671F\u4ED8\u606F\uFF0C\u5230\u671F\u8FD4\u9084 100% \u9762\u984D\u7684\u8CC7\u91D1\uFF0C\u975E\u5E38\u9069\u5408\u5F37\u8ABF\u7A69\u5065\u6536\u76CA\u7684\u6295\u8CC7\u4EBA\u3002"
      },
      {
        imgSrc: "/img/fake-img-index-carousel-1.jpg",
        title: "\u50B5\u5238\u4E3B\u8981\u7D44\u6210\u90E8\u5206",
        description: "\u50B5\u5238\u7531\u5168\u7403\u653F\u5E9C\u3001\u8DE8\u570B\u9280\u884C\u6216\u77E5\u540D\u4F01\u696D\u767C\u884C\u3002\u5B9A\u671F\u4ED8\u606F\uFF0C\u5230\u671F\u8FD4\u9084 100% \u9762\u984D\u7684\u8CC7\u91D1\uFF0C\u975E\u5E38\u9069\u5408\u5F37\u8ABF\u7A69\u5065\u6536\u76CA\u7684\u6295\u8CC7\u4EBA\u3002"
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
const _imports_0$1 = "" + buildAssetsURL("icon-arrow-left.3f8b0aad.svg");
const _imports_1$1 = "" + buildAssetsURL("icon-collapse.90a66254.svg");
const _imports_2 = "" + buildAssetsURL("icon-keep-scroll-right.cca62e6f.svg");
const _imports_3 = "" + buildAssetsURL("icon-arrow-right-black.e688a1b4.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PopularBonds",
  __ssrInlineRender: true,
  setup(__props) {
    const cardOpen = ref(false);
    const { isStart, isEnd, handleCarouselScroll, activeIndex } = useCarousel();
    const bonds = ref([
      {
        id: "US084664CR08",
        symbolName: "\u860B\u679C\u516C\u53F8\u516C\u53F8\u50B5",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "\u6BCF\u534A\u5E74",
        valuationCurrency: "USD",
        bondType: "\u516C\u53F8\u50B5",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "\u7F8E\u570B",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "\u9ED8\u514B\u85E5\u5EE0\u516C\u53F8\u50B5",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "\u6BCF\u534A\u5E74",
        valuationCurrency: "USD",
        bondType: "\u516C\u53F8\u50B5",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "\u7F8E\u570B",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "\u806F\u5408\u5305\u88F9\u670D\u52D9\u516C\u53F8\u50B5",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "\u6BCF\u534A\u5E74",
        valuationCurrency: "USD",
        bondType: "\u516C\u53F8\u50B5",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "\u7F8E\u570B",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      },
      {
        id: "CUSD00500",
        symbolName: "\u9AD8\u7279\u5229\u96C6\u5718",
        symbol: "AAPL",
        dueDate: "2047.02.09",
        couponRate: "4.25%",
        dividendType: "\u6BCF\u534A\u5E74",
        valuationCurrency: "USD",
        bondType: "\u516C\u53F8\u50B5",
        referencePurchasePrice: "98.650000",
        quoteDate: "2023.06.15",
        issuingInstitution: "APPLE INC",
        referenceYieldToMaturity: "4.34",
        referenceYieldToCall: "4.34",
        needPI: "N",
        productRiskLevel: "R1",
        remainingTenure: "23.66",
        nextAllotmentDate: "2023.08.09",
        registeredCountry: "\u7F8E\u570B",
        issuingCompanyIndustry: "Computers",
        isCallable: "Y",
        nextCallDate: "2046.08.09"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-0 container overflow-hidden text-black mt-20 px-4 mx-auto max-w-4xl" }, _attrs))} data-v-1b04daf2><h2 class="text-3xl font-medium text-center" data-v-1b04daf2>\u51F1\u57FA\u71B1\u9580\u50B5\u5238</h2><p class="text-center text-base mt-3" data-v-1b04daf2> \u5404\u7A2E\u4E0D\u540C\u5E74\u671F\u3001\u5229\u7387\u548C\u914D\u606F\u985E\u578B\u7684\u50B5\u5238\uFF0C\u4E00\u76EE\u4E86\u7136 </p><div class="relative mt-5" data-v-1b04daf2><div class="carousel w-full" data-v-1b04daf2><!--[-->`);
      ssrRenderList(unref(bonds), (bond, index) => {
        _push(`<div${ssrRenderAttr("id", "symbolName" + index)} class="carousel-item relative px-3 pb-10 w-[calc(100%-24px)]" data-v-1b04daf2><div class="card card-compact w-full bg-white shadow-xl mt-6" data-v-1b04daf2><div style="${ssrRenderStyle(index !== 0 ? null : { display: "none" })}" class="absolute top-0 left-[-20px] h-full flex justify-end items-center w-10" data-v-1b04daf2><a${ssrRenderAttr("href", "#symbolName" + (index - 1))} class="flex justify-center items-center w-10 z-10" data-v-1b04daf2><img class="relative -top-1 w-7"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-1b04daf2></a></div><figure class="bg-dark-blue text-white p-5 flex items-center flex-col md:flex-row" data-v-1b04daf2><h3 class="text-xl leading-8 mr-auto" data-v-1b04daf2>${ssrInterpolate(bond.symbolName)} \uFF08${ssrInterpolate(bond.valuationCurrency)}\uFF09 <span class="hidden md:inline" data-v-1b04daf2>\uFF5C</span><br class="md:hidden" data-v-1b04daf2> ${ssrInterpolate(bond.id)}</h3><button class="ml-auto mt-3 flex-shrink-0 px-5 py-3 bg-orange text-white text-base rounded-lg md:ml-5 md:mt-0" data-v-1b04daf2> \u7ACB\u5373\u7533\u8CFC </button></figure><div class="card-body p-5 gap-3 lg:flex-row" data-v-1b04daf2><table class="lg:flex-1 lg:border-r-2" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>\u5230\u671F\u65E5</td><td data-v-1b04daf2>${ssrInterpolate(bond.dueDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u7968\u9762\u5229\u7387</td><td data-v-1b04daf2>${ssrInterpolate(bond.couponRate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u914D\u606F\u985E\u578B</td><td data-v-1b04daf2>${ssrInterpolate(bond.dividendType)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u8A08\u50F9\u5E63</td><td data-v-1b04daf2>${ssrInterpolate(bond.valuationCurrency)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u50B5\u5238\u985E\u578B</td><td data-v-1b04daf2>${ssrInterpolate(bond.bondType)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u53C3\u8003\u7533\u8CFC\u8CB7\u9032\u50F9</td><td data-v-1b04daf2>${ssrInterpolate(bond.referencePurchasePrice)}</td></tr></tbody></table><hr data-v-1b04daf2><table class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:[display:table] lg:flex-1 lg:border-r-2`)}" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>\u5831\u50F9\u65E5</td><td data-v-1b04daf2>${ssrInterpolate(bond.quoteDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u767C\u884C\u6A5F\u69CB</td><td data-v-1b04daf2>${ssrInterpolate(bond.issuingInstitution)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u53C3\u8003\u5230\u671F\u6B96\u5229\u7387 YTM</td><td data-v-1b04daf2>${ssrInterpolate(bond.referenceYieldToMaturity)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u53C3\u8003\u8D16\u56DE\u6536\u76CA\u7387 YTC</td><td data-v-1b04daf2>${ssrInterpolate(bond.referenceYieldToCall)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u662F\u5426\u9700\u8981PI</td><td data-v-1b04daf2>${ssrInterpolate(bond.needPI)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u5546\u54C1\u98A8\u96AA\u7B49\u7D1A</td><td data-v-1b04daf2>${ssrInterpolate(bond.productRiskLevel)}</td></tr></tbody></table><hr class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:block`)}" data-v-1b04daf2><table class="${ssrRenderClass(`${!unref(cardOpen) ? "hidden" : ""} lg:[display:table] lg:flex-1`)}" data-v-1b04daf2><tbody class="text-base" data-v-1b04daf2><tr data-v-1b04daf2><td data-v-1b04daf2>\u5269\u9918\u5E74\u671F</td><td data-v-1b04daf2>${ssrInterpolate(bond.remainingTenure)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u4E0B\u6B21\u914D\u5E2D\u65E5</td><td data-v-1b04daf2>${ssrInterpolate(bond.nextAllotmentDate)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u8A3B\u518A\u570B\u5BB6</td><td data-v-1b04daf2>${ssrInterpolate(bond.registeredCountry)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u767C\u884C\u516C\u53F8\u7522\u696D\u5225</td><td data-v-1b04daf2>${ssrInterpolate(bond.issuingCompanyIndustry)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u662F\u5426\u53EF\u8CB7\u56DE</td><td data-v-1b04daf2>${ssrInterpolate(bond.isCallable)}</td></tr><tr data-v-1b04daf2><td data-v-1b04daf2>\u4E0B\u6B21\u8CB7\u56DE\u65E5</td><td data-v-1b04daf2>${ssrInterpolate(bond.nextCallDate)}</td></tr></tbody></table><button class="mt-2 text-medium flex items-center justify-center gap-2 lg:hidden" data-v-1b04daf2>${ssrInterpolate(unref(cardOpen) ? "\u6536\u5408" : "\u5C55\u958B")} <img${ssrRenderAttr("src", _imports_1$1)} class="${ssrRenderClass(unref(cardOpen) ? "rotate-180" : "")}" data-v-1b04daf2></button></div></div><div class="absolute top-0 right-0 h-full flex justify-end items-center w-10 bg-red-500 z-10 bg-scroll-end" style="${ssrRenderStyle(!unref(isEnd) ? null : { display: "none" })}" data-v-1b04daf2><a${ssrRenderAttr("href", "#symbolName" + (index + 1))} data-v-1b04daf2><img class="relative -top-1 w-7"${ssrRenderAttr("src", _imports_2)} alt="" data-v-1b04daf2></a></div></div>`);
      });
      _push(`<!--]--></div></div><div class="text-sm mt-5 pl-3" data-v-1b04daf2>\u8CC7\u6599\u66F4\u65B0\u65E5\u671F 2023.06.15</div><button class="mt-10 mx-auto text-primary text-medium flex items-center justify-center gap-2 lg:mr-0" data-v-1b04daf2> \u67E5\u770B\u66F4\u591A <img${ssrRenderAttr("src", _imports_3)} data-v-1b04daf2></button></div>`);
    };
  }
});
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
const icon1 = "" + buildAssetsURL("icon-overseas-my-choice.d28ca3ba.svg");
const icon2 = "" + buildAssetsURL("icon-overseas-purchase.3769656a.svg");
const icon3 = "" + buildAssetsURL("icon-overseas-view-all-bonds.560e2964.svg");
const icon4 = "" + buildAssetsURL("icon-overseas-open-account.3798c7ef.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FunctionButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const buttons = [
      { label: "\u81EA\u9078", icon: icon1, link: "" },
      { label: "\u7533\u8CFC", icon: icon2, link: "" },
      { label: "\u67E5\u770B\u6240\u6709\u50B5\u5238\u6A19\u7684", icon: icon3, link: "/overseas/find" },
      { label: "\u7ACB\u5373\u958B\u6236", icon: icon4, link: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20 relative z-0" }, _attrs))}><h2 class="text-3xl text-center font-medium text-black">\u6D77\u5916\u50B5\u5238\u81EA\u9078\u7533\u8CFC</h2><div class="container mt-5 px-4 max-w-4xl mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4"><!--[-->`);
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
const _imports_0 = "" + publicAssetsURL("img/fake-promotion-mobile.jpg");
const _imports_1 = "" + publicAssetsURL("img/fake-promotion-desktop.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PromotionSection",
  __ssrInlineRender: true,
  setup(__props) {
    const notes = [
      "\u672C\u884C\u516C\u544A\u4E4B\u7533\u8CFC\u53C3\u8003\u5831\u50F9\u3001\u8D16\u56DE\u53C3\u8003\u5831\u50F9\u7531\u4EA4\u6613\u5C0D\u624B\u63D0\u4F9B\uFF0C\u50C5\u4F9B\u6295\u8CC7\u4EBA\u4F5C\u70BA\u7533\u8CFC\u6216\u63D0\u524D\u8D16\u56DE\u4E4B\u53C3\u8003\u3002\u53D7\u50B5\u5238\u5E02\u5834\u4EA4\u6613\u72C0\u6CC1\u5F71\u97FF\uFF0C\u5BE6\u969B\u6210\u4EA4\u50F9\u683C\u8207\u672C\u884C\u516C\u544A\u4E4B\u53C3\u8003\u5831\u50F9\u53EF\u80FD\u6703\u6709\u5DEE\u7570\u3002",
      "\u53C3\u8003\u7533\u8CFC\u53C3\u8003\u5831\u50F9\u53CA\u53C3\u8003\u8D16\u56DE\u53C3\u8003\u5831\u50F9\u70BA\u4E0D\u542B\u606F\u5831\u50F9\uFF1B\u4EA6\u5373\uFF0C\u8A72\u5831\u50F9\u4E0D\u542B\u61C9\u8A08\u914D\u606F\uFF08\u524D\u624B\u606F\uFF09\u3002",
      "\u50B5\u5238\u4E0D\u5177\u5099\u5145\u5206\u4E4B\u5E02\u5834\u6D41\u52D5\u6027\uFF0C\u5728\u6D41\u52D5\u6027\u7F3A\u4E4F\u6216\u5E02\u5834\u4EA4\u6613\u91CF\u4E0D\u8DB3\u7684\u60C5\u6CC1\u4E0B\uFF0C\u5BE6\u969B\u4EA4\u6613\u50F9\u683C\u6975\u53EF\u80FD\u6703\u8207\u7533\u8CFC\u53C3\u8003\u5831\u50F9\u53CA\u8D16\u56DE\u53C3\u8003\u5831\u50F9\u7522\u751F\u986F\u8457\u7684\u50F9\u5DEE\uFF08Spread\uFF09\uFF0C\u9020\u6210\u6295\u8CC7\u4EBA\u65BC\u50B5\u5238\u5230\u671F\u524D\u8D16\u56DE\u6642\uFF0C\u53EF\u80FD\u6703\u767C\u751F\u640D\u53CA\u539F\u59CB\u6295\u8CC7\u91D1\u984D\u7684\u72C0\u6CC1\uFF0C\u751A\u81F3\u5728\u5E02\u5834\u767C\u751F\u5B8C\u5168\u55AA\u5931\u6D41\u52D5\u6027\u5F8C\uFF0C\u6295\u8CC7\u4EBA\u5FC5\u9808\u6301\u6709\u50B5\u5238\u81F3\u5230\u671F\u65E5\u3002",
      "\u53C3\u8003\u5831\u50F9\u5C1A\u672A\u8003\u91CF\u624B\u7E8C\u8CBB\u3001\u4FE1\u8A17\u7BA1\u7406\u8CBB\u53CA\u76F8\u95DC\u8CBB\u7528\uFF08\u82E5\u6709\uFF09\uFF0C\u6295\u8CC7\u4EBA\u4EA4\u6613\u6216\u5546\u54C1\u5230\u671F\u6642\uFF0C\u4ECD\u53EF\u80FD\u9700\u652F\u4ED8\u4FE1\u8A17\u7BA1\u7406\u8CBB\u53CA\u76F8\u95DC\u8CBB\u7528\uFF08\u82E5\u6709\uFF09\u3002\u76F8\u95DC\u8CBB\u7528\u5747\u65BC\u5404\u7522\u54C1\u5C08\u7528\u4E4B\u300C\u5546\u54C1\u8AAA\u660E\u66F8\u300D\u4E2D\u8F09\u660E\uFF0C\u6295\u8CC7\u4EBA\u61C9\u53C3\u8A73\u95B1\u7522\u54C1\u8AAA\u660E\u6587\u4EF6\u4EE5\u4E86\u89E3\u7D30\u7BC0\u3002",
      "\u82E5\u6709\u4EFB\u4F55\u554F\u984C\uFF0C\u8ACB\u6D3D\u5404\u5206\u884C\u7406\u8CA1\u5C08\u54E1\u3002"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container px-4 md:px-0 mx-auto mt-20"><div class="relative w-full py-10 px-5 pb-48 md:py-14 lg:py-24 lg:px-24"><img class="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 md:hidden"${ssrRenderAttr("src", _imports_0)} alt="\u51F1\u57FA\u9280\u884C\u65B0\u6236\u597D\u532F\u904E\u6691\u5047"><img class="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0 hidden md:block"${ssrRenderAttr("src", _imports_1)} alt="\u51F1\u57FA\u9280\u884C\u65B0\u6236\u597D\u532F\u904E\u6691\u5047"><h2 class="text-3xl text-white font-medium relative lg:text-4xl">\u51F1\u57FA\u9280\u884C\u65B0\u6236\u597D\u532F\u904E\u6691\u5047</h2><p class="relative text-white text-xl mt-5 lg:text-2xl lg:mt-7">112/6/1~112/7/31 \uFF0C\u7F8E\u5143\u9AD8\u5229\u5B9A\u5B58 6 \u500B\u6708\u671F\u6700\u9AD8 4.68%</p><button class="relative bg-primary text-white mt-3 px-5 py-3 text-base rounded-lg flex items-center flex-shrink-0"> \u6D3B\u52D5\u8A73\u60C5 <img${ssrRenderAttr("src", _imports_2$1)} alt="icon-arrow-right" class="block ml-4"></button></div></div><div class="container mx-auto px-4 mt-20 md:mt-24 max-w-4xl"><h3 class="text-xl text-primary text-center font-medium md:text-2xl">\u6CE8\u610F\u4E8B\u9805</h3><hr class="mt-2 border-primary"><ul class="relative mt-5 pl-6 text-base text-black"><!--[-->`);
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
        title: "\u4E3B\u8981\u6295\u8CC7\u98A8\u96AA",
        items: [
          {
            title: "\u6D41\u52D5\u6027\u98A8\u96AA\u53CA\u63D0\u524D\u8D16\u56DE\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u5229\u7387\u98A8\u96AA",
            content: "\u50B5\u5238\u81EA\u6B63\u5F0F\u4EA4\u5272\u767C\u884C\u5F8C\uFF0C\u5B58\u7E8C\u671F\u9593\u7684\u5E02\u5834\u50F9\u683C\uFF0C\u5C07\u53D7\u767C\u884C\u5E63\u5225\u5229\u7387\u8B8A\u52D5\u5F71\u97FF\uFF1B\u7576\u8A72\u5E63\u5225\u5229\u7387\u8ABF\u5347\u6642\uFF0C\u50B5\u5238\u7684\u5E02\u5834\u50F9\u683C\u6709\u53EF\u80FD\u4E0B\u964D\uFF0C\u4E26\u6709\u53EF\u80FD\u4F4E\u65BC\u7968\u9762\u50F9\u683C\u800C\u640D\u53CA\u539F\u59CB\u6295\u8CC7\u91D1\u984D"
          },
          {
            title: "\u4FE1\u7528\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u6295\u8CC7\u4EBA\u9700\u8003\u616E\u767C\u884C\u6A5F\u69CB\u7684\u5BE6\u529B\u53CA\u8CA1\u52D9\u72C0\u6CC1\uFF0C\u4EE5\u53CA\u4FE1\u8A55\u6A5F\u69CB\u7684\u8A55\u7B49\u3002\u6295\u8CC7\u4EBA\u9808\u81EA\u884C\u627F\u64D4\u767C\u884C\u6A5F\u69CB\u7684\u4FE1\u7528\u98A8\u96AA\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u532F\u7387\u98A8\u96AA",
            content: "\u5916\u5E63\u8A08\u50F9\u7684\u6295\u8CC7\u7522\u54C1\uFF0C\u82E5\u539F\u59CB\u4EE5\u65B0\u53F0\u5E63\u6216\u975E\u8A08\u50F9\u5E63\u5225\u7684\u5916\u5E63\u627F\u4F5C\uFF0C\u9808\u7559\u610F\u4E0D\u540C\u5E63\u5225\u9593\u8F49\u63DB\u7684\u532F\u7387\u98A8\u96AA"
          }
        ]
      },
      {
        title: "\u4E3B\u8981\u6295\u8CC7\u98A8\u96AA",
        items: [
          {
            title: "\u6D41\u52D5\u6027\u98A8\u96AA\u53CA\u63D0\u524D\u8D16\u56DE\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u5229\u7387\u98A8\u96AA",
            content: "\u50B5\u5238\u81EA\u6B63\u5F0F\u4EA4\u5272\u767C\u884C\u5F8C\uFF0C\u5B58\u7E8C\u671F\u9593\u7684\u5E02\u5834\u50F9\u683C\uFF0C\u5C07\u53D7\u767C\u884C\u5E63\u5225\u5229\u7387\u8B8A\u52D5\u5F71\u97FF\uFF1B\u7576\u8A72\u5E63\u5225\u5229\u7387\u8ABF\u5347\u6642\uFF0C\u50B5\u5238\u7684\u5E02\u5834\u50F9\u683C\u6709\u53EF\u80FD\u4E0B\u964D\uFF0C\u4E26\u6709\u53EF\u80FD\u4F4E\u65BC\u7968\u9762\u50F9\u683C\u800C\u640D\u53CA\u539F\u59CB\u6295\u8CC7\u91D1\u984D"
          },
          {
            title: "\u4FE1\u7528\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u6295\u8CC7\u4EBA\u9700\u8003\u616E\u767C\u884C\u6A5F\u69CB\u7684\u5BE6\u529B\u53CA\u8CA1\u52D9\u72C0\u6CC1\uFF0C\u4EE5\u53CA\u4FE1\u8A55\u6A5F\u69CB\u7684\u8A55\u7B49\u3002\u6295\u8CC7\u4EBA\u9808\u81EA\u884C\u627F\u64D4\u767C\u884C\u6A5F\u69CB\u7684\u4FE1\u7528\u98A8\u96AA\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u532F\u7387\u98A8\u96AA",
            content: "\u5916\u5E63\u8A08\u50F9\u7684\u6295\u8CC7\u7522\u54C1\uFF0C\u82E5\u539F\u59CB\u4EE5\u65B0\u53F0\u5E63\u6216\u975E\u8A08\u50F9\u5E63\u5225\u7684\u5916\u5E63\u627F\u4F5C\uFF0C\u9808\u7559\u610F\u4E0D\u540C\u5E63\u5225\u9593\u8F49\u63DB\u7684\u532F\u7387\u98A8\u96AA"
          }
        ]
      },
      {
        title: "\u4E3B\u8981\u6295\u8CC7\u98A8\u96AA",
        items: [
          {
            title: "\u6D41\u52D5\u6027\u98A8\u96AA\u53CA\u63D0\u524D\u8D16\u56DE\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u5229\u7387\u98A8\u96AA",
            content: "\u50B5\u5238\u81EA\u6B63\u5F0F\u4EA4\u5272\u767C\u884C\u5F8C\uFF0C\u5B58\u7E8C\u671F\u9593\u7684\u5E02\u5834\u50F9\u683C\uFF0C\u5C07\u53D7\u767C\u884C\u5E63\u5225\u5229\u7387\u8B8A\u52D5\u5F71\u97FF\uFF1B\u7576\u8A72\u5E63\u5225\u5229\u7387\u8ABF\u5347\u6642\uFF0C\u50B5\u5238\u7684\u5E02\u5834\u50F9\u683C\u6709\u53EF\u80FD\u4E0B\u964D\uFF0C\u4E26\u6709\u53EF\u80FD\u4F4E\u65BC\u7968\u9762\u50F9\u683C\u800C\u640D\u53CA\u539F\u59CB\u6295\u8CC7\u91D1\u984D"
          },
          {
            title: "\u4FE1\u7528\u98A8\u96AA",
            content: "\u82E5\u50B5\u5238\u6D41\u52D5\u6027\u4E0D\u4F73\uFF0C\u6703\u5F71\u97FF\u5176\u8B8A\u73FE\u901F\u6295\u8CC7\u4EBA\u9700\u8003\u616E\u767C\u884C\u6A5F\u69CB\u7684\u5BE6\u529B\u53CA\u8CA1\u52D9\u72C0\u6CC1\uFF0C\u4EE5\u53CA\u4FE1\u8A55\u6A5F\u69CB\u7684\u8A55\u7B49\u3002\u6295\u8CC7\u4EBA\u9808\u81EA\u884C\u627F\u64D4\u767C\u884C\u6A5F\u69CB\u7684\u4FE1\u7528\u98A8\u96AA\u5EA6\u53CA\u50F9\u683C\uFF1B\u6295\u8CC7\u4EBA\u63D0\u524D\u8D16\u56DE\uFF0C\u53EF\u80FD\u6709\u672C\u91D1\u6298\u50F9\u7684\u98A8\u96AA\u3002\u901A\u5E38\u653F\u5E9C\u516C\u50B5\u7684\u6D41\u52D5\u6027\u6700\u9AD8\uFF0C\u91D1\u878D\u53CA\u516C\u53F8\u50B5\u6B21\u4E4B\u3002\u90E8\u5206\u50B5\u5238\u56E0\u767C\u884C\u91CF\u8F03\u5C0F\u3001\u7F3A\u4E4F\u4FE1\u7528\u8A55\u7B49\u6A5F\u69CB\u8A55\u4F30\u50B5\u4FE1\u7B49\u56E0\u7D20\u800C\u55AA\u5931\u6D41\u52D5\u6027"
          },
          {
            title: "\u532F\u7387\u98A8\u96AA",
            content: "\u5916\u5E63\u8A08\u50F9\u7684\u6295\u8CC7\u7522\u54C1\uFF0C\u82E5\u539F\u59CB\u4EE5\u65B0\u53F0\u5E63\u6216\u975E\u8A08\u50F9\u5E63\u5225\u7684\u5916\u5E63\u627F\u4F5C\uFF0C\u9808\u7559\u610F\u4E0D\u540C\u5E63\u5225\u9593\u8F49\u63DB\u7684\u532F\u7387\u98A8\u96AA"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10 mt-10 pb-20 md:mt-16 md:pt-16 bg-gray-3" }, _attrs))} data-v-b47c2770><div class="container mx-auto px-4 max-w-4xl" data-v-b47c2770><h3 class="text-xl text-primary text-center font-medium md:text-2xl" data-v-b47c2770>\u4EA4\u6613\u8AAA\u660E</h3><hr class="mt-2 border-primary" data-v-b47c2770><div data-v-b47c2770><!--[-->`);
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
      title: "\u51F1\u57FA\u5C08\u5340\u5E02\u5834\u8CC7\u8A0A",
      meta: [{ name: "description", content: "\u51F1\u57FA\u5C08\u5340\u5E02\u5834\u8CC7\u8A0A" }]
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

export { _sfc_main as default };
//# sourceMappingURL=index-32c0d8dc.mjs.map
