'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Edit3, Home, Zap, Target, Users } from 'lucide-react'
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
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchContent()
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
      </div>
    </div>
  )
}
