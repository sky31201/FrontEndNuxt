import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import{o as r,c as u,e as o,a as b,s as g,w as l,g as c,u as s,t as i}from"./entry.f14e2a09.js";import{u as d,M as _}from"./modalStore.03b7ca9d.js";const v={},k={id:"divTop",class:"modal bg-slate-200 !opacity-90"},w=o("span",{class:"loading loading-spinner loading-lg"},null,-1),x=[w];function C(m,e){return r(),u("div",k,x)}const N=f(v,[["render",C]]),y=["open"],M={method:"dialog",class:"modal-box"},S={class:"font-bold text-lg"},$=o("div",{class:"divider"},null,-1),B={class:"py-4"},D={class:"modal-action"},V=b({__name:"modal",setup(m){const e=d(),{setModalShow:a}=e,{modalData:t}=g(d()),p=()=>{switch(a(!1),console.log("1"),t.value.modalType){case _.Default:console.log("Default");break;case _.ChuRuJin:console.log("ChuRuJin");break}};return(R,n)=>l((r(),u("div",null,[o("dialog",{id:"my_modal_3",class:"modal bg-slate-200 !opacity-90",open:s(t).isShowModal},[o("form",M,[o("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:n[0]||(n[0]=h=>s(a)(!1))}," ✕ "),o("h3",S,i(s(t).title),1),$,o("p",B,i(s(t).content),1),l(o("div",D,[o("button",{class:"btn",onClick:p},"確定"),o("button",{class:"btn",onClick:n[1]||(n[1]=h=>s(a)(!1))},"取消")],512),[[c,s(t).showButton]])])],8,y)],512)),[[c,s(t).isShowModal]])}});export{V as _,N as a};