[English](./README.md) | [繁體中文](./README.zh-TW.md)

# QR Code Generator：從 0 到百萬請求示範專案

這是一個以 Hono 與 TypeScript 建立的後端示範服務，用來展示 QR Code 產生 API 如何從最小可行骨架，逐步演進成可承受高流量的服務。

目前這個版本重點放在服務骨架本身：包含 server 啟動、路由組織、健康檢查，以及 TypeScript 編譯流程。專案刻意維持精簡，方便後續持續擴充 QR 產生、資料儲存、驗證、觀測性等能力。

## 目前包含的能力

- 使用 Hono 建立 HTTP 服務
- 採用嚴格模式 TypeScript 設定
- 模組化路由設計
- `GET /health` 與 `GET /api/health` 健康檢查
- 本地開發與編譯腳本

## 目前尚未實作，但從依賴可看出預計擴充方向

- QR Code 產生 API
- 以 Zod 進行輸入驗證
- 以 Drizzle ORM + SQLite 做資料存取
- 更完整的測試、監控與部署文件

## 快速開始

### 安裝

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

服務預設啟動於：

```text
http://localhost:3001
```

### 驗證健康檢查

```bash
curl http://localhost:3001/health
curl http://localhost:3001/api/health
```

### 編譯

```bash
pnpm build
```

### 啟動編譯後版本

```bash
pnpm start
```

## 文件策略建議

如果要走企業級雙語文件，建議：

- `README.md` 保持英文主文件
- `README.zh-TW.md` 提供繁體中文版本
- 兩份文件頂部互相連結

這種方式比把完整中英文全部混在同一份 README 更好維護，也更適合後續擴充架構說明、部署流程與團隊開發規範。
