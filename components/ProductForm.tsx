'use client'

import { useState, useEffect } from 'react'
import { Save, X } from 'lucide-react'

interface Product {
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

interface ProductFormProps {
  product?: Product | null
  onSave: (productData: Partial<Product>) => void
  onCancel: () => void
  isLoading: boolean
}

export default function ProductForm({ product, onSave, onCancel, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'AOI' as 'AOI' | 'AI' | 'Robotics' | 'Software',
    description: '',
    features: [''],
    benefits: [''],
    applications: [''],
    status: 'draft' as 'active' | 'draft'
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        description: product.description,
        features: product.features.length > 0 ? product.features : [''],
        benefits: product.benefits.length > 0 ? product.benefits : [''],
        applications: product.applications.length > 0 ? product.applications : [''],
        status: product.status
      })
    }
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const productData = {
      ...formData,
      features: formData.features.filter(f => f.trim()),
      benefits: formData.benefits.filter(b => b.trim()),
      applications: formData.applications.filter(a => a.trim())
    }
    
    onSave(productData)
  }

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }))
  }

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  const updateFeature = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }))
  }

  const addBenefit = () => {
    setFormData(prev => ({
      ...prev,
      benefits: [...prev.benefits, '']
    }))
  }

  const removeBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }))
  }

  const updateBenefit = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.map((b, i) => i === index ? value : b)
    }))
  }

  const addApplication = () => {
    setFormData(prev => ({
      ...prev,
      applications: [...prev.applications, '']
    }))
  }

  const removeApplication = (index: number) => {
    setFormData(prev => ({
      ...prev,
      applications: prev.applications.filter((_, i) => i !== index)
    }))
  }

  const updateApplication = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      applications: prev.applications.map((a, i) => i === index ? value : a)
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-dark-800 rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            {product ? '編輯產品' : '新增產品'}
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">產品名稱 *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                placeholder="輸入產品名稱"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">類別 *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="AOI">AOI 視覺檢測</option>
                <option value="AI">AI 智能分析</option>
                <option value="Robotics">機器手臂整合</option>
                <option value="Software">軟體開發</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">產品描述 *</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
              placeholder="輸入產品描述"
            />
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">核心功能</label>
              <button
                type="button"
                onClick={addFeature}
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                + 新增功能
              </button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入功能描述"
                  />
                  {formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">效益優勢</label>
              <button
                type="button"
                onClick={addBenefit}
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                + 新增效益
              </button>
            </div>
            <div className="space-y-2">
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入效益描述"
                  />
                  {formData.benefits.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBenefit(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">應用領域</label>
              <button
                type="button"
                onClick={addApplication}
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                + 新增應用
              </button>
            </div>
            <div className="space-y-2">
              {formData.applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={application}
                    onChange={(e) => updateApplication(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="輸入應用領域"
                  />
                  {formData.applications.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeApplication(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">狀態</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
              className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
            >
              <option value="draft">草稿</option>
              <option value="active">已發布</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isLoading ? '儲存中...' : '儲存'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
