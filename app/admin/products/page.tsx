'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Search,
  Filter,
  ArrowLeft
} from 'lucide-react'

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

export default function AdminProducts() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchProducts()
    }
  }, [router])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const result = await response.json()
      if (result.success) {
        setProducts(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('確定要刪除這個產品嗎？')) {
      try {
        // 這裡可以添加刪除 API 調用
        setProducts(products.filter(product => product.id !== id))
        alert('產品已刪除')
      } catch (error) {
        alert('刪除失敗，請稍後再試')
      }
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory
    return matchesSearch && matchesCategory
  })

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
              <h1 className="text-xl font-bold gradient-text">產品管理</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋產品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
            >
              <option value="all">所有類別</option>
              <option value="AOI">AOI</option>
              <option value="AI">AI</option>
              <option value="Robotics">機器手臂</option>
              <option value="Software">軟體</option>
            </select>
            
            <button
              onClick={() => setShowAddModal(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>新增產品</span>
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left py-3 px-4 text-gray-300">產品名稱</th>
                  <th className="text-left py-3 px-4 text-gray-300">類別</th>
                  <th className="text-left py-3 px-4 text-gray-300">描述</th>
                  <th className="text-left py-3 px-4 text-gray-300">狀態</th>
                  <th className="text-left py-3 px-4 text-gray-300">瀏覽量</th>
                  <th className="text-left py-3 px-4 text-gray-300">更新時間</th>
                  <th className="text-left py-3 px-4 text-gray-300">操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{product.name}</td>
                    <td className="py-3 px-4 text-gray-300">{product.category}</td>
                    <td className="py-3 px-4 text-gray-300 max-w-xs truncate">{product.description}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {product.status === 'active' ? '已發布' : '草稿'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{product.views}</td>
                    <td className="py-3 px-4 text-gray-300">{product.updatedAt}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                          title="編輯"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-gray-400 hover:text-gray-300 transition-colors"
                          title="預覽"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="刪除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <Package className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">沒有找到符合條件的產品</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-dark-800 rounded-xl p-6 w-full max-w-2xl mx-4">
            <h3 className="text-xl font-bold text-white mb-6">新增產品</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">產品名稱</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="輸入產品名稱"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">類別</label>
                <select className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500">
                  <option value="">選擇類別</option>
                  <option value="AOI">AOI</option>
                  <option value="AI">AI</option>
                  <option value="Robotics">機器手臂</option>
                  <option value="Software">軟體</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">描述</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="輸入產品描述"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">狀態</label>
                <select className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500">
                  <option value="draft">草稿</option>
                  <option value="active">已發布</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  新增產品
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
