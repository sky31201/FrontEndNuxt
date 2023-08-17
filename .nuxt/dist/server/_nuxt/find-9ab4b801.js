import { _ as __nuxt_component_0$1, d as defineStore, s as storeToRefs, f as useHead } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, onUnmounted, computed, watch } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./landing-bg-3294193d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { a as __nuxt_component_0$2, _ as _sfc_main$6 } from "./modal-e91977b0.js";
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
import "./modalStore-de418064.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Head",
  __ssrInlineRender: true,
  setup(__props) {
    const userData = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative lg:h-96" }, _attrs))} data-v-fe9c9d86><img class="absolute z-0 top-i0 left-0 w-full h-full object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="" data-v-fe9c9d86><div class="bg-deco absolute z-0 top-32 left-0 w-full bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-3/5 xl:w-1/2 bg-primary opacity-80" data-v-fe9c9d86></div><div class="container mx-auto px-4 pt-16 pb-20 lg:pb-0 lg:py-40 relative z-10 flex flex-col lg:flex-row justify-between text-white" data-v-fe9c9d86><h1 class="text-dark-blue text-3xl font-light tracking-widest md:text-4xl" data-v-fe9c9d86> 海外債交易專區 </h1>`);
      if (unref(userData).length === 1) {
        _push(`<h2 class="text-xl font-medium mt-2 text-dark-blue" data-v-fe9c9d86>${ssrInterpolate(unref(userData)[0].ID)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(userData).length > 1) {
        _push(`<select class="text-xl font-medium mt-2 block bg-transparent text-dark-blue" data-v-fe9c9d86><!--[-->`);
        ssrRenderList(unref(userData), (user) => {
          _push(`<option${ssrRenderAttr("value", user.ID)} data-v-fe9c9d86>${ssrInterpolate(user.ID)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-end mt-28 lg:max-w-[360px] lg:mt-0 lg:ml-10" data-v-fe9c9d86><select class="block mt-3 bg-transparent text-lg font-medium" data-v-fe9c9d86><!--[-->`);
      ssrRenderList(unref(userData), (data) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(data.Accounts.OSB, (item, index) => {
          _push(`<option${ssrRenderAttr("value", index)} data-v-fe9c9d86> 複${ssrInterpolate(item)}</option>`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></select>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/overseas",
        class: "mt-3 px-5 py-3 text-base flex items-center flex-shrink-0 border border-current rounded-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`海外債區首頁`);
          } else {
            return [
              createTextVNode("海外債區首頁")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const Head_vue_vue_type_style_index_0_scoped_fe9c9d86_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/find/Head.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fe9c9d86"]]);
const icon1 = "" + __buildAssetsURL("icon-overseas-find-find-bonds.a7c8c861.svg");
const icon2 = "" + __buildAssetsURL("icon-overseas-find-trade-order-query.b883269d.svg");
const icon3 = "" + __buildAssetsURL("icon-overseas-find-accounting-query.d033231e.svg");
const icon4 = "" + __buildAssetsURL("icon-overseas-find-market-info.952ff0a9.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FeatureButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const headerButtons = ref();
    ref();
    const mobileBottomButtonsShow = ref(false);
    const buttons = [
      { label: "找債券", icon: icon1 },
      { label: "交易委託查詢", icon: icon2 },
      { label: "帳務查詢", icon: icon3 },
      { label: "市場資訊", icon: icon4 }
    ];
    const handleScroll = () => {
      var _a;
      const rect = (_a = headerButtons.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!rect)
        return;
      if (mobileBottomButtonsShow.value !== rect.top + rect.height < 0) {
        mobileBottomButtonsShow.value = rect.top + rect.height < 0;
      }
    };
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="-mt-10 px-4 relative grid grid-cols-2 gap-4 md:grid-cols-4 max-w-[1100px] mx-auto md:sticky md:top-4"><!--[-->`);
      ssrRenderList(buttons, (button) => {
        _push(`<button class="p-4 rounded-2xl bg-white shadow-md text-primary flex items-center hover:bg-primary hover:text-white"><div class="w-[40px] h-[40px] rounded-full bg-blue-grey flex-shrink-0 flex lg:w-[60px] lg:h-[60px]"><img${ssrRenderAttr("src", button.icon)}${ssrRenderAttr("alt", button.label)} class="lg:w-[60px] lg:h-[60px]"></div><span class="ml-2 text-lg font-bold text-left lg:text-xl lg:font-medium lg:flex-1 lg:text-center">${ssrInterpolate(button.label)}</span></button>`);
      });
      _push(`<!--]--></div><div class="flex pt-2 pb-3 bg-white fixed w-full bottom-0 md:hidden data-[show=false]:translate-y-full transition-transform"${ssrRenderAttr("data-show", unref(mobileBottomButtonsShow))}><!--[-->`);
      ssrRenderList(buttons, (button) => {
        _push(`<button class="flex-1 text-primary flex flex-col items-center"><div class="w-[40px] h-[40px] rounded-full bg-blue-grey flex-shrink-0 flex"><img${ssrRenderAttr("src", button.icon)}${ssrRenderAttr("alt", button.label)}></div><span class="mt-1 text-xs font-bold">${ssrInterpolate(button.label)}</span></button>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/find/FeatureButtons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useOverseasFindFilterStore = defineStore("overseasFindFilterStore", () => {
  const isFilterPanelOpen = ref(false);
  const filterParams = ref({
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
    referenceSubscriptionPrice: null
  });
  const setFilterPanelOpen = (open) => {
    isFilterPanelOpen.value = open;
  };
  const setFilterParam = (key, value) => {
    filterParams.value[key] = value;
  };
  const clearFilterParams = () => {
    for (const key in filterParams.value) {
      filterParams.value[key] = null;
    }
  };
  return { isFilterPanelOpen, setFilterPanelOpen, filterParams, setFilterParam, clearFilterParams };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const { filterParams, setFilterParam, setFilterPanelOpen } = useOverseasFindFilterStore();
    const { isFilterPanelOpen } = storeToRefs(useOverseasFindFilterStore());
    const modalSelectedFilterParams = ref({ ...filterParams });
    const filterSets = [
      {
        key: "investorRestriction",
        label: "投資人限制",
        all: false,
        options: ["一般客戶", "專業投資人", "高資產客戶"]
      },
      {
        key: "minTradeAmount",
        label: "最低交易面額",
        all: false,
        options: ["2,000~9,999", "10,000~100,000", ">100,000"]
      },
      {
        key: "remainingTenure",
        label: "剩餘年期",
        all: true,
        options: ["3年期以下", "3~7年", "7~10年", "10年期以上"]
      },
      {
        key: "type",
        label: "類型",
        all: true,
        options: ["公司債", "公債", "國際金融", "可轉換公司債", "NCD"]
      },
      {
        key: "dividendType",
        label: "配息類型",
        all: true,
        options: ["每半年", "每一年", "每季", "每月"]
      },
      {
        key: "valuationCurrency",
        label: "計價幣別",
        all: true,
        options: ["美元", "澳幣", "南非幣", "人民幣", "其他幣別"]
      },
      {
        key: "couponRate",
        label: "票面利率",
        all: true,
        options: ["3%以下", "3%~5%", "5%~8%", "8%以上"]
      },
      {
        key: "maturityYield",
        label: "到期殖利率",
        all: true,
        options: ["3%以下", "3%~5%", "5%以上"]
      },
      {
        key: "redemptionYield",
        label: "贖回收益率",
        all: true,
        options: ["3%以下", "3%~5%", "5%以上"]
      },
      {
        key: "referenceSubscriptionPrice",
        label: "參考申購價",
        all: true,
        options: ["90以下", "90~95", "95~100", "100~105", "105以上"]
      }
    ];
    const collapsedFilters = ref(new Set(filterSets.map((filterSet) => filterSet.key)));
    const selectedOptionCount = computed(() => {
      return Object.values(modalSelectedFilterParams.value).filter((value) => value !== null).length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="mt-10 px-6 py-5 w-[calc(100%-32px)] rounded-2xl bg-blue-grey max-w-4xl mx-auto lg:mt-16"><div class="md:flex items-center gap-4"><h2 class="text-xl font-medium text-black">快速搜尋</h2><div class="mt-3 flex items-center md:flex-1 md:mt-0"><input type="search" placeholder="輸入債券名稱／ISIN" class="input min-w-0 flex-1 text-black text-lg p-5 bg-white border border-black"><button class="flex-shrink-0 flex justify-center items-center w-11 h-11 rounded-full bg-orange ml-2"><svg width="20.314" height="20.314" viewBox="0 0 20.314 20.314"><path d="M16.031,14.617,20.314,18.9,18.9,20.314l-4.282-4.283a9,9,0,1,1,1.414-1.414m-2.006-.742a7,7,0,1,0-.15.15Z" fill="#fff"></path></svg></button></div></div><hr class="my-5 border-primary"><div class="md:flex items-center gap-4"><button type="button" class="bg-primary text-white px-5 py-3 text-base flex items-center flex-shrink-0 rounded-lg">進階篩選</button><div class="text-black mt-4 md:mt-0 text-base font-normal flex flex-wrap items-center"><button>熱門商品推薦</button><hr class="mx-2 h-[1em] border-r border-black"><button>主推商品</button><hr class="mx-2 h-[1em] border-r border-black"><button>凱基精選</button><hr class="mx-2 h-[1em] border-r border-black"><button>自選清單</button></div></div></div><div><dialog id="overseas_find_filter" class="modal bg-[rgba(0,0,0,0.6)]"${ssrIncludeBooleanAttr(unref(isFilterPanelOpen)) ? " open" : ""}><form method="dialog" class="modal-box bg-white max-w-3xl relative"><div class="bg-white -m-6 mb-0 p-6 pb-0 sticky -top-6"><button class="btn btn-sm btn-circle btn-ghost absolute right-5 top-6"><svg width="20" height="20" viewBox="0 0 20 20"><line x1="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><line x2="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line></svg></button><h2 class="flex items-center text-xl text-black font-medium gap-1 mt-1 border-b pb-5 mb-2"><svg id="icon_fliter_blue" width="24" height="24" viewBox="0 0 24 24"><path d="M12.246,12.947H7.573L1,6.211h17.82Z" transform="translate(-0.185 -1.147)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M0,0H4.11V7.874L0,10.342Z" transform="translate(7.669 11.8)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><rect width="17.82" height="4.248" transform="translate(0.815 0.815)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></rect></svg> 自訂條件進階篩選 </h2></div><!--[-->`);
      ssrRenderList(filterSets, (filterSet) => {
        _push(`<div class="mb-10 md:mx-5"><h3 class="flex items-center gap-2 text-black text-lg">${ssrInterpolate(filterSet.label)} <button type="button"><svg width="14" height="7" viewBox="0 0 14 7" class="${ssrRenderClass(unref(collapsedFilters).has(filterSet.key) ? "" : "rotate-180")}"><path d="M.75,13.4,6.515,7.073.75.75" transform="translate(0 7) rotate(-90)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></h3>`);
        if (unref(collapsedFilters).has(filterSet.key)) {
          _push(`<div class="flex flex-wrap gap-2 mt-2">`);
          if (filterSet.all) {
            _push(`<button${ssrRenderAttr("data-selected", unref(modalSelectedFilterParams)[filterSet.key] === null)} type="button" class="btn text-primary border border-primary bg-transparent hover:bg-primary hover:text-white data-[selected=true]:bg-primary data-[selected=true]:text-white">全部</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(filterSet.options, (option) => {
            _push(`<button${ssrRenderAttr("data-selected", unref(modalSelectedFilterParams)[filterSet.key] === option)} type="button" class="btn text-primary border border-primary bg-transparent hover:bg-primary hover:text-white data-[selected=true]:bg-primary data-[selected=true]:text-white">${ssrInterpolate(option)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="modal-action bg-blue-grey -m-6 py-4 px-6 flex justify-between items-center sticky -bottom-6" style="${ssrRenderStyle(null)}"><div class="text-black">已選 ${ssrInterpolate(unref(selectedOptionCount))} 個條件</div><button class="btn bg-orange text-white border-0">立即查詢</button></div></form></dialog></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/find/Search.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const useBondDetailModalStore = defineStore("bondDetailModalStore", () => {
  const modalBond = ref(null);
  const showBondDetailModal = (bond) => {
    modalBond.value = bond;
  };
  const clearBondDetailModal = () => {
    modalBond.value = null;
  };
  return { modalBond, showBondDetailModal, clearBondDetailModal };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchResult",
  __ssrInlineRender: true,
  setup(__props) {
    useOverseasFindFilterStore();
    const { filterParams } = storeToRefs(useOverseasFindFilterStore());
    useBondDetailModalStore();
    const bonds = ref([
      {
        id: "CUSD00500",
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
    const pagination = ref({
      currentPage: 1,
      totalPage: 4
    });
    const latestQuoteDate = ref("2021.06.15");
    const itemsCount = ref(100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20 max-w-6xl mx-auto mt-10 lg:mt-12" }, _attrs))}><div class="container mx-auto px-4"><h1 class="text-xl font-medium text-black text-center lg:text-2xl">查詢結果</h1><div class="mt-4 flex gap-3 justify-center flex-wrap md:mt-10"><!--[-->`);
      ssrRenderList(unref(filterParams), (value, key) => {
        _push(`<span style="${ssrRenderStyle(value !== null ? null : { display: "none" })}" class="px-4 py-2 bg-blue-grey rounded-full text-black inline-flex items-center gap-2">${ssrInterpolate(value ?? "null")} <button class="text-primary hover:text-white group"><svg width="20" height="20" viewBox="0 0 20 20"><g fill="none" stroke="currentColor" stroke-width="1"><circle cx="10" cy="10" r="10" stroke="none"></circle><circle cx="10" cy="10" r="9.5" fill="none" class="group-hover:fill-primary"></circle></g><g transform="translate(6.403 6.403)"><line id="Line_8" data-name="Line 8" x1="6.577" y2="6.577" transform="translate(0.308 0.308)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><line id="Line_9" data-name="Line 9" x2="6.577" y2="6.577" transform="translate(0.308 0.308)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line></g></svg></button></span>`);
      });
      _push(`<!--]--></div><div class="mt-5 text-sm text-black font-medium md:text-right md:mt-0">資料更新日期 ${ssrInterpolate(unref(latestQuoteDate))}</div><div class="mt-5 text-sm text-black font-medium md:text-right md:mt-0">總共查詢到 ${ssrInterpolate(unref(itemsCount))} 筆</div></div>`);
      _push(ssrRenderComponent(_component_Loading, {
        style: unref(useLoadingStore)().isShow ? null : { display: "none" }
      }, null, _parent));
      _push(`<div class="px-4 mt-10 mx-auto grid gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(bonds), (bond) => {
        _push(`<div class="bg-white rounded-2xl shadow-xl overflow-hidden"><div class="p-5 bg-dark-blue text-white text-xl flex items-center justify-between"><h3 class="">${ssrInterpolate(bond.symbolName)}<br> (${ssrInterpolate(bond.valuationCurrency)}) </h3><button><svg width="24" height="23" viewBox="0 0 24 23"><path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="fill-transparent stroke-white"></path></svg></button></div><div class="py-1 px-5 bg-blue-grey rounded-full text-base font-medium text-dark-blue w-max mx-auto mt-5">${ssrInterpolate(bond.couponRate)}｜${ssrInterpolate(bond.dueDate.split(".")[0])}年 </div><div class="flex gap-3 justify-evenly items-center px-4 mt-3"><div><p class="text-sm text-black text-center">參考殖利率(%)</p><p class="mt-2 text-3xl font-light text-center text-primary">${ssrInterpolate(Number(bond.referenceYieldToMaturity).toFixed(2))}</p></div><hr class="h-auto self-stretch border-r border-gray-2"><div><p class="text-sm text-black text-center">參考申購價</p><p class="mt-2 text-3xl font-light text-center text-primary">${ssrInterpolate(Number(bond.referencePurchasePrice).toFixed(2))}</p></div><hr class="h-auto self-stretch border-r border-gray-2"><div><p class="text-sm text-black text-center">剩餘年期</p><p class="mt-2 text-3xl font-light text-center text-primary">${ssrInterpolate(bond.remainingTenure)}</p></div></div><div class="flex justify-center gap-2 mt-5 pb-4 px-4"><button class="flex-1 text-primary font-medium border border-primary px-5 py-3 rounded-lg"> 商品資訊 </button><button class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-3 rounded-lg"> 立即申購 </button></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 px-4 flex justify-between items-center max-w-sm mx-auto"><button class="text-primary border border-current rounded-lg w-10 h-10 flex justify-center items-center disabled:text-gray-2"${ssrIncludeBooleanAttr(unref(pagination).currentPage <= 1) ? " disabled" : ""}><svg width="7" height="14" viewBox="0 0 7 14" class="rotate-180"><path d="M.75,13.4,6.515,7.073.75.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button><div class="flex-1 flex justify-center gap-2">`);
      if (unref(pagination).currentPage - 2 > 1) {
        _push(`<button class="w-8 h-8 text-primary font-medium">⋯</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(new Array(5).fill(0).map((_, index) => unref(pagination).currentPage - 2 + index), (page) => {
        _push(`<button style="${ssrRenderStyle(page > 0 && page <= unref(pagination).totalPage ? null : { display: "none" })}"${ssrRenderAttr("data-active", page === unref(pagination).currentPage)} class="w-8 h-8 text-primary font-medium rounded-full data-[active=true]:font-bold data-[active=true]:bg-blue-grey">${ssrInterpolate(page)}</button>`);
      });
      _push(`<!--]-->`);
      if (unref(pagination).currentPage + 2 < unref(pagination).totalPage) {
        _push(`<button class="w-8 h-8 text-primary font-medium">⋯</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="text-primary border border-current rounded-lg w-10 h-10 flex justify-center items-center disabled:text-gray-2"${ssrIncludeBooleanAttr(unref(pagination).currentPage >= unref(pagination).totalPage) ? " disabled" : ""}><svg width="7" height="14" viewBox="0 0 7 14"><path d="M.75,13.4,6.515,7.073.75.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/find/SearchResult.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BondDetail",
  __ssrInlineRender: true,
  setup(__props) {
    const dialogRef = ref(null);
    ref(null);
    const { clearBondDetailModal } = useBondDetailModalStore();
    const { modalBond } = storeToRefs(useBondDetailModalStore());
    const draging = ref(false);
    const startDragY = ref(0);
    const dragingY = ref(0);
    const startDragTime = ref(0);
    const closing = ref(false);
    const table1Columns = [
      { label: "到期日", key: "dueDate" },
      { label: "票面利率", key: "couponRate" },
      { label: "配息類型", key: "dividendType" },
      { label: "最低交易面額（計價幣）", key: "referencePurchasePrice" },
      { label: "債券類型", key: "bondType" },
      { label: "發行機構", key: "issuingInstitution" },
      { label: "參考到期殖利率 YTM", key: "referenceYieldToMaturity" },
      { label: "參考贖回收益率 YTC", key: "referenceYieldToCall" }
    ];
    const table2Columns = [
      { label: "下次配息日", key: "nextAllotmentDate" },
      { label: "註冊國家", key: "registeredCountry" },
      { label: "發行公司產業別", key: "issuingCompanyIndustry" },
      { label: "是否可買回", key: "isCallable" },
      { label: "下次買回日", key: "nextCallDate" },
      { label: "投資人限制", key: "needPI" }
    ];
    watch(modalBond, (newValue) => {
      if (newValue !== null) {
        document.body.style.setProperty("overflow", "hidden");
      } else {
        document.body.style.removeProperty("overflow");
      }
    });
    onUnmounted(() => {
      window == null ? void 0 : window.removeEventListener("touchmove", handleTouchMove);
      window == null ? void 0 : window.removeEventListener("touchend", handleTouchEnd);
    });
    function handleTouchMove(e) {
      var _a;
      if (!draging.value)
        return;
      dragingY.value = e.touches[0].clientY;
      const deltaY = Math.max(dragingY.value - startDragY.value, 0);
      (_a = dialogRef.value) == null ? void 0 : _a.style.setProperty("transform", `translateY(${deltaY}px)`);
    }
    function handleTouchEnd(e) {
      var _a, _b;
      if (!draging.value)
        return;
      draging.value = false;
      const deltaY = Math.max(dragingY.value - startDragY.value, 0);
      const deltaTime = e.timeStamp - startDragTime.value;
      if (deltaY > 10 && deltaTime < 200 || deltaY > 200) {
        closing.value = true;
        (_a = dialogRef.value) == null ? void 0 : _a.style.setProperty("transform", `translateY(100%)`);
        setTimeout(() => {
          clearBondDetailModal();
          closing.value = false;
        }, 300);
      } else {
        (_b = dialogRef.value) == null ? void 0 : _b.style.setProperty("transform", `translateY(0px)`);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(modalBond)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 w-full h-full bg-black bg-opacity-50 md:flex md:items-center md:justify-center" }, _attrs))} data-v-bc7c8301><dialog${ssrIncludeBooleanAttr(unref(modalBond) !== null) ? " open" : ""} class="w-full absolute bottom-0 max-h-[calc(100%-64px)] bg-white text-black rounded-t-2xl px-4 py-3 pb-10 overflow-y-auto transition-transform duration-100 dialog-enter md:relative md:max-w-4xl md:mx-4 md:rounded-2xl md:p-10 md:pt-5" data-v-bc7c8301><div class="flex justify-center pb-7 md:hidden" data-v-bc7c8301><div class="w-10 h-1 bg-gray-2 rounded-full" data-v-bc7c8301></div></div><div class="hidden md:flex justify-end mb-5" data-v-bc7c8301><button class="flex" data-v-bc7c8301><svg id="icon_close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" data-v-bc7c8301><line x1="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-v-bc7c8301></line><line x2="18.286" y2="18.286" transform="translate(0.857 0.857)" fill="none" stroke="#04327a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-v-bc7c8301></line></svg></button></div><div class="flex items-start justify-between md:items-center" data-v-bc7c8301><h1 class="text-xl font-medium" data-v-bc7c8301>${ssrInterpolate(unref(modalBond).symbolName)}<br class="md:hidden" data-v-bc7c8301> (${ssrInterpolate(unref(modalBond).valuationCurrency)}) </h1><div class="flex items-center gap-3 md:gap-5" data-v-bc7c8301><button data-v-bc7c8301><svg width="24" height="23" viewBox="0 0 24 23" data-v-bc7c8301><path d="M12.044,1l3.413,6.94,7.63,1.113-5.521,5.4,1.3,7.627-6.825-3.6-6.825,3.6,1.3-7.627L1,9.053,8.631,7.94Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="fill-transparent stroke-gray-1" data-v-bc7c8301></path></svg></button><button class="btn w-12 h-12 bg-primary text-white p-0 flex items-center md:w-auto md:px-5" data-v-bc7c8301><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30" data-v-bc7c8301><g transform="translate(5 7)" data-v-bc7c8301><path d="M.816.816H4.223L7.364,13.368h9.8" transform="translate(-0.052 -0.052)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></path><path d="M5.147,3.574H19.568l-1.81,7.309H6.977Z" transform="translate(-0.331 -0.23)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></path><line x1="12.626" transform="translate(5.731 6.9)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></line><line y2="6.853" transform="translate(12.044 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></line><line x1="1.138" y2="6.853" transform="translate(14.708 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></line><line x2="1.138" y2="6.853" transform="translate(8.226 3.8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.631" data-v-bc7c8301></line><path d="M10.14,16.788a1.154,1.154,0,1,1-1.154-1.154,1.154,1.154,0,0,1,1.154,1.154" transform="translate(-0.504 -1.005)" fill="#fff" data-v-bc7c8301></path><path d="M17.783,16.788a1.154,1.154,0,1,1-1.154-1.154,1.154,1.154,0,0,1,1.154,1.154" transform="translate(-0.996 -1.005)" fill="#fff" data-v-bc7c8301></path></g></svg><span class="hidden md:inline" data-v-bc7c8301>加入</span></button></div></div><div class="mt-2 py-1 px-5 text-primary bg-blue-grey w-max rounded-full md:mt-1" data-v-bc7c8301>${ssrInterpolate(unref(modalBond).couponRate)}｜${ssrInterpolate(unref(modalBond).dueDate.split(".")[0] ?? "")}年</div><hr class="my-5 border-gray-1" data-v-bc7c8301><div class="md:flex" data-v-bc7c8301><div class="flex gap-3 justify-evenly items-center px-4 mt-3 md:flex-col md:justify-start md:items-start md:px-0 md:mt-0 md:mr-6" data-v-bc7c8301><div data-v-bc7c8301><p class="text-sm text-black text-center md:text-left" data-v-bc7c8301>參考殖利率(%)</p><p class="mt-2 text-3xl font-light text-center md:text-left text-primary" data-v-bc7c8301>${ssrInterpolate(Number(unref(modalBond).referenceYieldToMaturity).toFixed(2))}</p></div><hr class="h-auto self-stretch border-r border-gray-2" data-v-bc7c8301><div data-v-bc7c8301><p class="text-sm text-black text-center md:text-left" data-v-bc7c8301>參考申購價</p><p class="mt-2 text-3xl font-light text-center md:text-left text-primary" data-v-bc7c8301>${ssrInterpolate(Number(unref(modalBond).referencePurchasePrice).toFixed(2))}</p></div><hr class="h-auto self-stretch border-r border-gray-2" data-v-bc7c8301><div data-v-bc7c8301><p class="text-sm text-black text-center md:text-left" data-v-bc7c8301>剩餘年期</p><p class="mt-2 text-3xl font-light text-center md:text-left text-primary" data-v-bc7c8301>${ssrInterpolate(unref(modalBond).remainingTenure)}</p></div></div><div class="md:flex-1" data-v-bc7c8301><div class="p-5 mt-5 bg-blue-grey rounded-2xl leading-7 md:flex md:items-start md:mt-0 md:relative" data-v-bc7c8301><table class="w-full" data-v-bc7c8301><tbody data-v-bc7c8301><!--[-->`);
        ssrRenderList(table1Columns, (column) => {
          _push(`<tr data-v-bc7c8301><td class="align-baseline" data-v-bc7c8301>${ssrInterpolate(column.label)}</td><td class="align-baseline pl-3" data-v-bc7c8301>${ssrInterpolate(unref(modalBond)[column.key])}</td></tr>`);
        });
        _push(`<!--]--></tbody></table><hr class="my-3 border-gray-2 md:my-0 md:mx-5" data-v-bc7c8301><table class="w-full" data-v-bc7c8301><tbody data-v-bc7c8301><!--[-->`);
        ssrRenderList(table2Columns, (column) => {
          _push(`<tr data-v-bc7c8301><td class="align-baseline" data-v-bc7c8301>${ssrInterpolate(column.label)}</td><td class="align-baseline pl-3" data-v-bc7c8301>${ssrInterpolate(unref(modalBond)[column.key])}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="text-sm mt-2" data-v-bc7c8301>（報價日：2023.04.13）</div></div></div></dialog></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BondDetail_vue_vue_type_style_index_0_scoped_bc7c8301_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/find/BondDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc7c8301"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "find",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "凱基專區找債券",
      meta: [{ name: "description", content: "凱基專區找債券" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasFindHead = __nuxt_component_0;
      const _component_OverseasFindFeatureButtons = _sfc_main$4;
      const _component_OverseasFindSearch = _sfc_main$3;
      const _component_OverseasFindSearchResult = _sfc_main$2;
      const _component_OverseasModal = _sfc_main$6;
      const _component_OverseasFindBondDetail = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OverseasFindHead, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasFindFeatureButtons, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasFindSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasFindSearchResult, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasModal, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasFindBondDetail, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/overseas/find.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=find-9ab4b801.js.map
