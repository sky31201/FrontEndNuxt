import { ref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { d as defineStore } from "../server.mjs";
const useLoadingStore = defineStore("loadingStore", () => {
  const isShow = ref(false);
  const setLoadingShow = (b) => {
    isShow.value = b;
  };
  return { setLoadingShow, isShow };
});
export {
  useLoadingStore as u
};
//# sourceMappingURL=loadingStore-df149339.js.map
