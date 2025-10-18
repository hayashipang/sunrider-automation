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

export interface ContactInfo {
  id: string
  type: 'email' | 'phone' | 'address' | 'hours'
  label: string
  value: string
  description?: string
  isActive: boolean
  updatedAt: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  expertise: string
  experience: string
  imageUrl?: string
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  href: string
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export interface Solution {
  id: string
  title: string
  description: string
  benefits: string[]
  imageUrl?: string
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
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
  },
  {
    id: 'hero-3',
    type: 'hero',
    section: 'hero-title',
    title: '釋放自動化',
    order: 3,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'hero-4',
    type: 'hero',
    section: 'hero-subtitle',
    title: '的無限潛能',
    order: 4,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'hero-5',
    type: 'hero',
    section: 'hero-description',
    content: '專業的 AOI、AI、機器手臂、軟體整合服務\n為您的企業提供完整的自動化解決方案',
    order: 5,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  // 關於我們內容
  {
    id: 'about-1',
    type: 'about',
    section: 'company-story',
    title: '我們的故事',
    content: '由具多年自動化整合與現場實務經驗的專業團隊所組成，向陽自動化致力於為客戶量身打造高效、穩定的自動化解決方案。我們深知每個製程環節都有其獨特挑戰，因此從需求分析、系統設計到現場導入，皆以精準思維與嚴謹態度協助客戶優化生產流程，提升整體產能效率與作業安全性。',
    order: 1,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'about-2',
    type: 'about',
    section: 'company-story-2',
    content: '向陽的服務足跡橫跨半導體、面板、電子產業、傳統製造等多元產業，並持續拓展 AI 視覺檢測與智慧控制等新興應用領域。我們不侷限於既有框架，而是以技術為核心、以實務為導向，積極探索自動化在未來製造中的更多可能性。',
    order: 2,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'about-3',
    type: 'about',
    section: 'mission',
    title: '我們的使命',
    content: '以精準思維與嚴謹態度，為客戶量身打造高效、穩定的自動化解決方案。從需求分析到現場導入，我們致力於優化每個製程環節，提升整體產能效率與作業安全性，成為客戶最信賴的技術合作夥伴。',
    order: 3,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'about-4',
    type: 'about',
    section: 'vision',
    title: '我們的願景',
    content: '以技術為核心、以實務為導向，積極探索自動化在未來製造中的更多可能性。我們不侷限於既有框架，持續拓展 AI 視覺檢測與智慧控制等新興應用領域，推動製造業的智能化升級。',
    order: 4,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  // 聯絡我們內容
  {
    id: 'contact-1',
    type: 'contact',
    section: 'hero-title',
    title: '聯絡我們',
    subtitle: '向陽自動化 - 專業的自動化整合公司，致力於為企業提供最優質的智能化解決方案',
    order: 1,
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'contact-2',
    type: 'contact',
    section: 'description',
    content: '我們期待與您合作，為您的企業提供最優質的自動化解決方案。請隨時與我們聯絡，我們將在 24 小時內回覆您的訊息。',
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

let contactInfoData: ContactInfo[] = [
  {
    id: 'email-1',
    type: 'email',
    label: '電子郵件',
    value: 'contact@sunrider-automation.com',
    description: '我們會在 24 小時內回覆',
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'phone-1',
    type: 'phone',
    label: '電話',
    value: '+886-2-1234-5678',
    description: '週一至週五 9:00-18:00',
    isActive: true,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'address-1',
    type: 'address',
    label: '地址',
    value: '台北市信義區信義路五段7號',
    description: '歡迎預約參觀',
    isActive: true,
    updatedAt: new Date().toISOString()
  }
]

let teamMembersData: TeamMember[] = [
  {
    id: 'team-1',
    name: '技術總監',
    position: '自動化整合專家',
    expertise: '半導體設備整合、AOI 視覺檢測',
    experience: '15 年現場實務經驗',
    isActive: true,
    order: 1,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'team-2',
    name: '專案經理',
    position: '系統整合專家',
    expertise: '面板產業自動化、專案管理',
    experience: '12 年產業經驗',
    isActive: true,
    order: 2,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'team-3',
    name: 'AI 研發主管',
    position: '智能檢測專家',
    expertise: 'AI 視覺檢測、智慧控制',
    experience: '10 年研發經驗',
    isActive: true,
    order: 3,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'team-4',
    name: '軟體開發主管',
    position: '系統開發專家',
    expertise: '製造執行系統、數據分析',
    experience: '8 年開發經驗',
    isActive: true,
    order: 4,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  }
]

let servicesData: Service[] = [
  {
    id: 'service-1',
    title: 'AOI 視覺檢測',
    description: '高精度自動光學檢測系統，提供快速、準確的產品品質檢測解決方案',
    features: ['高解析度影像處理', 'AI 智能缺陷識別', '即時檢測報告', '客製化檢測流程'],
    icon: 'Eye',
    href: '/products/aoi',
    isActive: true,
    order: 1,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'service-2',
    title: 'AI 智能分析',
    description: '深度學習與機器學習技術，為您的數據提供智能分析與預測',
    features: ['深度學習模型', '預測性維護', '數據挖掘分析', '智能決策支援'],
    icon: 'Brain',
    href: '/products/ai',
    isActive: true,
    order: 2,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'service-3',
    title: '機器手臂整合',
    description: '工業機器人系統整合，實現自動化生產與精準操作',
    features: ['多軸協調控制', '視覺引導系統', '安全防護機制', '遠程監控管理'],
    icon: 'Bot',
    href: '/products/robotics',
    isActive: true,
    order: 3,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'service-4',
    title: '軟體開發',
    description: '客製化軟體解決方案，整合各項自動化設備與系統',
    features: ['系統整合開發', '人機介面設計', '數據庫管理', '雲端服務部署'],
    icon: 'Code',
    href: '/products/software',
    isActive: true,
    order: 4,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  }
]

let solutionsData: Solution[] = [
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
    isActive: true,
    order: 3,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  }
]

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

export const getContactInfo = (): ContactInfo[] => {
  return contactInfoData.filter(info => info.isActive)
}

export const updateContactInfo = (id: string, updates: Partial<ContactInfo>): ContactInfo | null => {
  const index = contactInfoData.findIndex(info => info.id === id)
  if (index === -1) return null
  
  console.log('Before update:', contactInfoData[index]) // 調試日誌
  console.log('Updates to apply:', updates) // 調試日誌
  
  contactInfoData[index] = {
    ...contactInfoData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  
  console.log('After update:', contactInfoData[index]) // 調試日誌
  
  return contactInfoData[index]
}

export const getTeamMembers = (): TeamMember[] => {
  return teamMembersData.filter(member => member.isActive).sort((a, b) => a.order - b.order)
}

export const updateTeamMember = (id: string, updates: Partial<TeamMember>): TeamMember | null => {
  const index = teamMembersData.findIndex(member => member.id === id)
  if (index === -1) return null
  
  teamMembersData[index] = {
    ...teamMembersData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return teamMembersData[index]
}

export const addTeamMember = (member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): TeamMember => {
  const newMember: TeamMember = {
    ...member,
    id: `team-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  teamMembersData.push(newMember)
  return newMember
}

export const deleteTeamMember = (id: string): boolean => {
  const index = teamMembersData.findIndex(member => member.id === id)
  if (index === -1) return false
  teamMembersData.splice(index, 1)
  return true
}

export const getServices = (): Service[] => {
  return servicesData.filter(service => service.isActive).sort((a, b) => a.order - b.order)
}

export const updateService = (id: string, updates: Partial<Service>): Service | null => {
  const index = servicesData.findIndex(service => service.id === id)
  if (index === -1) return null
  
  servicesData[index] = {
    ...servicesData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return servicesData[index]
}

export const addService = (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>): Service => {
  const newService: Service = {
    ...service,
    id: `service-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  servicesData.push(newService)
  return newService
}

export const deleteService = (id: string): boolean => {
  const index = servicesData.findIndex(service => service.id === id)
  if (index === -1) return false
  servicesData.splice(index, 1)
  return true
}

export const getSolutions = (): Solution[] => {
  return solutionsData.filter(solution => solution.isActive).sort((a, b) => a.order - b.order)
}

export const updateSolution = (id: string, updates: Partial<Solution>): Solution | null => {
  const index = solutionsData.findIndex(solution => solution.id === id)
  if (index === -1) return null
  
  solutionsData[index] = {
    ...solutionsData[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  return solutionsData[index]
}

export const addSolution = (solution: Omit<Solution, 'id' | 'createdAt' | 'updatedAt'>): Solution => {
  const newSolution: Solution = {
    ...solution,
    id: `solution-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  solutionsData.push(newSolution)
  return newSolution
}

export const deleteSolution = (id: string): boolean => {
  const index = solutionsData.findIndex(solution => solution.id === id)
  if (index === -1) return false
  solutionsData.splice(index, 1)
  return true
}
