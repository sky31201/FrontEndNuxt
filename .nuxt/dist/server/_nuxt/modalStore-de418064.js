import { ref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { d as defineStore } from "../server.mjs";
var ModalEnum = /* @__PURE__ */ ((ModalEnum2) => {
  ModalEnum2[ModalEnum2["Default"] = -1] = "Default";
  ModalEnum2[ModalEnum2["ChuRuJin"] = 0] = "ChuRuJin";
  return ModalEnum2;
})(ModalEnum || {});
const useModalStore = defineStore("modalStore", () => {
  const modalData = ref({ isShowModal: false, title: "", content: "", showButton: false, modalType: ModalEnum.Default });
  const setModalShow = (b) => {
    modalData.value.isShowModal = b;
  };
  return { setModalShow, modalData };
});
export {
  useModalStore as u
};
//# sourceMappingURL=modalStore-de418064.js.map
