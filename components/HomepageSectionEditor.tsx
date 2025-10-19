'use client'

import { useState } from 'react'
import { Save, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react'
import { HomepageSection } from '@/lib/database'

interface HomepageSectionEditorProps {
  section: HomepageSection
  onSave: (section: HomepageSection) => void
  onCancel: () => void
  isLoading?: boolean
}

export default function HomepageSectionEditor({ 
  section, 
  onSave, 
  onCancel, 
  isLoading = false 
}: HomepageSectionEditorProps) {
  const [editingSection, setEditingSection] = useState<HomepageSection>(section)

  const handleSave = () => {
    onSave(editingSection)
  }

  const updateContent = (path: string, value: any) => {
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [path]: value
      }
    }))
  }

  const updateTextStyle = (path: string, style: string, value: any) => {
    setEditingSection(prev => {
      const newContent = { ...prev.content }
      const keys = path.split('.')
      let current: any = newContent
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }
      
      if (!current[keys[keys.length - 1]]) {
        current[keys[keys.length - 1]] = { text: '', fontSize: 'md', fontWeight: 'normal', fontFamily: 'sans' }
      }
      
      current[keys[keys.length - 1]][style] = value
      
      return { ...prev, content: newContent }
    })
  }

  const addCard = () => {
    const newCard = {
      id: `card-${Date.now()}`,
      title: '新卡片',
      description: '',
      buttonText: '',
      buttonLink: '',
      icon: 'arrow-right',
      position: 'left' as const,
      fontSize: 'lg' as const,
      fontWeight: 'medium' as const,
      fontFamily: 'sans' as const
    }
    
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        cards: [...(prev.content.cards || []), newCard]
      }
    }))
  }

  const removeCard = (cardId: string) => {
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        cards: prev.content.cards?.filter(card => card.id !== cardId) || []
      }
    }))
  }

  const updateCard = (cardId: string, updates: any) => {
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        cards: prev.content.cards?.map(card => 
          card.id === cardId ? { ...card, ...updates } : card
        ) || []
      }
    }))
  }

  const addStat = () => {
    const newStat = {
      id: `stat-${Date.now()}`,
      number: '0',
      label: '新統計',
      fontSize: '2xl' as const,
      fontWeight: 'bold' as const,
      fontFamily: 'sans' as const
    }
    
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        stats: [...(prev.content.stats || []), newStat]
      }
    }))
  }

  const removeStat = (statId: string) => {
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        stats: prev.content.stats?.filter(stat => stat.id !== statId) || []
      }
    }))
  }

  const updateStat = (statId: string, updates: any) => {
    setEditingSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        stats: prev.content.stats?.map(stat => 
          stat.id === statId ? { ...stat, ...updates } : stat
        ) || []
      }
    }))
  }

  const renderTextEditor = (path: string, label: string, placeholder?: string) => {
    const textObj = editingSection.content[path as keyof typeof editingSection.content] as any
    if (!textObj) return null

    return (
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-300">{label}</label>
        
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">字體大小</label>
            <select
              value={textObj.fontSize || 'md'}
              onChange={(e) => updateTextStyle(path, 'fontSize', e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
            >
              <option value="sm">小 (sm)</option>
              <option value="md">中 (md)</option>
              <option value="lg">大 (lg)</option>
              <option value="xl">特大 (xl)</option>
              <option value="2xl">2XL</option>
              <option value="3xl">3XL</option>
              <option value="4xl">4XL</option>
              <option value="5xl">5XL</option>
              <option value="6xl">6XL</option>
              <option value="7xl">7XL</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs text-gray-400 mb-1">字體粗細</label>
            <select
              value={textObj.fontWeight || 'normal'}
              onChange={(e) => updateTextStyle(path, 'fontWeight', e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
            >
              <option value="normal">正常</option>
              <option value="medium">中等</option>
              <option value="semibold">半粗</option>
              <option value="bold">粗體</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs text-gray-400 mb-1">字型</label>
            <select
              value={textObj.fontFamily || 'sans'}
              onChange={(e) => updateTextStyle(path, 'fontFamily', e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
            >
              <option value="sans">無襯線</option>
              <option value="serif">襯線</option>
              <option value="mono">等寬</option>
            </select>
          </div>
        </div>
        
        <textarea
          value={textObj.text || ''}
          onChange={(e) => updateTextStyle(path, 'text', e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{editingSection.title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isLoading ? '儲存中...' : '儲存'}</span>
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            取消
          </button>
        </div>
      </div>

      {/* 啟用狀態 */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isActive"
          checked={editingSection.isActive}
          onChange={(e) => setEditingSection(prev => ({ ...prev, isActive: e.target.checked }))}
          className="w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
        />
        <label htmlFor="isActive" className="text-gray-300">啟用此區塊</label>
      </div>

      {/* 根據區塊類型渲染不同的編輯器 */}
      {editingSection.type === 'hero' && (
        <div className="space-y-6">
          {renderTextEditor('title', '主標題', '例如：釋放自動化')}
          {renderTextEditor('subtitle', '副標題', '例如：的無限潛能')}
          {renderTextEditor('description', '描述文字', '例如：專業的 AOI、AI、機器手臂、軟體整合服務...')}
        </div>
      )}

      {editingSection.type === 'cta-buttons' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-medium text-white">行動呼籲按鈕</h4>
            <button
              onClick={addCard}
              className="btn-secondary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>新增按鈕</span>
            </button>
          </div>
          
          {editingSection.content.cards?.map((card, index) => (
            <div key={card.id} className="border border-dark-600 rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-medium text-white">按鈕 {index + 1}</h5>
                <button
                  onClick={() => removeCard(card.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">按鈕文字</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => updateCard(card.id, { title: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">連結網址</label>
                  <input
                    type="text"
                    value={card.buttonLink || ''}
                    onChange={(e) => updateCard(card.id, { buttonLink: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">字體大小</label>
                  <select
                    value={card.fontSize || 'lg'}
                    onChange={(e) => updateCard(card.id, { fontSize: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="sm">小</option>
                    <option value="md">中</option>
                    <option value="lg">大</option>
                    <option value="xl">特大</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">字體粗細</label>
                  <select
                    value={card.fontWeight || 'medium'}
                    onChange={(e) => updateCard(card.id, { fontWeight: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="normal">正常</option>
                    <option value="medium">中等</option>
                    <option value="semibold">半粗</option>
                    <option value="bold">粗體</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">位置</label>
                  <select
                    value={card.position}
                    onChange={(e) => updateCard(card.id, { position: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="left">左側</option>
                    <option value="right">右側</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingSection.type === 'stats' && (
        <div className="space-y-4">
          {renderTextEditor('title', '區塊標題', '例如：信賴我們的客戶')}
          
          <div className="flex items-center justify-between">
            <h4 className="text-md font-medium text-white">統計數據</h4>
            <button
              onClick={addStat}
              className="btn-secondary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>新增統計</span>
            </button>
          </div>
          
          {editingSection.content.stats?.map((stat, index) => (
            <div key={stat.id} className="border border-dark-600 rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-medium text-white">統計 {index + 1}</h5>
                <button
                  onClick={() => removeStat(stat.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">數字</label>
                  <input
                    type="text"
                    value={stat.number}
                    onChange={(e) => updateStat(stat.id, { number: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">標籤</label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => updateStat(stat.id, { label: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">字體大小</label>
                  <select
                    value={stat.fontSize || '2xl'}
                    onChange={(e) => updateStat(stat.id, { fontSize: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="lg">大</option>
                    <option value="xl">特大</option>
                    <option value="2xl">2XL</option>
                    <option value="3xl">3XL</option>
                    <option value="4xl">4XL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">字體粗細</label>
                  <select
                    value={stat.fontWeight || 'bold'}
                    onChange={(e) => updateStat(stat.id, { fontWeight: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="normal">正常</option>
                    <option value="medium">中等</option>
                    <option value="semibold">半粗</option>
                    <option value="bold">粗體</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">字型</label>
                  <select
                    value={stat.fontFamily || 'sans'}
                    onChange={(e) => updateStat(stat.id, { fontFamily: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded text-white text-sm"
                  >
                    <option value="sans">無襯線</option>
                    <option value="serif">襯線</option>
                    <option value="mono">等寬</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
