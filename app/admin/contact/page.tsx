'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Edit3, Mail, Phone, MapPin, Clock } from 'lucide-react'

interface ContactInfo {
  id: string
  type: 'email' | 'phone' | 'address' | 'hours'
  label: string
  value: string
  description?: string
  isActive: boolean
  updatedAt: string
}

interface ContentItem {
  id: string
  type: string
  section: string
  title?: string
  subtitle?: string
  description?: string
  content?: string
  order: number
  isActive: boolean
  updatedAt: string
}

const contactIcons = {
  email: Mail,
  phone: Phone,
  address: MapPin,
  hours: Clock
}

export default function ContactManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [content, setContent] = useState<ContentItem[]>([])
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])
  const [editingItem, setEditingItem] = useState<ContactInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchContent()
      fetchContactInfo()
    }
  }, [router])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?type=contact')
      const result = await response.json()
      if (result.success) {
        setContent(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
    }
  }

  const fetchContactInfo = async () => {
    try {
      // 從數據庫獲取聯絡資訊
      const response = await fetch('/api/contact-info')
      const result = await response.json()
      if (result.success) {
        // 轉換為管理頁面需要的格式
        const contactData = [
          {
            id: 'email-1',
            type: 'email' as const,
            label: '電子郵件',
            value: result.data.email,
            description: result.data.emailDesc,
            isActive: true,
            updatedAt: new Date().toISOString()
          },
          {
            id: 'phone-1',
            type: 'phone' as const,
            label: '電話',
            value: result.data.phone,
            description: result.data.phoneDesc,
            isActive: true,
            updatedAt: new Date().toISOString()
          },
          {
            id: 'address-1',
            type: 'address' as const,
            label: '地址',
            value: result.data.address,
            description: result.data.addressDesc,
            isActive: true,
            updatedAt: new Date().toISOString()
          }
        ]
        setContactInfo(contactData)
      }
    } catch (error) {
      console.error('Failed to fetch contact info:', error)
    }
  }

  const handleSaveContact = async () => {
    if (!editingItem) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingItem),
      })
      
      const result = await response.json()
      if (result.success) {
        setContactInfo(contactInfo.map(item => 
          item.id === editingItem.id ? editingItem : item
        ))
        setEditingItem(null)
        alert('聯絡資訊已更新！')
        // 重新獲取聯絡資訊以確保同步
        fetchContactInfo()
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveContent = async (item: ContentItem) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      
      const result = await response.json()
      if (result.success) {
        setContent(content.map(c => 
          c.id === item.id ? item : c
        ))
        alert('內容已更新！')
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-white">載入中...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="bg-dark-800 border-b border-dark-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="text-xl font-bold gradient-text">聯絡我們管理</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">聯絡資訊</h2>
            
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const IconComponent = contactIcons[item.type]
                return (
                  <div key={item.id} className="border border-dark-600 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className="w-5 h-5 text-primary-400" />
                      <h3 className="font-medium text-white">{item.label}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.isActive ? '啟用' : '停用'}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-1">{item.value}</p>
                    {item.description && (
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    )}
                    
                    <div className="flex items-center space-x-2 mt-3">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>編輯</span>
                      </button>
                      <span className="text-gray-500 text-xs">
                        更新於 {new Date(item.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Page Content */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">頁面內容</h2>
            
            <div className="space-y-4">
              {content.map((item) => (
                <div key={item.id} className="border border-dark-600 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2">
                    {item.section === 'hero-title' ? '頁面標題' : '頁面描述'}
                  </h3>
                  
                  {item.title && (
                    <div className="mb-2">
                      <label className="block text-sm text-gray-400 mb-1">標題</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = {...item, title: e.target.value}
                          setContent(content.map(c => c.id === item.id ? updated : c))
                        }}
                        className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  )}
                  
                  {item.subtitle && (
                    <div className="mb-2">
                      <label className="block text-sm text-gray-400 mb-1">副標題</label>
                      <input
                        type="text"
                        value={item.subtitle}
                        onChange={(e) => {
                          const updated = {...item, subtitle: e.target.value}
                          setContent(content.map(c => c.id === item.id ? updated : c))
                        }}
                        className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  )}
                  
                  {item.content && (
                    <div className="mb-2">
                      <label className="block text-sm text-gray-400 mb-1">內容</label>
                      <textarea
                        rows={3}
                        value={item.content}
                        onChange={(e) => {
                          const updated = {...item, content: e.target.value}
                          setContent(content.map(c => c.id === item.id ? updated : c))
                        }}
                        className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm focus:outline-none focus:border-primary-500 resize-none"
                      />
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleSaveContent(item)}
                    disabled={isLoading}
                    className="btn-primary text-sm px-3 py-1 disabled:opacity-50"
                  >
                    {isLoading ? '儲存中...' : '儲存'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Editor Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-bold text-white mb-6">編輯聯絡資訊</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    標籤
                  </label>
                  <input
                    type="text"
                    value={editingItem.label}
                    onChange={(e) => setEditingItem({...editingItem, label: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    內容
                  </label>
                  <input
                    type="text"
                    value={editingItem.value}
                    onChange={(e) => setEditingItem({...editingItem, value: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    描述
                  </label>
                  <input
                    type="text"
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
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
                    <span className="text-gray-300">啟用此資訊</span>
                  </label>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    onClick={() => setEditingItem(null)}
                    className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleSaveContact}
                    disabled={isLoading}
                    className="btn-primary disabled:opacity-50"
                  >
                    {isLoading ? '儲存中...' : '儲存變更'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
