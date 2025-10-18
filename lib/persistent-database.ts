import fs from 'fs'
import path from 'path'

// 數據文件路徑
const DATA_DIR = path.join(process.cwd(), 'data')
const SOLUTIONS_FILE = path.join(DATA_DIR, 'solutions.json')
const IMAGES_FILE = path.join(DATA_DIR, 'images.json')

// 確保數據目錄存在
const ensureDataDir = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// 讀取解決方案數據
export const loadSolutions = () => {
  try {
    ensureDataDir()
    if (fs.existsSync(SOLUTIONS_FILE)) {
      const data = fs.readFileSync(SOLUTIONS_FILE, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading solutions:', error)
  }
  
  // 返回默認數據
  return [
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
}

// 保存解決方案數據
export const saveSolutions = (solutions: any[]) => {
  try {
    ensureDataDir()
    fs.writeFileSync(SOLUTIONS_FILE, JSON.stringify(solutions, null, 2))
    return true
  } catch (error) {
    console.error('Error saving solutions:', error)
    return false
  }
}

// 讀取圖片數據
export const loadImages = () => {
  try {
    ensureDataDir()
    if (fs.existsSync(IMAGES_FILE)) {
      const data = fs.readFileSync(IMAGES_FILE, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading images:', error)
  }
  
  return []
}

// 保存圖片數據
export const saveImages = (images: any[]) => {
  try {
    ensureDataDir()
    fs.writeFileSync(IMAGES_FILE, JSON.stringify(images, null, 2))
    return true
  } catch (error) {
    console.error('Error saving images:', error)
    return false
  }
}
