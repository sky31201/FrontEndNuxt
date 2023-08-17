import { useSSRContext, defineComponent, mergeProps, unref, ref, onUpdated } from 'vue';
import { d as defineStore, s as storeToRefs, a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useModalStore } from './modalStore-de418064.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "modal",
  __ssrInlineRender: true,
  setup(__props) {
    useModalStore();
    const { modalData } = storeToRefs(useModalStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-slate-400 h-screen z-50 fixed w-screen opacity-90",
        style: unref(modalData).isShowModal ? null : { display: "none" }
      }, _attrs))}><dialog id="my_modal_3" class="modal"${ssrIncludeBooleanAttr(unref(modalData).isShowModal) ? " open" : ""}><form method="dialog" class="modal-box"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> \u2715 </button><h3 class="font-bold text-lg">${ssrInterpolate(unref(modalData).title)}</h3><div class="divider"></div><p class="py-4">${ssrInterpolate(unref(modalData).content)}</p><div class="modal-action" style="${ssrRenderStyle(unref(modalData).showButton ? null : { display: "none" })}"><button class="btn">\u78BA\u5B9A</button><button class="btn">\u53D6\u6D88</button></div></form></dialog></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/modal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useAccountListStore = defineStore("accountListStore", () => {
  const accountList = ref();
  const accountData = ref({ title: "\u671F", info: "" });
  const queryAccountList = () => {
    accountList.value = [
      {
        title: "\u671F",
        info: "\u671F-111-9800000-\u5F35\uFF2F\uFF2F"
      },
      {
        title: "\u671F",
        info: "\u671F-222-9800000-\u5F35\uFF2F\uFF2F"
      },
      {
        title: "\u671F",
        info: "\u671F-333-9800000-\u5F35\uFF2F\uFF2F"
      }
    ];
  };
  const setAccountData = (aData) => {
    accountData.value = aData;
  };
  return { queryAccountList, setAccountData, accountData, accountList };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "selectAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const { queryAccountList, setAccountData } = useAccountListStore();
    const { accountList, accountData } = storeToRefs(useAccountListStore());
    queryAccountList();
    const isShowUl = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#151F28] lg:bg-white" }, _attrs))} data-v-6edc03e5><div class="drop relative" data-v-6edc03e5><div class="dropOption bg-slate-800 lg:bg-slate-300 w-full rounded" data-v-6edc03e5><div class="flex bg-slate-800 lg:bg-slate-300 text-white lg:text-black h-[38px] lg:font-bold rounded items-center" data-v-6edc03e5><div class="border border-slate-600 text-slate-600p-1 rounded text-sm lg:text-lg" data-v-6edc03e5>${ssrInterpolate(unref(accountData).title)}</div><div class="text-sm pl-1" data-v-6edc03e5>${ssrInterpolate(unref(accountData).info)}</div></div></div><ul class="dropdown bg-slate-800 lg:bg-slate-300 w-full" style="${ssrRenderStyle(unref(isShowUl) ? null : { display: "none" })}" data-v-6edc03e5><!--[-->`);
      ssrRenderList(unref(accountList), (item, index) => {
        _push(`<li class="text-gray-400" data-v-6edc03e5><div class="flex bg-slate-800 lg:bg-slate-300 text-white lg:text-black h-[38px] rounded items-center" data-v-6edc03e5><div class="border border-slate-600 text-slate-600 text-sm p-1 rounded" data-v-6edc03e5>${ssrInterpolate(item.title)}</div><div class="text-sm pl-1" data-v-6edc03e5>${ssrInterpolate(item.info)}</div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/selectAccount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6edc03e5"]]);
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAjFJREFUSA29ljtrAkEUhd0YjSCS1FqnsRZSmcYuJJguYCE22qfKb7BK7zZiIdhl8+pstArYxsZaWyMiGEXMOZsZmVmfMTIDwzzuveeb2Zm9u9Z8Prd8BsuRQZaLMg483mWH1Wr1bDQapfH405ZlxdFGGYd+D/02WiccDjuZTOZrm5616QzL5fLJdDq9h88DhE63iA0ALgYCgcdcLve9znctsFKpRMfj8RMCEyK4DsGa3+9vRCKRLueGw2FsNptdYkF3GKaEXysUCt1ms9meGGvNSqCAfcAzhtoBKI/S0CI9A9u2CbYxfY7aBfRiFXQJyMc4mUyaCEoA1MTZpHc5G/LFWTsAJzFsBYPBpPfxLt1SnhlhqJ11MOzmtVQqvcBHK1wYYzDZQU0ILc1HA3KF4oLwBuZ33ZmqyBjGco5a1FTtGpBXH0bexvqmM4PtulAo3KhCal/E1qklNBdmDYgVEcjd1RYee3akhtSUMhoQTnEaePWlw6p23RmqvlJDakqblmmwGjeDyPdMOnlb+F1557xjavT7fZ6jqynt2g7l5CFaJIWVXyENiO272YEZ5ADQRb5VtTQgtt+mkelKddqnr2h8qvEaEDt0aASYufFfRdF4VoU0ID8xMA5QU8yNquNf+iKWyXwgNBfhGlBkiSKtWKHtzRIyCk/iHf03OVZbka2YxPk+F73ZynjyXgJyZUY/TwSyGP0A/yJ9PqO/GBLKlhfByE+UCj1UX3stDiW6Scc48AdNgWBxTHguegAAAABJRU5ErkJggg==";
const useReloadStore = defineStore("reloadStore", () => {
  const eventType = ref(0);
  const setReloadEvent = () => {
    console.log(eventType);
  };
  return { setReloadEvent, eventType };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "reload",
  __ssrInlineRender: true,
  setup(__props) {
    storeToRefs(useReloadStore());
    storeToRefs(useModalStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between lg:justify-center text-white h-[38px] rounded lg:rounded-none items-center bg-[#151F28] lg:bg-white" }, _attrs))}><div class="text-sm sm:text-base md:text-lg lg:text-xl bg-[#151F28] lg:bg-white text-gray-400 lg:text-black pt-1 pl-2 lg:pr-8"> 2022/08/05 16:40:23 </div><div class="flex items-center text-sm pl-1"><button class="flex items-center justify-center p-3 w-[80px] sm:w-[110px] md:w-[110px] lg:w-[110px] h-[18px] bg-[#0C213C] lg:bg-slate-300 rounded"><span class="text-white lg:text-black text-sm sm:text-base md:text-lg">\u91CD\u65B0\u6574\u7406</span></button><span class="p-2"><img${ssrRenderAttr("src", _imports_0$2)} alt="exclamationmark"></span></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/reload.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAvxJREFUWAntV72O00AYjEkaI1FEVwFNpKPgJcgDcEIniogmKS5KrqO4JzjxGokVitCjCB30eQoKTkoDVKcUCJIivjBjea1dZ3f5bKKDSF4p2p9vvtnxeL27CbbbbVA7gHLvADQmEiuh+35TlaOVo/t2YN98B7NGG3/75FEUPQbHKQ6OE9THqB+RMwiCb6iuUV+hng0Gg68cL1uCsifTZDJ5uNls3kDIGTjqPgHAxMC8bTQal/1+/7sP64qVEjoej1+A8B0mf+Aito1D8A+Md4fD4Qdb3DdWeI2ORqPXEPi+qEiKYA5zyeETZYsVcpROciIQFX7A3OS3cPdlEWfFQrkm4zj+nHNyAQF8/Uc5IfnuDQb42lsqwGVQr9efStes2Bl+OHmRzWbzCX6cfK4EWOo5McQitlBxcpFT9f9Ui4RyC4IDZzkyOhl2Op2fYRg+R9smds4YMcTix5yskDPd3rIxV0MkFMncJ/Nb0NFyubyaTqf3e73eL4vYRCRjxBALHmOJpJynLnH6uEgoCLmZ20p7tVp9tIg1RK7X609IbtsIPNwGXCQUGcdGltnZEUt3lZN8EIh5ZqYYPR93BhQdoZgoORazrN2GEpsIZJguUySaVicVhYA7gUodVbz/rBYJxdfJC4avGGvSsmaduQLuJFckFMhr50zYlvJr0vGBuSh83FmOSCiemluLreyIBIhrUq1Z19aVcXm4MwwbIqHAzUAYG5m12g1OmxP960Zc/3AMscQizqM0KynnLBvwNMRnPW48I/AMNK5FeiyG6Waui9RgNR6hFLkC7gvqlhaMzlG0vrMp2p6YzUsvLiWvsJ2oY7CVTsy+ceLkZmsDt8CY7VJymcM6u9JXX0tvOV0w3WpsLbR9IhWUGGJVIUdXenNiklgowen98QJNXSxDRQpzL4rcRUkuXqO6koP4K0LBdIOXXjQjy26gP1PSTjERc4o6qchKOaqSWf/3f5d1sXfRLvQx3YUg1xyVUJczZccrR8s658qrHHU5U3b8YBz9DRiFd35cNkTnAAAAAElFTkSuQmCC";
const useBottomStore = defineStore("bottomStore", () => {
  const isShowBottom = ref(false);
  const bottomData = ref({ currency: "\u7121", amount: 0, account: "", time: "" });
  const setBottomShow = (b) => {
    isShowBottom.value = b;
  };
  const setBottomData = (data) => {
    bottomData.value = data;
  };
  return { setBottomShow, setBottomData, isShowBottom, bottomData };
});
var RouteEnum = /* @__PURE__ */ ((RouteEnum2) => {
  RouteEnum2[RouteEnum2["Index"] = 0] = "Index";
  RouteEnum2[RouteEnum2["Info"] = 1] = "Info";
  RouteEnum2[RouteEnum2["Trans"] = 2] = "Trans";
  return RouteEnum2;
})(RouteEnum || {});
const RouteEnum$1 = RouteEnum;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "bottom",
  __ssrInlineRender: true,
  setup(__props) {
    const bottomStore = useBottomStore();
    storeToRefs(useAccountListStore());
    const { isShowBottom, bottomData } = storeToRefs(bottomStore);
    storeToRefs(useModalStore());
    const route = useRoute();
    const isEnableTransAccount = ref(false);
    isEnableTransAccount.value = route.path.toLowerCase().search(RouteEnum$1[RouteEnum$1.Trans].toLocaleLowerCase()) !== -1 ? true : false;
    onUpdated(() => {
      if (bottomData.value.currency !== "\u53F0\u5E63") {
        document.querySelector("select").selectedIndex = 0;
        selectCurrency.value = bottomData.value.currency;
      }
    });
    const selectCurrency = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "h-72 bg-[#081827]" }, _attrs))}><div class="w-full"><img class="float-right pr-2"${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="flex flex-row items-center text-gray-400 w-full pt-2"><div class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"> \u8F49\u51FA\u91D1\u984D\uFF1A </div><div class="w-16 lg:w-32"><span class="text-white pl-2 text-sm sm:text-base md:text-lg lg:text-xl">${ssrInterpolate(unref(bottomData).currency)}</span></div><div class="px- lg:px-16"><input placeholder="\u8ACB\u8F38\u5165"${ssrRenderAttr("value", unref(bottomData).amount)} class="text-right w-36 lg:w-72 bg-slate-100 text-black h-8 rounded-lg pr-5"></div></div>`);
      if (unref(bottomData).currency !== "\u53F0\u5E63") {
        _push(`<div class="flex flex-row items-center py-4 text-gray-400 w-full"><div class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"> \u6211\u8981\u63DB\u6210\uFF1A </div><div class="text-black font-bold"><select class="select select-bordered select-xs w-18 max-w-xs bg-white"><option>${ssrInterpolate(unref(bottomData).currency)}</option><option>\u53F0\u5E63</option></select></div></div>`);
      } else {
        _push(`<div class="pt-8"></div>`);
      }
      _push(`<div class="flex flex-row flex-nowrap items-center text-gray-400 w-full" style="${ssrRenderStyle(!unref(isEnableTransAccount) ? null : { display: "none" })}"><div class="text-white font-bold basis-1/4 pl-6 text-sm sm:text-base md:text-lg lg:text-xl"> \u8F49\u5165\u5E33\u865F\uFF1A </div><div class="flex flex-row text-white"><span class="pl-2 text-sm sm:text-base md:text-lg lg:text-xl">${ssrInterpolate(unref(bottomData).account.split("-")[0])}</span><span class="pl-4 text-sm sm:text-base md:text-lg lg:text-xl">${ssrInterpolate(unref(bottomData).account.split("-")[1])}</span></div></div><div class="px-4"><button class="${ssrRenderClass([unref(isEnableTransAccount) ? ` my-4 ` : ` my-8 `, "btn btn-info btn-block text-white text-sm sm:text-base md:text-lg lg:text-xl"])}"> \u9001\u51FA\u7533\u8ACB </button></div><div class="text-red-600 text-center pb-3 text-sm sm:text-sm md:text-base lg:text-lg"><span>*\u5982\u6709\u63DB\u532F\u7533\u8ACB\uFF0C\u5BE6\u969B\u51FA\u91D1\u91D1\u984D\u4EE5\u51FA\u91D1\u6642\u9280\u884C\u532F\u7387\u70BA\u6E96</span></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/bottom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function toThousands(num) {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num))
    num = num.replace(pattern, "$1,$2");
  return num;
}
const _imports_0 = "data:image/png;base64,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";
const useOneStore = defineStore("oneStore", () => {
  const oneDataList = ref([]);
  const queryOneDataList = () => {
    oneDataList.value = [
      { currency: "\u53F0\u5E63", amount: 1e6, account: "\u51F1\u57FA\u5927\u5B89\u5206\u884C-6040********95", time: "2023-01-01" },
      { currency: "\u7F8E\u5143", amount: 400.35, account: "\u51F1\u57FA\u7F8E\u5143\u5206\u884C-4060********59", time: "2023-01-01" },
      { currency: "\u65E5\u5713", amount: 700.35, account: "\u51F1\u57FA\u65E5\u5713\u5206\u884C-1060********59", time: "2023-01-01" },
      { currency: "\u6E2F\u5E63", amount: 5200.35, account: "\u51F1\u57FA\u6E2F\u5E63\u5206\u884C-2060********59", time: "2023-01-01" },
      { currency: "\u6B50\u5143", amount: 2300.35, account: "\u51F1\u57FA\u6B50\u5143\u5206\u884C-3060********59", time: "2023-01-01" },
      { currency: "\u82F1\u938A", amount: 8100.35, account: "\u51F1\u57FA\u82F1\u938A\u5206\u884C-5060********59", time: "2023-01-01" },
      { currency: "\u65B0\u5E63", amount: 3400.35, account: "\u51F1\u57FA\u65B0\u5E63\u5206\u884C-8060********59", time: "2023-01-01" }
    ];
  };
  const cleanOneDataList = () => {
    oneDataList.value = [];
  };
  return { queryOneDataList, cleanOneDataList, oneDataList };
});
const useWindowStore = defineStore("windowStore", () => {
  const windowWidth = ref(0);
  const setWindowWidth = (w) => {
    w.addEventListener("resize", () => windowWidth.value = w.innerWidth);
  };
  return { setWindowWidth, windowWidth };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "one",
  __ssrInlineRender: true,
  setup(__props) {
    const { windowWidth } = storeToRefs(useWindowStore());
    useBottomStore();
    const { queryOneDataList, cleanOneDataList } = useOneStore();
    const { isShowBottom } = storeToRefs(useBottomStore());
    const { oneDataList } = storeToRefs(useOneStore());
    queryOneDataList();
    const showData = (isShow) => {
      isShow ? queryOneDataList() : cleanOneDataList();
    };
    showData(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarginDepositBottom = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e70c2e60><div class="grid grid-cols-3 h-10 items-center text-center font-bold w-full bg-[#151F28] lg:bg-slate-300 text-gray-400 lg:text-black text-sm sm:text-base md:text-lg lg:text-xl" data-v-e70c2e60><div data-v-e70c2e60>\u5E63\u5225</div><div data-v-e70c2e60>\u53EF\u51FA\u91D1\u91D1\u984D</div><div data-v-e70c2e60></div></div>`);
      if (unref(windowWidth) > 1024) {
        _push(`<div data-theme="light" class="p-4 mx-auto grid lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] md:grid-cols-2 md:justify-evenly md:gap-6 md:max-w-[768px] sm:grid-cols-1 sm:justify-evenly sm:gap-6 sm:max-w-[476px]" data-v-e70c2e60><!--[-->`);
        ssrRenderList(unref(oneDataList), (item, index) => {
          _push(`<div class="flex gap-3 justify-items-center items-center px-4" data-v-e70c2e60><div class="card w-96 bg-base-100 shadow-xl grid grid-col" data-v-e70c2e60><div class="card-body text-left" data-v-e70c2e60><h2 class="card-title" data-v-e70c2e60>\u5E63\u5225: ${ssrInterpolate(item.currency)}</h2><p data-v-e70c2e60>\u53EF\u51FA\u91D1\u91D1\u984D: ${ssrInterpolate(("toThousands" in _ctx ? _ctx.toThousands : unref(toThousands))(item.amount))}</p><div class="card-actions w-full" data-v-e70c2e60><button class="btn btn-primary btn-block text-lg" data-v-e70c2e60> \u7533\u8ACB </button></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(windowWidth) > 100) {
        _push(`<!--[-->`);
        ssrRenderList(unref(oneDataList), (item, index) => {
          _push(`<div data-theme="drak" class="grid grid-cols-3 lg:grid-cols-4 lg:grid-flow-col h-16 lg:w-72 lg:m-4 items-center text-center bg-black lg:bg-white text-gray-400 lg:text-black pt-1 text-sm sm:text-base md:text-lg lg:text-xl" data-v-e70c2e60><div data-v-e70c2e60>${ssrInterpolate(item.currency)}</div><div data-v-e70c2e60>${ssrInterpolate(("toThousands" in _ctx ? _ctx.toThousands : unref(toThousands))(item.amount))}</div><button class="bg-white text-black w-20 rounded h-18 font-bold hover:bg-slate-200" data-v-e70c2e60><span class="text-black text-sm sm:text-base md:text-lg lg:text-xl" data-v-e70c2e60>\u7533\u8ACB</span></button><div class="border-t w-screen" data-v-e70c2e60></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(oneDataList).length === 0 ? null : { display: "none" })}" class="h-screen flex items-center justify-center" data-v-e70c2e60><div class="flex flex-col" data-v-e70c2e60><img class="mx-auto w-[32px] h-[32px] lg: w-[64px] lg: h-[64px]" alt="\u7121\u8CC7\u6599"${ssrRenderAttr("src", _imports_0)} data-v-e70c2e60><span class="pt-2 text-center text-sm lg:text-lg" data-v-e70c2e60>\u76EE\u524D\u67E5\u7121\u76F8\u95DC\u8CC7\u6599</span><span class="text-red-500 font-bold text-center" data-v-e70c2e60>\u2B07\u2B07\u6E2C\u8A66\u2B07\u2B07</span><span class="text-red-500 font-bold" data-v-e70c2e60>\u9EDE\u53EF\u51FA\u91D1\u91D1\u984D\u53EF\u4EE5\u6478\u64EC\u6709\u8CC7\u6599</span><span class="text-red-500 font-bold" data-v-e70c2e60>\u9EDE\u5E63\u5225\u53EF\u4EE5\u6478\u64EC\u7121\u8CC7\u6599</span><span class="text-red-500 font-bold text-center" data-v-e70c2e60>\u2B06\u2B06\u6E2C\u8A66\u2B06\u2B06</span></div></div>`);
      _push(ssrRenderComponent(_component_MarginDepositBottom, {
        style: unref(isShowBottom) ? null : { display: "none" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/step/one.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e70c2e60"]]);

export { _imports_0 as _, useWindowStore as a, _sfc_main$4 as b, __nuxt_component_1 as c, _sfc_main$2 as d, __nuxt_component_3 as e, toThousands as t, useReloadStore as u };
//# sourceMappingURL=one-a3b7287c.mjs.map
