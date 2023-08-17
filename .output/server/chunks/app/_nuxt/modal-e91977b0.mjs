import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { s as storeToRefs } from '../server.mjs';
import { u as useModalStore } from './modalStore-de418064.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "divTop",
    class: "modal bg-slate-200 !opacity-90"
  }, _attrs))}><span class="loading loading-spinner loading-lg"></span></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal",
  __ssrInlineRender: true,
  setup(__props) {
    useModalStore();
    const { modalData } = storeToRefs(useModalStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(modalData).isShowModal ? null : { display: "none" }
      }, _attrs))}><dialog id="my_modal_3" class="modal bg-slate-200 !opacity-90"${ssrIncludeBooleanAttr(unref(modalData).isShowModal) ? " open" : ""}><form method="dialog" class="modal-box"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> \u2715 </button><h3 class="font-bold text-lg">${ssrInterpolate(unref(modalData).title)}</h3><div class="divider"></div><p class="py-4">${ssrInterpolate(unref(modalData).content)}</p><div class="modal-action" style="${ssrRenderStyle(unref(modalData).showButton ? null : { display: "none" })}"><button class="btn">\u78BA\u5B9A</button><button class="btn">\u53D6\u6D88</button></div></form></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
//# sourceMappingURL=modal-e91977b0.mjs.map
