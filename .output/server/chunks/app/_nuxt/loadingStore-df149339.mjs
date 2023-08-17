import { ref } from 'vue';
import { d as defineStore } from '../server.mjs';

const useLoadingStore = defineStore("loadingStore", () => {
  const isShow = ref(false);
  const setLoadingShow = (b) => {
    isShow.value = b;
  };
  return { setLoadingShow, isShow };
});

export { useLoadingStore as u };
//# sourceMappingURL=loadingStore-df149339.mjs.map
