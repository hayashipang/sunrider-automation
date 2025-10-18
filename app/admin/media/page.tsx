'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft, 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Edit, 
  Copy,
  Search,
  Filter
} from 'lucide-react'

interface MediaItem {
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

export default function MediaManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [media, setMedia] = useState<MediaItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchMedia()
    }
  }, [router])

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/images')
      const result = await response.json()
      if (result.success) {
        setMedia(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch media:', error)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files)
  }

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) return
    
    setUploading(true)
    try {
      // 模擬上傳過程
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        
        // 創建預覽 URL
        const previewUrl = URL.createObjectURL(file)
        
        // 模擬上傳到服務器
        const mediaItem: Omit<MediaItem, 'id' | 'uploadedAt'> = {
          name: file.name,
          url: previewUrl,
          alt: file.name.split('.')[0],
          category: 'General',
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          dimensions: '1920x1080', // 模擬尺寸
          usedIn: []
        }
        
        const response = await fetch('/api/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mediaItem),
        })
        
        if (response.ok) {
          const result = await response.json()
          setMedia(prev => [...prev, result.data])
        }
      }
      
      setShowUploadModal(false)
      setSelectedFiles(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      alert('圖片上傳成功！')
    } catch (error) {
      alert('上傳失敗，請稍後再試')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('確定要刪除這張圖片嗎？')) return
    
    try {
      const response = await fetch(`/api/images?id=${id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        setMedia(media.filter(item => item.id !== id))
        alert('圖片已刪除')
      } else {
        alert('刪除失敗')
      }
    } catch (error) {
      alert('刪除失敗，請稍後再試')
    }
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('圖片網址已複製到剪貼板')
  }

  const filteredMedia = media.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.alt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory
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
              <h1 className="text-xl font-bold gradient-text">媒體管理</h1>
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
              <option value="General">一般</option>
            </select>
            
            <button
              onClick={() => setShowUploadModal(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>上傳圖片</span>
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item) => (
            <div key={item.id} className="card group">
              <div className="relative">
                {/* Image Preview */}
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyUrl(item.url)}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded text-white transition-colors"
                        title="複製網址"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded text-white transition-colors"
                        title="刪除"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Media Info */}
              <div>
                <h3 className="font-medium text-white mb-1 truncate">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.alt}</p>
                
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>類別:</span>
                    <span className="text-primary-400">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>大小:</span>
                    <span>{item.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>尺寸:</span>
                    <span>{item.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>上傳時間:</span>
                    <span>{new Date(item.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
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
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
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
              
              {selectedFiles && selectedFiles.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-2">選中的檔案:</h4>
                  <div className="space-y-2">
                    {Array.from(selectedFiles).map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-dark-700 rounded">
                        <span className="text-gray-300 text-sm">{file.name}</span>
                        <span className="text-gray-500 text-xs">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFiles || uploading}
                  className="btn-primary disabled:opacity-50"
                >
                  {uploading ? '上傳中...' : '開始上傳'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
