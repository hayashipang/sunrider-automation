// 模擬數據庫 - 在實際部署時可以替換為真實數據庫
export interface ContentItem {
  id: string
  type: 'hero' | 'service' | 'solution' | 'about' | 'contact'
  section: string
  title?: string
  subtitle?: string
  description?: string
  content?: string
  imageUrl?: string
  order: number
  isActive: boolean
  updatedAt: string
}

export interface Product {
  id: string
  name: string
  category: 'AOI' | 'AI' | 'Robotics' | 'Software'
  description: string
  features: string[]
  benefits: string[]
  applications: string[]
  imageUrl?: string
  status: 'active' | 'draft'
  views: number
  createdAt: string
  updatedAt: string
}

export interface Image {
  id: string
  name: string
  url: string
  alt: string
  category: string
  size: string
  dimensions: string
  uploadedAt: string
  usedIn: string[]
}

// 模擬數據存儲
let contentData: ContentItem[] = [
  {
    id: 'hero-1',
    type: 'hero',
    section: 'main-title',
    title: '釋放自動化的無限潛能',
    subtitle: '專業的 AOI、AI、機器手臂、軟體整合服務',
    description: '為您的企業提供完整的自動化解決方案',
    order: 1,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'hero-2',
    type: 'hero',
    section: 'subtitle',
    title: '為您的企業提供完整的自動化解決方案',
    order: 2,
    isActive: true,
    updatedAt: new Date().toISOString()
  }
]

let productsData: Product[] = [
  {
    id: '1',
    name: 'AOI 視覺檢測',
    category: 'AOI',
    description: '高精度自動光學檢測系統，提供快速、準確的產品品質檢測解決方案',
    features: ['高解析度影像處理', 'AI 智能缺陷識別', '即時檢測報告', '客製化檢測流程'],
    benefits: ['提升檢測準確率至 99.9%', '檢測速度提升 300%', '降低人工檢測成本 80%', '24/7 不間斷自動檢測'],
    applications: ['電子元件檢測', 'PCB 板品質控制', '機械零件尺寸測量', '包裝完整性檢查'],
    status: 'active',
    views: 156,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  }
]

let imagesData: Image[] = []

// API 函數
export const getContent = (type?: string, section?: string): ContentItem[] => {
  let filtered = contentData
  if (type) filtered = filtered.filter(item => item.type === type)
  if (section) filtered = filtered.filter(item => item.section === section)
  return filtered.sort((a, b) => a.order - b.order)
}

export const updateContent = (id: string, updates: Partial<ContentItem>): ContentItem | null => {
  const index = contentData.findIndex(item => item.id === id)
  if (index === -1) return null
  
  contentData[index] = {
    ...contentData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return contentData[index]
}

export const getProducts = (): Product[] => {
  return productsData
}

export const updateProduct = (id: string, updates: Partial<Product>): Product | null => {
  const index = productsData.findIndex(product => product.id === id)
  if (index === -1) return null
  
  productsData[index] = {
    ...productsData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return productsData[index]
}

export const getImages = (): Image[] => {
  return imagesData
}

export const addImage = (image: Omit<Image, 'id' | 'uploadedAt'>): Image => {
  const newImage: Image = {
    ...image,
    id: Date.now().toString(),
    uploadedAt: new Date().toISOString()
  }
  imagesData.push(newImage)
  return newImage
}

export const deleteImage = (id: string): boolean => {
  const index = imagesData.findIndex(image => image.id === id)
  if (index === -1) return false
  imagesData.splice(index, 1)
  return true
}
