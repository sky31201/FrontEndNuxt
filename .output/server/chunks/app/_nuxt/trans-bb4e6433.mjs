import { a as useWindowStore, b as _sfc_main$4, c as __nuxt_component_1, d as _sfc_main$2, e as __nuxt_component_3 } from './one-a3b7287c.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { s as storeToRefs, f as useHead } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './modalStore-de418064.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trans",
  __ssrInlineRender: true,
  setup(__props) {
    useWindowStore();
    storeToRefs(useWindowStore());
    useHead({
      title: "\u4FDD\u8B49\u91D1\u4E92\u8F49",
      meta: [{ name: "description", content: "\u4FDD\u8B49\u91D1\u4E92\u8F49" }],
      bodyAttrs: {
        class: ""
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarginDepositModal = _sfc_main$4;
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

export { _sfc_main as default };
//# sourceMappingURL=trans-bb4e6433.mjs.map
