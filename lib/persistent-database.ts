// 在serverless環境中使用內存存儲
// 注意：在Vercel中，文件系統是只讀的，所以我們使用內存存儲
// 在實際生產環境中，應該使用數據庫如MongoDB、PostgreSQL等

// 內存存儲
let memorySolutions: any[] = []
let memoryImages: any[] = []
let isInitialized = false

// 初始化數據
const initializeData = () => {
  if (isInitialized) return
  
  memorySolutions = [
    {
      id: 'solution-1',
      title: '製造業自動化',
      description: '完整的生產線自動化解決方案，提升效率與品質',
      benefits: [
        '提升生產效率 40%',
        '降低人工成本 60%',
        '減少品質問題 80%',
        '24/7 不間斷生產'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center',
      isActive: true,
      order: 1,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    },
    {
      id: 'solution-2',
      title: '品質檢測系統',
      description: 'AI 驅動的視覺檢測系統，確保產品品質一致性',
      benefits: [
        '99.9% 檢測準確率',
        '毫秒級檢測速度',
        '多種缺陷類型識別',
        '即時品質報告'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
      isActive: true,
      order: 2,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    },
    {
      id: 'solution-3',
      title: '智能倉儲管理',
      description: '機器人與 AI 結合的智能倉儲解決方案',
      benefits: [
        '自動化貨物分揀',
        '智能路徑規劃',
        '庫存即時監控',
        '減少人為錯誤'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center',
      isActive: true,
      order: 3,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    }
  ]
  
  memoryImages = []
  isInitialized = true
}

// 讀取解決方案數據
export const loadSolutions = () => {
  initializeData()
  return memorySolutions
}

// 保存解決方案數據
export const saveSolutions = (solutions: any[]) => {
  memorySolutions = solutions
  return true
}

// 讀取圖片數據
export const loadImages = () => {
  initializeData()
  return memoryImages
}

// 保存圖片數據
export const saveImages = (images: any[]) => {
  memoryImages = images
  return true
}
