'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">技術文檔</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              完整的技術文檔和使用指南，幫助您快速上手我們的產品和服務
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AOI Documentation */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                AOI 視覺檢測
              </h3>
              <p className="text-gray-300 mb-6">
                AOI 系統的完整技術文檔和操作指南
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 系統安裝指南</li>
                <li>• 操作手冊</li>
                <li>• 參數設定說明</li>
                <li>• 故障排除指南</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>

            {/* AI Documentation */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                AI 智能系統
              </h3>
              <p className="text-gray-300 mb-6">
                AI 系統的技術文檔和 API 參考
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• API 文檔</li>
                <li>• 模型訓練指南</li>
                <li>• 數據格式說明</li>
                <li>• 性能優化建議</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>

            {/* Robotics Documentation */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                機器手臂系統
              </h3>
              <p className="text-gray-300 mb-6">
                機器手臂的安裝、編程和維護文檔
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 安裝手冊</li>
                <li>• 編程指南</li>
                <li>• 安全操作規範</li>
                <li>• 維護保養手冊</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>

            {/* Software Documentation */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                軟體整合
              </h3>
              <p className="text-gray-300 mb-6">
                軟體開發和系統整合的技術文檔
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• SDK 文檔</li>
                <li>• 整合指南</li>
                <li>• 配置說明</li>
                <li>• 除錯工具</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>

            {/* Quick Start */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                快速開始
              </h3>
              <p className="text-gray-300 mb-6">
                新用戶快速上手指南和最佳實踐
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 系統需求</li>
                <li>• 快速安裝</li>
                <li>• 基本配置</li>
                <li>• 常見問題</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>

            {/* Troubleshooting */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                故障排除
              </h3>
              <p className="text-gray-300 mb-6">
                常見問題解決方案和故障診斷指南
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 常見錯誤代碼</li>
                <li>• 診斷工具</li>
                <li>• 解決方案</li>
                <li>• 聯繫支援</li>
              </ul>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                查看文檔 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
