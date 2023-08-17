import { u as useWindowStore, b as _sfc_main$1, c as __nuxt_component_1, d as _sfc_main$2, e as __nuxt_component_3 } from "./one-a3b7287c.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { s as storeToRefs, f as useHead } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./modalStore-de418064.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trans",
  __ssrInlineRender: true,
  setup(__props) {
    useWindowStore();
    storeToRefs(useWindowStore());
    useHead({
      title: "保證金互轉",
      meta: [{ name: "description", content: "保證金互轉" }],
      bodyAttrs: {
        class: ""
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarginDepositModal = _sfc_main$1;
      const _component_MarginDepositSelectAccount = __nuxt_component_1;
      const _component_MarginDepositReload = _sfc_main$2;
      const _component_MarginDepositStepOne = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "mb-auto h-10 lg:mx-auto",
        id: "divMargin"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MarginDepositModal, null, null, _parent));
      _push(ssrRenderComponent(_component_MarginDepositSelectAccount, { class: "px-0 lg:mx-auto lg:px-16" }, null, _parent));
      _push(ssrRenderComponent(_component_MarginDepositReload, null, null, _parent));
      _push(ssrRenderComponent(_component_MarginDepositStepOne, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/marginDeposit/trans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=trans-bb4e6433.js.map
