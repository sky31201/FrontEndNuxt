<template>
  <div class=" bg-[#151F28] lg:bg-white">
    <div class="drop relative">
      <div
        class="dropOption bg-slate-800 lg:bg-slate-300 w-full rounded"
        @click="dropOptionClick"
      >
        <div class="flex bg-slate-800 lg:bg-slate-300 text-white lg:text-black h-[38px] lg:font-bold
        rounded items-center">
          <div
            class="border border-slate-600 text-slate-600p-1 rounded text-sm lg:text-lg"
          >
            {{ accountData.title }}
          </div>
          <div class="text-sm pl-1">{{ accountData.info }}</div>
        </div>
      </div>
      <ul class="dropdown bg-slate-800 lg:bg-slate-300 w-full" v-show="isShowUl">
        <li
          class="text-gray-400"
          @click="liClick(index)"
          v-for="(item, index) in accountList"
        >
          <div
            class="flex bg-slate-800 lg:bg-slate-300 text-white lg:text-black h-[38px] rounded items-center "
          >
            <div
              class="border border-slate-600 text-slate-600 text-sm p-1 rounded"
            >
              {{ item.title }}
            </div>
            <div class="text-sm pl-1">{{ item.info }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAccountListStore } from '@/stores/accountListStore';
const { queryAccountList, setAccountData } = useAccountListStore()
const { accountList, accountData } = storeToRefs(useAccountListStore())

queryAccountList()
const isShowUl = ref(false)

const dropOptionClick = () => {
  isShowUl.value = !isShowUl.value
}
/**
 * 設置選取的期貨帳戶
 * @param index 選取的索引值
 */
const liClick = (index: number) => {
  setAccountData(accountList.value![index])
  dropOptionClick()
}
onMounted(() => {
  accountData.value = accountList.value![0]
})
</script>

<style scoped>
p {
  font-size: 24px;
  font-weight: bold;
}

.drop {
  display: block;
}
.drop .dropOption {
  position: relative;
  color: #666;
  font-size: 20px;
  padding: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.drop .dropOption::after {
  content: '';
  position: absolute;
  justify-items: center;
  top: 16px;
  right: 12px;
  border-width: 8px 6px;
  border-style: solid;
  border-color: #999 transparent transparent transparent;
}
.drop .dropdown {
  max-height: 350px;
  position: absolute;
  color: #333;
  padding: 0;
  margin: 0;
  box-shadow: 0px 2px 3px 0px #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  overflow: auto;
  z-index: 10;
}
.drop .dropdown > li {
  display: block;
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
}
.drop .dropdown > li:first-child {
  display: block;
}
.drop .dropdown > li:last-child {
  margin-bottom: 10px;
}
.drop .dropdown > li:hover {
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  border-radius: 6px;
}
.drop .dropdown::-webkit-scrollbar {
  width: 15px;
}
.drop .dropdown::-webkit-scrollbar-track {
  border-radius: 6px;
}
.drop .dropdown::-webkit-scrollbar-thumb {
  border-radius: 15px;
}
/* .drop .dropdown::-webkit-scrollbar-button {
  
} */
</style>
