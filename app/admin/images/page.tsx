'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Image, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Search,
  Filter,
  ArrowLeft,
  Upload,
  Download
} from 'lucide-react'

// 模擬圖片數據
const mockImages = [
  {
    id: 1,
    name: 'aoi-system-1.jpg',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center',
    alt: 'AOI 視覺檢測系統',
    category: 'AOI',
    size: '2.3 MB',
    dimensions: '1920x1080',
    uploadedAt: '2024-01-20',
    usedIn: ['產品頁面', '首頁輪播']
  },
  {
    id: 2,
    name: 'ai-platform-2.jpg',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&crop=center',
    alt: 'AI 智能分析平台',
    category: 'AI',
    size: '1.8 MB',
    dimensions: '1920x1080',
    uploadedAt: '2024-01-18',
    usedIn: ['產品頁面']
  },
  {
    id: 3,
    name: 'robotics-arm-3.jpg',
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center',
    alt: '機器手臂整合方案',
    category: 'Robotics',
    size: '3.1 MB',
    dimensions: '1920x1080',
    uploadedAt: '2024-01-15',
    usedIn: ['案例分享']
  },
  {
    id: 4,
    name: 'software-dev-4.jpg',
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center',
    alt: '軟體開發服務',
    category: 'Software',
    size: '2.7 MB',
    dimensions: '1920x1080',
    uploadedAt: '2024-01-12',
    usedIn: ['關於我們']
  }
]

export default function AdminImages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [images, setImages] = useState(mockImages)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedImages, setSelectedImages] = useState<number[]>([])
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleDelete = (id: number) => {
    if (confirm('確定要刪除這張圖片嗎？')) {
      setImages(images.filter(image => image.id !== id))
    }
  }

  const handleSelectImage = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) 
        ? prev.filter(imgId => imgId !== id)
        : [...prev, id]
    )
  }

  const handleBulkDelete = () => {
    if (selectedImages.length === 0) return
    if (confirm(`確定要刪除選中的 ${selectedImages.length} 張圖片嗎？`)) {
      setImages(images.filter(image => !selectedImages.includes(image.id)))
      setSelectedImages([])
    }
  }

  const filteredImages = images.filter(image => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || image.category === filterCategory
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
              <h1 className="text-xl font-bold gradient-text">圖片管理</h1>
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
                placeholder="搜尋圖片..."
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
            
            {selectedImages.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center space-x-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>刪除選中 ({selectedImages.length})</span>
              </button>
            )}
            
            <button
              onClick={() => setShowUploadModal(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>上傳圖片</span>
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="card group">
              <div className="relative">
                {/* Image Preview */}
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Image className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">{image.dimensions}</p>
                  </div>
                </div>
                
                {/* Selection Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedImages.includes(image.id)}
                  onChange={() => handleSelectImage(image.id)}
                  className="absolute top-2 left-2 w-4 h-4 text-primary-600 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                />
                
                {/* Quick Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <button className="p-1 bg-dark-800/80 hover:bg-dark-700 rounded text-white">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 bg-dark-800/80 hover:bg-dark-700 rounded text-white">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(image.id)}
                      className="p-1 bg-red-600/80 hover:bg-red-600 rounded text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Image Info */}
              <div>
                <h3 className="font-medium text-white mb-1 truncate">{image.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{image.alt}</p>
                
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>類別:</span>
                    <span className="text-primary-400">{image.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>大小:</span>
                    <span>{image.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>上傳時間:</span>
                    <span>{image.uploadedAt}</span>
                  </div>
                </div>
                
                {image.usedIn.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">使用位置:</p>
                    <div className="flex flex-wrap gap-1">
                      {image.usedIn.map((location, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-dark-700 text-primary-400 text-xs rounded"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">沒有找到符合條件的圖片</p>
            <p className="text-gray-500 text-sm mt-2">嘗試調整搜尋條件或上傳新圖片</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-dark-800 rounded-xl p-6 w-full max-w-2xl mx-4">
            <h3 className="text-xl font-bold text-white mb-6">上傳圖片</h3>
            
            <div className="space-y-4">
              {/* File Upload Area */}
              <div className="border-2 border-dashed border-dark-600 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">拖拽圖片到這裡或點擊選擇檔案</p>
                <p className="text-gray-500 text-sm">支援 JPG, PNG, GIF 格式，最大 10MB</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block mt-4 btn-primary cursor-pointer"
                >
                  選擇檔案
                </label>
              </div>
              
              {/* Upload Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Alt 文字</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="圖片描述"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  取消
                </button>
                <button className="btn-primary">
                  開始上傳
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
