'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Edit3, Home, Zap, Target, Users, Plus, Trash2, Settings, Lightbulb, Upload, Image as ImageIcon } from 'lucide-react'
import RichTextEditor from '@/components/RichTextEditor'

interface ContentItem {
  id: string
  type: string
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

interface Service {
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

interface Solution {
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

const sectionIcons = {
  'hero-title': Home,
  'hero-subtitle': Home,
  'hero-description': Home,
  'services-title': Zap,
  'services-description': Zap,
  'solutions-title': Target,
  'solutions-description': Target,
  'stats-title': Users,
  'stats-description': Users
}

export default function HomeManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [content, setContent] = useState<ContentItem[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [solutions, setSolutions] = useState<Solution[]>([])
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [editingSolution, setEditingSolution] = useState<Solution | null>(null)
  const [activeTab, setActiveTab] = useState<'content' | 'services' | 'solutions'>('content')
  const [isLoading, setIsLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchContent()
      fetchServices()
      fetchSolutions()
    }
  }, [router])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?type=hero')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result.success) {
        setContent(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
      setContent([])
    }
  }

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result.success) {
        setServices(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
      setServices([])
    }
  }

  const fetchSolutions = async () => {
    try {
      const response = await fetch('/api/solutions')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result.success) {
        setSolutions(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch solutions:', error)
      setSolutions([])
    }
  }

  const handleSave = async () => {
    if (!editingItem) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingItem),
      })
      
      const result = await response.json()
      if (result.success) {
        setContent(content.map(item => 
          item.id === editingItem.id ? editingItem : item
        ))
        setEditingItem(null)
        alert('內容已更新！')
        fetchContent()
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveService = async () => {
    if (!editingService) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingService),
      })
      
      const result = await response.json()
      if (result.success) {
        setServices(services.map(service => 
          service.id === editingService.id ? editingService : service
        ))
        setEditingService(null)
        alert('服務已更新！')
        fetchServices()
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSolution = async () => {
    if (!editingSolution) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/solutions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingSolution),
      })
      
      const result = await response.json()
      if (result.success) {
        setSolutions(solutions.map(solution => 
          solution.id === editingSolution.id ? editingSolution : solution
        ))
        setEditingSolution(null)
        alert('解決方案已更新！')
        fetchSolutions()
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    if (!editingSolution) return
    
    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append('image', file)
      formData.append('category', 'solutions')
      formData.append('usedIn', editingSolution.id)
      
      const response = await fetch('/api/images', {
        method: 'POST',
        body: formData,
      })
      
      const result = await response.json()
      if (result.success) {
        setEditingSolution({
          ...editingSolution,
          imageUrl: result.data.url
        })
        alert('圖片上傳成功！')
      } else {
        alert('圖片上傳失敗：' + result.error)
      }
    } catch (error) {
      alert('圖片上傳失敗，請稍後再試')
    } finally {
      setUploadingImage(false)
    }
  }

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      'hero-title': '首頁標題',
      'hero-subtitle': '首頁副標題',
      'hero-description': '首頁描述',
      'services-title': '服務區塊標題',
      'services-description': '服務區塊描述',
      'solutions-title': '解決方案標題',
      'solutions-description': '解決方案描述',
      'stats-title': '統計數據標題',
      'stats-description': '統計數據描述'
    }
    return titles[section] || section
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-white">載入中...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <header className="bg-dark-800 border-b border-dark-700">
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回儀表板</span>
              </button>
              <div className="h-6 w-px bg-dark-600" />
              <h1 className="text-2xl font-bold text-white">首頁內容管理</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <Eye className="w-5 h-5" />
                <span>預覽首頁</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-dark-800 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'content'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              首頁內容
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'services'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              服務管理
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'solutions'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              解決方案
            </button>
          </div>
        </div>

        {activeTab === 'content' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content List */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">首頁內容區塊</h2>
            
            <div className="space-y-4">
              {content.map((item) => {
                const IconComponent = sectionIcons[item.section as keyof typeof sectionIcons] || Edit3
                return (
                  <div
                    key={item.id}
                    className="border border-dark-600 rounded-lg p-4 hover:border-dark-500 transition-colors cursor-pointer"
                    onClick={() => setEditingItem(item)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-primary-400" />
                        <h3 className="font-medium text-white">
                          {getSectionTitle(item.section)}
                        </h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.isActive ? '啟用' : '停用'}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-1">
                      {item.title || item.subtitle || '無標題'}
                    </p>
                    <p className="text-gray-400 text-xs line-clamp-2">
                      {item.content || item.description || '無內容'}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Editor */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">編輯內容</h2>
            
            {editingItem ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    區塊名稱
                  </label>
                  <input
                    type="text"
                    value={getSectionTitle(editingItem.section)}
                    disabled
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    標題
                  </label>
                  <input
                    type="text"
                    value={editingItem.title || ''}
                    onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    副標題
                  </label>
                  <input
                    type="text"
                    value={editingItem.subtitle || ''}
                    onChange={(e) => setEditingItem({...editingItem, subtitle: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    內容
                  </label>
                  <RichTextEditor
                    value={editingItem.content || ''}
                    onChange={(value) => setEditingItem({...editingItem, content: value})}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingItem.isActive}
                      onChange={(e) => setEditingItem({...editingItem, isActive: e.target.checked})}
                      className="w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                    />
                    <span className="text-gray-300">啟用此內容</span>
                  </label>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isLoading ? '儲存中...' : '儲存變更'}</span>
                  </button>
                  
                  <button
                    onClick={() => setEditingItem(null)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Edit3 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">選擇左側的內容項目開始編輯</p>
              </div>
            )}
          </div>
        </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Services List */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">服務管理</h2>
              
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="border border-dark-600 rounded-lg p-4 hover:border-dark-500 transition-colors cursor-pointer"
                    onClick={() => setEditingService(service)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">{service.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {service.isActive ? '啟用' : '停用'}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                          +{service.features.length - 2} 更多
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Editor */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">編輯服務</h2>
              
              {editingService ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      服務標題
                    </label>
                    <input
                      type="text"
                      value={editingService.title}
                      onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      服務描述
                    </label>
                    <textarea
                      value={editingService.description}
                      onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      功能特色 (每行一個)
                    </label>
                    <textarea
                      value={editingService.features.join('\n')}
                      onChange={(e) => setEditingService({...editingService, features: e.target.value.split('\n').filter(f => f.trim())})}
                      rows={4}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      連結網址
                    </label>
                    <input
                      type="text"
                      value={editingService.href}
                      onChange={(e) => setEditingService({...editingService, href: e.target.value})}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingService.isActive}
                        onChange={(e) => setEditingService({...editingService, isActive: e.target.checked})}
                        className="w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-gray-300">啟用此服務</span>
                    </label>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSaveService}
                      disabled={isLoading}
                      className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isLoading ? '儲存中...' : '儲存變更'}</span>
                    </button>
                    
                    <button
                      onClick={() => setEditingService(null)}
                      className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Settings className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">選擇左側的服務開始編輯</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Solutions List */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">解決方案管理</h2>
              
              <div className="space-y-4">
                {solutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="border border-dark-600 rounded-lg p-4 hover:border-dark-500 transition-colors cursor-pointer"
                    onClick={() => setEditingSolution(solution)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* 圖片預覽 */}
                      <div className="flex-shrink-0">
                        {solution.imageUrl ? (
                          <img
                            src={solution.imageUrl}
                            alt={solution.title}
                            className="w-16 h-16 object-cover rounded-lg border border-dark-600"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-dark-700 border border-dark-600 rounded-lg flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-gray-500" />
                          </div>
                        )}
                      </div>
                      
                      {/* 內容 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white truncate">{solution.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs flex-shrink-0 ${
                            solution.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {solution.isActive ? '啟用' : '停用'}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{solution.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {solution.benefits.slice(0, 2).map((benefit, index) => (
                            <span key={index} className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                              {benefit}
                            </span>
                          ))}
                          {solution.benefits.length > 2 && (
                            <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                              +{solution.benefits.length - 2} 更多
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Editor */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">編輯解決方案</h2>
              
              {editingSolution ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      解決方案標題
                    </label>
                    <input
                      type="text"
                      value={editingSolution.title}
                      onChange={(e) => setEditingSolution({...editingSolution, title: e.target.value})}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      解決方案描述
                    </label>
                    <textarea
                      value={editingSolution.description}
                      onChange={(e) => setEditingSolution({...editingSolution, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      效益優勢 (每行一個)
                    </label>
                    <textarea
                      value={editingSolution.benefits.join('\n')}
                      onChange={(e) => setEditingSolution({...editingSolution, benefits: e.target.value.split('\n').filter(b => b.trim())})}
                      rows={4}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      解決方案圖片
                    </label>
                    
                    {/* 圖片預覽 */}
                    {editingSolution.imageUrl && (
                      <div className="mb-4">
                        <img
                          src={editingSolution.imageUrl}
                          alt={editingSolution.title}
                          className="w-full h-48 object-cover rounded-lg border border-dark-600"
                        />
                      </div>
                    )}
                    
                    {/* 圖片上傳 */}
                    <div className="border-2 border-dashed border-dark-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            handleImageUpload(file)
                          }
                        }}
                        className="hidden"
                        id="solution-image-upload"
                        disabled={uploadingImage}
                      />
                      <label
                        htmlFor="solution-image-upload"
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        {uploadingImage ? (
                          <>
                            <div className="w-8 h-8 border-2 border-primary-400 border-t-transparent rounded-full animate-spin" />
                            <span className="text-gray-300">上傳中...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-8 h-8 text-gray-400" />
                            <span className="text-gray-300">
                              {editingSolution.imageUrl ? '更換圖片' : '上傳圖片'}
                            </span>
                            <span className="text-gray-500 text-sm">支援 JPG, PNG, GIF 格式</span>
                          </>
                        )}
                      </label>
                    </div>
                    
                    {/* 移除圖片按鈕 */}
                    {editingSolution.imageUrl && (
                      <button
                        onClick={() => setEditingSolution({...editingSolution, imageUrl: undefined})}
                        className="mt-2 px-3 py-1 text-red-400 hover:text-red-300 text-sm transition-colors"
                      >
                        移除圖片
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingSolution.isActive}
                        onChange={(e) => setEditingSolution({...editingSolution, isActive: e.target.checked})}
                        className="w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-gray-300">啟用此解決方案</span>
                    </label>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSaveSolution}
                      disabled={isLoading}
                      className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isLoading ? '儲存中...' : '儲存變更'}</span>
                    </button>
                    
                    <button
                      onClick={() => setEditingSolution(null)}
                      className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Lightbulb className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">選擇左側的解決方案開始編輯</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
