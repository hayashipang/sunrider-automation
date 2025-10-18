# Sunrider Automation 公司網站

一個現代化的自動化整合公司網站，採用黑底 UI 設計風格，參考 Landing AI 的設計理念。

## 功能特色

### 前端展示
- 🎨 現代化黑底 UI 設計
- 📱 響應式設計，支援各種裝置
- ⚡ 流暢的動畫效果
- 🔍 產品服務展示
- 📊 解決方案介紹
- 📞 聯絡資訊

### 後台管理
- 🔐 管理員登入系統
- 📦 產品管理 (新增、編輯、刪除)
- 🖼️ 圖片管理 (上傳、分類、批量操作)
- 📈 數據統計儀表板
- 👥 用戶管理
- ⚙️ 系統設定

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **部署**: Vercel

## 專案結構

```
sunrider-webpage/
├── app/                    # Next.js App Router
│   ├── admin/             # 後台管理系統
│   │   ├── login/         # 管理員登入
│   │   ├── dashboard/     # 儀表板
│   │   ├── products/      # 產品管理
│   │   └── images/        # 圖片管理
│   ├── products/          # 產品展示頁面
│   ├── globals.css        # 全域樣式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首頁
├── components/            # 可重用組件
│   ├── Navbar.tsx         # 導航欄
│   ├── Hero.tsx           # 首頁英雄區塊
│   ├── Services.tsx       # 服務展示
│   ├── Solutions.tsx      # 解決方案
│   └── Footer.tsx         # 頁腳
├── public/                # 靜態資源
└── 配置文件...
```

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

訪問 [http://localhost:3000](http://localhost:3000) 查看網站。

### 3. 管理員後台

訪問 [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**測試帳號:**
- Email: `admin@sunrider.com`
- Password: `admin123`

## 部署到 Vercel

### 1. 準備 Git 倉庫

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. 推送到 GitHub

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 3. 連接 Vercel

1. 訪問 [vercel.com](https://vercel.com)
2. 使用 GitHub 帳號登入
3. 點擊 "New Project"
4. 選擇你的 GitHub 倉庫
5. 點擊 "Deploy"

### 4. 環境變數 (可選)

如果需要，可以在 Vercel 專案設定中添加環境變數：

- `NEXT_PUBLIC_SITE_URL`: 網站 URL
- `ADMIN_EMAIL`: 管理員郵箱
- `ADMIN_PASSWORD`: 管理員密碼

## 自定義配置

### 修改公司資訊

編輯以下文件來更新公司資訊：

- `app/layout.tsx` - 網站標題和描述
- `components/Footer.tsx` - 聯絡資訊
- `components/Hero.tsx` - 首頁標語

### 修改產品服務

編輯 `app/products/page.tsx` 中的 `products` 數組來更新產品資訊。

### 自定義樣式

- 修改 `tailwind.config.js` 來調整顏色主題
- 編輯 `app/globals.css` 來添加自定義樣式

## 功能擴展

### 添加新頁面

1. 在 `app/` 目錄下創建新的路由文件
2. 使用現有的組件或創建新組件
3. 更新導航欄 (`components/Navbar.tsx`)

### 添加新的管理功能

1. 在 `app/admin/` 目錄下創建新的管理頁面
2. 更新側邊欄導航 (`app/admin/dashboard/page.tsx`)
3. 實現相應的功能邏輯

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

此專案僅供學習和參考使用。

## 聯絡資訊

如有問題或建議，請聯絡開發團隊。

---

**注意**: 這是一個演示專案，實際部署時請確保：
1. 更換管理員密碼
2. 配置適當的安全措施
3. 添加真實的產品和圖片內容
4. 設置適當的備份策略
