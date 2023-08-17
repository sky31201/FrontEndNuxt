import "./index-e12b288f.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { f as useHead } from "../server.mjs";
import "unhead";
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
import "@unhead/shared";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "defu";
const _sfc_main = {
  __name: "marketinfo",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "凱基專區市場資訊",
      meta: [{ name: "description", content: "凱基專區市場資訊" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><h1>marketInfo Page</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/overseas/marketinfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=marketinfo-04b4ff4b.js.map
