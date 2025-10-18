'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  BarChart3, 
  Package, 
  Image, 
  Users, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  FileText,
  Upload,
  Info,
  Phone,
  Home
} from 'lucide-react'

// 模擬數據
const mockStats = {
  totalProducts: 12,
  totalImages: 45,
  totalUsers: 8,
  totalViews: 1250
}

const mockProducts = [
  { id: 1, name: 'AOI 視覺檢測系統', category: 'AOI', status: 'active', views: 156 },
  { id: 2, name: 'AI 智能分析平台', category: 'AI', status: 'active', views: 234 },
  { id: 3, name: '機器手臂整合方案', category: 'Robotics', status: 'draft', views: 89 },
  { id: 4, name: '軟體開發服務', category: 'Software', status: 'active', views: 178 },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
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
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="text-xl font-bold gradient-text">Sunrider Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>登出</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-dark-800 border-r border-dark-700 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-primary-600/20 text-primary-400 rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                  <span>儀表板</span>
                </a>
              </li>
              <li>
                <a href="/admin/home" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Home className="w-5 h-5" />
                  <span>首頁管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/content" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <FileText className="w-5 h-5" />
                  <span>內容管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/products" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Package className="w-5 h-5" />
                  <span>產品管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/media" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>媒體管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/about" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Info className="w-5 h-5" />
                  <span>關於我們</span>
                </a>
              </li>
              <li>
                <a href="/admin/contact" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>聯絡我們</span>
                </a>
              </li>
              <li>
                <a href="/admin/users" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                  <span>用戶管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                  <span>系統設定</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">儀表板</h2>
            <p className="text-gray-400">歡迎回到 Sunrider 管理後台</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">總產品數</p>
                  <p className="text-2xl font-bold text-white">{mockStats.totalProducts}</p>
                </div>
                <Package className="w-8 h-8 text-primary-400" />
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">總圖片數</p>
                  <p className="text-2xl font-bold text-white">{mockStats.totalImages}</p>
                </div>
                <Image className="w-8 h-8 text-primary-400" />
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">總用戶數</p>
                  <p className="text-2xl font-bold text-white">{mockStats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-primary-400" />
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">總瀏覽量</p>
                  <p className="text-2xl font-bold text-white">{mockStats.totalViews}</p>
                </div>
                <Eye className="w-8 h-8 text-primary-400" />
              </div>
            </div>
          </div>

          {/* Recent Products */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">最近產品</h3>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>新增產品</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-3 px-4 text-gray-300">產品名稱</th>
                    <th className="text-left py-3 px-4 text-gray-300">類別</th>
                    <th className="text-left py-3 px-4 text-gray-300">狀態</th>
                    <th className="text-left py-3 px-4 text-gray-300">瀏覽量</th>
                    <th className="text-left py-3 px-4 text-gray-300">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProducts.map((product) => (
                    <tr key={product.id} className="border-b border-dark-700/50">
                      <td className="py-3 px-4 text-white">{product.name}</td>
                      <td className="py-3 px-4 text-gray-300">{product.category}</td>
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
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-primary-400 hover:text-primary-300 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-300 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
