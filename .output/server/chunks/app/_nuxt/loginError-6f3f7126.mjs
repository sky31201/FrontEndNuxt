import { a as useRoute, b as _sfc_main$3, e as _sfc_main$2 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "loginError",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasHeader = _sfc_main$3;
      const _component_OverseasFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OverseasHeader, null, null, _parent));
      _push(`<div class="bg-white py-24"><div class="flex flex-col items-center"><p class="my-8 text-3xl text-gray-800">\u4F7F\u7528\u8005\u672A\u767B\u5165</p><button>\u8FD4\u56DE\u767B\u5165\u9801</button></div></div>`);
      _push(ssrRenderComponent(_component_OverseasFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loginError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=loginError-6f3f7126.mjs.map
