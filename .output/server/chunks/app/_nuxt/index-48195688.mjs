import { _ as __nuxt_component_0, a as _sfc_main$3 } from './modal-e91977b0.mjs';
import { d as defineStore, p as persistedState, s as storeToRefs, u as useRuntimeConfig, _ as __nuxt_component_0$1 } from '../server.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useBaseFetch } from './useBaseFetch-b45509e5.mjs';
import { u as useLoadingStore } from './loadingStore-df149339.mjs';
import { u as useModalStore } from './modalStore-de418064.mjs';
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

const useKgiTestLoginStore = defineStore("kgiTestLoginStore", () => {
  const postData = ref({
    IDs: "F123326781",
    Orign: "A",
    ApplyType: "OB",
    WithOSB: "Y",
    PWD: "0000"
  });
  const responseData = ref();
  const options = {
    onRequest({ options: options2 }) {
      useLoadingStore().setLoadingShow(true);
      options2.body = postData.value;
    },
    onResponse({ response }) {
      useLoadingStore().setLoadingShow(false);
      const result = response._data;
      if (result.userIdAccountsDataList.length === 0)
        return;
      responseData.value = result;
    }
  };
  const fetchData = async () => await useBaseFetch(`/api/auth/TestLogin`, options);
  return { fetchData, postData, responseData };
}, {
  persist: {
    key: "testLogin",
    storage: persistedState.sessionStorage
  }
});
const useKgiAuthVerifyStore = defineStore("kgiAuthVerifyStore", () => {
  const postData = ref({
    applytype: "",
    orign: "",
    orignolts: "",
    orgclient: "",
    orgserver: "",
    trust_seq: "",
    idno: "",
    idaccounts: "",
    stock: "",
    adflag: "",
    uitype: "",
    dirpack: "",
    syncert: "",
    apver: "",
    verno: ""
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
      if (result.userData.length === 0)
        return;
      responseData.value = result;
    }
  };
  const fetchData = async () => await useBaseFetch(`/api/auth/Verify`, options);
  return { fetchData, postData, responseData };
}, {
  persist: {
    key: "authVerify",
    storage: persistedState.sessionStorage
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Mocklogin",
  __ssrInlineRender: true,
  setup(__props) {
    useKgiTestLoginStore();
    useKgiAuthVerifyStore();
    const testLoginStoreRef = storeToRefs(useKgiTestLoginStore());
    storeToRefs(useKgiAuthVerifyStore());
    storeToRefs(useModalStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverseasModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-300 rounded-2xl shadow-xl container mx-auto w-[400px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OverseasModal, null, null, _parent));
      _push(`<div class="p-2 bg-blue-grey rounded-sm mx-4 text-base font-medium text-dark-blue mt-5"> IDs <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(testLoginStoreRef).postData.value.IDs)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> Orign <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(testLoginStoreRef).postData.value.Orign)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> ApplyType <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(testLoginStoreRef).postData.value.ApplyType)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> WithOSB <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(testLoginStoreRef).postData.value.WithOSB)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> PWD <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(testLoginStoreRef).postData.value.PWD)}></div></div><div class="flex justify-center gap-2 mt-5 pb-4 px-4"><button class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-2 rounded-xl"> \u524D\u5F80\u6D77\u5916\u50B5(\u767B\u5165\u7248) </button><button class="flex-1 text-white font-medium btn-info px-5 py-2 rounded-xl"> \u524D\u5F80\u6D77\u5916\u50B5(\u514D\u767B\u7248\u958B\u767C\u4E2D) </button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overseas/Mocklogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Mocklogin",
  __ssrInlineRender: true,
  setup(__props) {
    useKgiTestLoginStore();
    useKgiAuthVerifyStore();
    storeToRefs(useKgiTestLoginStore());
    const authVerifyStoreRef = storeToRefs(useKgiAuthVerifyStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-300 rounded-2xl shadow-xl container mx-auto w-[400px]" }, _attrs))}><div class="p-2 bg-blue-grey rounded-sm mx-4 text-base font-medium text-dark-blue mt-5"> applytype <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.applytype)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> orign <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.orign)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> orignolts <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.orignolts)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> orgclient <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.orgclient)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> orgserver <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.orgserver)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> trust_seq <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.trust_seq)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> idno <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.idno)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> idaccounts <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.idaccounts)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> stock <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.stock)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> adflag <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.adflag)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> uitype <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.uitype)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> dirpack <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.dirpack)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> syncert <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.syncert)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> apver <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.apver)}></div></div><div class="p-2 bg-blue-grey rounded-sm mx-4text-base font-medium text-dark-blue mx-4 mt-5"> verno <div><input type="text" class="bg-slate-700 text-slate-100 w-full rounded"${ssrRenderAttr("value", unref(authVerifyStoreRef).postData.value.verno)}></div></div><div class="flex justify-center gap-2 mt-5 pb-4 px-4"><button class="flex-1 text-white font-medium border border-orange bg-orange px-5 py-2 rounded-xl"> \u51FA\u91D1\u7533\u8ACB-\u51FA\u5165\u91D1 </button><button class="flex-1 text-white font-medium btn-info px-5 py-2 rounded-xl"> \u4FDD\u8B49\u91D1\u4E92\u8F49 </button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marginDeposit/Mocklogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isShow } = storeToRefs(useLoadingStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_OverseasMocklogin = _sfc_main$2;
      const _component_MarginDepositMocklogin = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="flex flex-col mx-auto container w-[400px]">`);
      _push(ssrRenderComponent(_component_Loading, {
        style: unref(isShow) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/margindeposit/info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6E2C\u8A66\u672A\u767B\u5165\u51FA\u91D1\u7533\u8ACB-\u51FA\u5165\u91D1`);
          } else {
            return [
              createTextVNode("\u6E2C\u8A66\u672A\u767B\u5165\u51FA\u91D1\u7533\u8ACB-\u51FA\u5165\u91D1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/margindeposit/trans" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6E2C\u8A66\u672A\u767B\u5165\u4FDD\u8B49\u91D1\u4E92\u8F49`);
          } else {
            return [
              createTextVNode("\u6E2C\u8A66\u672A\u767B\u5165\u4FDD\u8B49\u91D1\u4E92\u8F49")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` // TODO: \u6E2C\u8A66\u5B8C\u522A\u9664 ${ssrInterpolate(("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.env)} `);
      _push(ssrRenderComponent(_component_OverseasMocklogin, null, null, _parent));
      _push(ssrRenderComponent(_component_MarginDepositMocklogin, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-48195688.mjs.map
