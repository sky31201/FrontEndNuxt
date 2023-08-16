# 專案說明

| 頁面         | 名稱     | 負責人 |
|--------------|-----------|-----------|
| overseas | 海外投資      | 圖文不符 |

---



## 環境安裝: node-v18 
---

## 初始化專案
```bash
# npm 初始化專案
npm install or npm i
# npm 執行專案
npm run dev
# npm 發佈
npm run generate
# 預執行發佈後的程式
npm run preview
```

## 目錄說明
```bash
# 專案預設載入檔案
app.vue
# Nuxt相關設定
nuxt.config.ts
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
# 專案共用方法
utils
# TypeScript 類型定義
models
# Pinia State處理邏輯
stores
# Nitro處理後端(測試用,實際會使用.NET)
server
```
---

## 開發說明
1. ### 專案已安裝**Tailwind CSS、Pinia、daisyUI**
2. ### **不要使用Props**，請使用**Pinia** **Pinia** **Pinia**(很重要)，請參考stores目錄
3. ### 請將海外債功能整合在**pages\overseas**資料夾
4. ### 基本上pages只會有主功能，詳細功能會拆分在components，請參考目前的**components\overseas**
5. ### 請保持**一個components**盡量不要超過**200行**
6. ### **CSS 請使用Tailwind CSS或daisyUI**，真的有需特別客制的需求在額外寫CSS於各components中
7. ### 請使用**TypeScript**