'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Edit3, Users, Target, Lightbulb, Plus, Trash2 } from 'lucide-react'
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

interface TeamMember {
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

const sectionIcons = {
  'company-story': Users,
  'company-story-2': Users,
  'mission': Target,
  'vision': Lightbulb,
  'team': Users,
  'values': Target
}

export default function AboutManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [content, setContent] = useState<ContentItem[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchContent()
      fetchTeamMembers()
    }
  }, [router])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?type=about')
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

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('/api/team')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result.success) {
        setTeamMembers(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch team members:', error)
      setTeamMembers([])
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
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveMember = async () => {
    if (!editingMember) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/team', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingMember),
      })
      
      const result = await response.json()
      if (result.success) {
        setTeamMembers(teamMembers.map(member => 
          member.id === editingMember.id ? editingMember : member
        ))
        setEditingMember(null)
        alert('團隊成員已更新！')
        fetchTeamMembers()
      } else {
        alert('更新失敗：' + result.error)
      }
    } catch (error) {
      alert('更新失敗，請稍後再試')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteMember = async (id: string) => {
    if (!confirm('確定要刪除這個團隊成員嗎？')) return
    
    try {
      const response = await fetch(`/api/team?id=${id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        setTeamMembers(teamMembers.filter(member => member.id !== id))
        alert('團隊成員已刪除')
      } else {
        alert('刪除失敗')
      }
    } catch (error) {
      alert('刪除失敗，請稍後再試')
    }
  }

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      'company-story': '公司故事 - 第一段',
      'company-story-2': '公司故事 - 第二段',
      'mission': '我們的使命',
      'vision': '我們的願景',
      'team': '專業團隊',
      'values': '核心價值'
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
              <h1 className="text-xl font-bold gradient-text">關於我們管理</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Content List */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">關於我們內容</h2>
            
            <div className="space-y-4">
              {content.map((item) => {
                const IconComponent = sectionIcons[item.section as keyof typeof sectionIcons] || Edit3
                return (
                  <div key={item.id} className="border border-dark-600 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className="w-5 h-5 text-primary-400" />
                      <h3 className="font-medium text-white">{getSectionTitle(item.section)}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.isActive ? '啟用' : '停用'}
                      </span>
                    </div>
                    
                    {item.title && (
                      <p className="text-gray-300 text-sm mb-2">{item.title}</p>
                    )}
                    
                    {item.content && (
                      <p className="text-gray-400 text-xs line-clamp-3" dangerouslySetInnerHTML={{ __html: item.content }} />
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

          {/* Team Management */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">專業團隊</h2>
              <button
                onClick={() => setShowAddMemberModal(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>新增成員</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="border border-dark-600 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">{member.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      member.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {member.isActive ? '啟用' : '停用'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-1">{member.position}</p>
                  <p className="text-gray-400 text-xs mb-2">{member.expertise}</p>
                  <p className="text-gray-500 text-xs">{member.experience}</p>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <button
                      onClick={() => setEditingMember(member)}
                      className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>編輯</span>
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>刪除</span>
                    </button>
                  </div>
                </div>
              ))}
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
                
                {editingItem.title !== undefined && (
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
                )}
                
                {editingItem.subtitle !== undefined && (
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
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    內容
                  </label>
                  <RichTextEditor
                    value={editingItem.content || ''}
                    onChange={(value) => setEditingItem({...editingItem, content: value})}
                    placeholder="輸入內容..."
                    className="min-h-[200px]"
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
            ) : editingMember ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    value={editingMember.name}
                    onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    職位
                  </label>
                  <input
                    type="text"
                    value={editingMember.position}
                    onChange={(e) => setEditingMember({...editingMember, position: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    專業領域
                  </label>
                  <input
                    type="text"
                    value={editingMember.expertise}
                    onChange={(e) => setEditingMember({...editingMember, expertise: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    經驗
                  </label>
                  <input
                    type="text"
                    value={editingMember.experience}
                    onChange={(e) => setEditingMember({...editingMember, experience: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingMember.isActive}
                      onChange={(e) => setEditingMember({...editingMember, isActive: e.target.checked})}
                      className="w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                    />
                    <span className="text-gray-300">啟用此成員</span>
                  </label>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleSaveMember}
                    disabled={isLoading}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isLoading ? '儲存中...' : '儲存變更'}</span>
                  </button>
                  
                  <button
                    onClick={() => setEditingMember(null)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Edit3 className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">選擇左側的內容項目或團隊成員開始編輯</p>
              </div>
            )}
          </div>
        </div>

        {/* Add Member Modal */}
        {showAddMemberModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-dark-800 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-bold text-white mb-6">新增團隊成員</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    職位
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入職位"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    專業領域
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入專業領域"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    經驗
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入經驗"
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    onClick={() => setShowAddMemberModal(false)}
                    className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    取消
                  </button>
                  <button className="btn-primary">
                    新增成員
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
