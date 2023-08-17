import { f as useHead, i as useCartVisible, b as _sfc_main$4, e as _sfc_main$5 } from "../server.mjs";
import { defineComponent, ref, onUnmounted, unref, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-e12b288f.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "klona";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "defu";
const _imports_0$1 = "" + __buildAssetsURL("ico_cart_b.027985dc.svg");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAqCAYAAAC3DKvtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB1dfRDYMgFIXhk07gCIzgRrJB3UA20U0YoSMwAiPQa2KT5oY3zmnjn9zXLyQiImC11qLNAmYX+mkDKwfT8eO2eHb4CkYGTTYvh3N2ixoPNuULrjYzGP0DD2DUwQsbryp8vi3uD61zz09gpMZXh2ewMiw5fAerX+PLA5wa2NnqNrfaA6Op0Cd9u50Pp7FfEBXKP4RUaFChRY1WFTr2+VehvStWxEgS9IKzQ8evsYbsDk0YTYVGOtqBE5g1wQ/kGx0WLt/oCp9tAAAAAElFTkSuQmCC";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarTop",
  __ssrInlineRender: true,
  setup(__props) {
    const cartItemCount = ref(0);
    const isShowCar = ref(false);
    const hidden = ref(false);
    const handleScroll = () => {
      hidden.value = window.scrollY < 132;
    };
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="sticky top-0 md:top-20 lg:top-24 xl:top-0 h-0 z-50 transition-all data-[hidden=true]:-translate-y-16 data-[hidden=true]:opacity-0 data-[hidden=true]:pointer-events-none"${ssrRenderAttr("data-hidden", unref(hidden))} data-v-7112b36f><button class="absolute top-5 right-4 bg-white rounded-lg cart-button-shadow p-4" data-v-7112b36f><svg width="26" height="22" viewBox="0 0 26 22" class="relative left-[-2px] top-[2px]" data-v-7112b36f><path d="M1,1H5.429L9.513,17.306H22.248" transform="translate(-0.008 -0.008)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></path><path d="M6.312,4.382H25.059l-2.353,9.495H8.689Z" transform="translate(-0.05 -0.038)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></path><line x1="16.413" transform="translate(7.45 8.964)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></line><line y2="9.159" transform="translate(15.657 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></line><line x1="1.395" y2="9.159" transform="translate(19.186 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></line><line x2="1.395" y2="9.159" transform="translate(10.73 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-7112b36f></line><path id="Path_48" d="M12.6,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.077 -0.166)" data-v-7112b36f></path><path id="Path_49" d="M21.976,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.151 -0.166)" data-v-7112b36f></path></svg><div class="absolute top-1 right-1 px-1.5 py-0.5 bg-orange rounded-full text-xs text-white" data-v-7112b36f>${ssrInterpolate(unref(cartItemCount))}</div></button></div><div class="flex flex-col justify-center fixed z-50 top-[200px] right-3" data-v-7112b36f><div id="overlay" style="${ssrRenderStyle(unref(isShowCar) ? null : { display: "none" })}" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60" data-v-7112b36f></div><div id="dialog" style="${ssrRenderStyle(unref(isShowCar) ? null : { display: "none" })}" class="fixed z-50 top-1 right-1 h-full bg-white px-8 py-6 drop-shadow-lg test lg:w-[565px] md:w-[365px] sm:w-[365px]" data-v-7112b36f><div class="flex flex-row items-center justify-center" data-v-7112b36f><div data-v-7112b36f><img class="p-3"${ssrRenderAttr("src", _imports_0$1)} alt="top" data-v-7112b36f></div><div data-v-7112b36f><h1 class="text-2xl font-semibold text-[#04327a] px-1" data-v-7112b36f>購物車</h1></div><div class="p-2" data-v-7112b36f><img class="w-6 h-4"${ssrRenderAttr("src", _imports_1)} alt="top" data-v-7112b36f></div><div data-v-7112b36f><select id="cartSelUserId" class="border" style="${ssrRenderStyle({ "width": "150px", "display": "inline" })}" data-v-7112b36f><option value="P100836638" selected data-v-7112b36f>P10083****</option></select></div></div><div class="flex items-center border" data-v-7112b36f><div class="basis-2/3 p-2" data-v-7112b36f><button class="text-2xl font-bold text-[#0B1156]" data-v-7112b36f> 台股 (定期定額/自訂組合) </button></div><div class="basis-1/3 text-right pr-2" data-v-7112b36f><span class="bg-[#E329CD] w-8 h-8 p-1 text-center text-white rounded-lg text-xl" data-v-7112b36f>0</span></div></div><div class="flex items-center border" data-v-7112b36f><div class="basis-2/3 p-2" data-v-7112b36f><button class="text-2xl font-bold text-[#0B1156]" data-v-7112b36f> 美股 (定期定額/自訂組合) </button></div><div class="basis-1/3 text-right pr-2" data-v-7112b36f><span class="bg-[#E329CD] w-8 h-8 p-1 text-center text-white rounded-lg text-xl" data-v-7112b36f>0</span></div></div><button class="fixed bg-[#04327a] top-[50%] w-8 h-16 text-white lg:right-[665px] sm:right-[65px]" data-v-7112b36f><img class="items-center justify-center p-2"${ssrRenderAttr("src", _imports_2)} alt="" data-v-7112b36f></button></div></div><!--]-->`);
    };
  }
});
const CarTop_vue_vue_type_style_index_0_scoped_7112b36f_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/CarTop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7112b36f"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7dVRCoAgEEXRqY3Wzm0HtgMzsihBnXmpEcyDIPTjnj+JwDnnJv9Z/5n9n3ouxOP1QSTifRCFeFsEM94GIYzXRYDxOohMfGae4YhcPNw/Fs7qIErxFKAKghPPAV4huPESAEJI4hyACCGNcwEsBBKXAIoIdzynorgUkEHY/cJK4wgggTDnoQmQmZhDADfE1RsIXBwd/AjYSB9PAQpQgAIU8GvAevtfqPfQZzzeBjPW7gNK1icDAAAAAElFTkSuQmCC";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GoTop",
  __ssrInlineRender: true,
  setup(__props) {
    const showGoTop = ref(false);
    const handleScroll = () => showGoTop.value = window.scrollY > 160;
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(showGoTop)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "divTop",
          class: "flex fixed float-left bottom-24 right-6 w-[40px] h-[40px] bg-[#052a68] border border-indigo-700 rounded justify-center items-center cursor-pointer md:bottom-10"
        }, _attrs))} data-v-82f9544d><img class="p-3"${ssrRenderAttr("src", _imports_0)} alt="top" data-v-82f9544d></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const GoTop_vue_vue_type_style_index_0_scoped_82f9544d_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/GoTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82f9544d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "overseas",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "海外投資",
      meta: [{ name: "description", content: "凱基專區" }],
      bodyAttrs: {}
    });
    const cartVisible = useCartVisible();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasHeader = _sfc_main$4;
      const _component_OverseasCarTop = __nuxt_component_1;
      const _component_OverseasNavBar = __nuxt_component_2;
      const _component_OverseasFooter = _sfc_main$5;
      const _component_OverseasGoTop = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_OverseasHeader, null, null, _parent));
      if (unref(cartVisible)) {
        _push(ssrRenderComponent(_component_OverseasCarTop, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="app" class="bg-[#f6f6f6]">`);
      _push(ssrRenderComponent(_component_OverseasNavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_OverseasFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_OverseasGoTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/overseas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=overseas-05613429.js.map
