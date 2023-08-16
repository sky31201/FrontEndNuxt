# 專案說明

| 頁面         | 名稱     | 負責人 |
|--------------|-----------|-----------|
| overseas | 海外投資      | 圖文不符 |
| margindeposit      | 保證金出入金  | 凱基 |

---

## 環境安裝
## Node.js: node-v18
- `\\nfs01\00504Public\數位服務組\文件\凱基專區\_新系統架構\測試環境安裝\node-v18.16.1-x64.msi`
---

## Tailwind CSS安裝
```bash
# 使用cmd cd 到專案目錄, 新增引用套件到專案
npm install -D tailwindcss postcss autoprefixer
# 新增tailwind.config.js設定檔
npx tailwindcss init
# 開啟tailwind.config.js檔案並貼上下面程式碼
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
# 新增assets資料夾, 在此資料夾下在新增css資料夾,在css資料夾新增main.css檔案(/asset/css/main.css)
@tailwind base;
@tailwind components;
@tailwind utilities;
# 修改nuxt.config.ts檔案並貼上下面程式碼
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```
---

## daisyui安裝
```bash
npm i -D daisyui@latest
# tailwind.config.js 中的plugins新增daisyui
plugins: [require('daisyui')],
```
---

## Pinia安裝
```bash
# 新增pinia套件
npm install pinia @pinia/nuxt
# 如果遇到 ERESOLVE unable to resolve dependency tree 錯誤,在package.json 中新增下面程式碼
"overrides": { 
  "vue": "latest"
}
# 在 nuxt.config.js 檔案的 modules 中新增
// nuxt.config.js
export default defineNuxtConfig({
  // ... 其他組態
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
# 設定自定導入
pinia: {
  autoImports: [
    // automatically imports `defineStore`
    'defineStore', // import { defineStore } from 'pinia'
    'storeToRefs'
  ],
},
```
---

## 安裝pinia-plugin-persistedstate
### 教學: https://dev.to/abbazs/a-nuxt-pinia-persisted-storage-click-counter-app-2bn1
```bash
# 新增pinia-persistedstate套件
npm i -D @pinia-plugin-persistedstate/nuxt
# 將模組新增到 Nuxt 組態中 (nuxt.config.ts)
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
})
# 使用
import { defineStore } from 'pinia'
import {ref} from "vue";

export const useAuthStore = defineStore('user', () => {
  const token = ref()
  return { token }}, 
  {
    persist: {
      storage: persistedState.localStorage,
    }
  })
```
---

## 安裝Cypress
### 教學: https://codybontecou.com/lets-setup-nuxt-3-with-cypress.html
```bash
# 安裝Cypress套件
npm install cypress --save-dev
# 開啟Cypress
npx cypress open | npm run cypress:open
# 使用介面執行全部測試

```

## 初始化專案
```bash
# 新增專案(第一次會用到可以跳過)
npx nuxi create 專案名稱
- 使用cmd cd 到專案目錄
# npm 初始化專案
npm install
# npm 執行專案
npm run dev
# npm 發佈
npm run generate
# 預執行發佈後的程式
npm run preview
```

# 目錄說明
```bash
# 自動生成的目錄，用於展示結果
.nuxt
# 項目依賴包存放目錄
node_modules
# 專案預設載入檔案
app.vue
# 設定Nuxt
nuxt.config.ts
# 鎖定安裝時包的版本，以保證其他人在 npm install時和你保持一致
package-lock.json
# 依賴項目組態檔案和項目的啟動調式命令組態
package.json
#　項目的說明檔案
README.md
# TypeScript的設定檔案
tsconfig.json
# 頁面
pages
# 放置所有Vue组件的地方
components
# 該目錄通常包含以下類型的文件:Stylesheets (CSS, SASS, etc.) Fonts Images 
assets
# 項目模版
layouts
# 可以在整個應用程式中使用，非常適合在導航到特定路由之前提取想要運行的程式碼
middleware
# 包含必須保留其名稱的公共檔案(例如：robots.txt)或可能不會更改(例如:favicon.ico)
Public
# TypeScript 類型定義
models
# Pinia State處理邏輯
stores
# Nitro處理後端(測試用,實際會使用.NET)
server
```
---

### nodeJs18-憑證參考
### https://www.storyblok.com/faq/setup-dev-server-https-windows
---

### Nuxt3 網站
### https://nuxt.com/docs/getting-started/introduction
---

### Json To TypeScript
### https://transform.tools/json-to-typescript
--- 

### IIS設定反向代理
### https://blog.alanwei.com/blog/2021/04/11/iis-reverse-proxy/
### https://www.cnblogs.com/cench/p/6417180.html
### https://blog.csdn.net/liuyouxian/article/details/110791645?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-110791645-blog-94613124.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-110791645-blog-94613124.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2
### https://maomin.blog.csdn.net/article/details/121322240?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-121322240-blog-94613124.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-121322240-blog-94613124.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=4&ydreferer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNDM4NDU1Ny9hcnRpY2xlL2RldGFpbHMvOTQ2MTMxMjQ%3D
### https://juejin.cn/post/7030397725334044703

--- 
### vue3datepicker.
# https://vue3datepicker.com/