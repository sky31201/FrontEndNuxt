module.exports = {
  apps: [
    {
      name: 'NuxtWebSite',
      exec_mode: 'cluster',
      instances: "2",
      watch: true,
      max_memory_restart: "1G",
      script: './server/index.mjs',
      ignore_watch: ["node_modules", "logs"], // 不用監聽的檔案
      autorestart: true, // 默認為 true, 發生異常的情況下自動重啟
      merge_logs: true, // 設定追加日誌而不是新建日誌
      error_file: './logs/app-err.log', // 錯誤記錄檔
      out_file: './logs/app-out.log', // 正常記錄檔
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定記錄檔的時間格式
      env: {
        // 環境參數，當前指定為開發環境
        NODE_ENV: "development",
        NUXT_PUBLIC_API_BASE: "https://mixtradetest.kgi.com.tw/ServiceWebApi",
        NUXT_PUBLIC_API_RPOXY: "https://mixtradetest.kgi.com.tw",
        NUXT_PUBLIC_ENV: "DEV",
        PORT: "5050",
      },
    }
  ]
}