import { a as useRoute, b as _sfc_main$1, e as _sfc_main$2 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "loginError",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasHeader = _sfc_main$1;
      const _component_OverseasFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OverseasHeader, null, null, _parent));
      _push(`<div class="bg-white py-24"><div class="flex flex-col items-center"><p class="my-8 text-3xl text-gray-800">使用者未登入</p><button>返回登入頁</button></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=loginError-6f3f7126.js.map
