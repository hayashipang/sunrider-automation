'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">技術支援</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我們提供專業的技術支援服務，確保您的自動化系統穩定運行
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Support */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                技術支援
              </h3>
              <p className="text-gray-300 mb-6">
                專業技術團隊提供 7x24 小時技術支援服務，快速解決系統問題
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 遠端診斷與修復</li>
                <li>• 現場技術服務</li>
                <li>• 系統優化建議</li>
                <li>• 緊急故障處理</li>
              </ul>
            </div>

            {/* Training */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                教育訓練
              </h3>
              <p className="text-gray-300 mb-6">
                提供完整的操作培訓課程，讓您的團隊熟練掌握系統操作
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 系統操作培訓</li>
                <li>• 維護保養指導</li>
                <li>• 故障排除教學</li>
                <li>• 認證課程</li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="card group">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                技術文檔
              </h3>
              <p className="text-gray-300 mb-6">
                完整的技術文檔和使用手冊，幫助您快速上手和解決問題
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 安裝指南</li>
                <li>• 操作手冊</li>
                <li>• API 文檔</li>
                <li>• 常見問題</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              聯繫技術支援
            </h2>
            <p className="text-gray-300">
              需要技術支援？請選擇最適合的聯繫方式
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">緊急支援</h3>
              <p className="text-gray-300 mb-4">24/7 緊急技術支援熱線</p>
              <div className="text-2xl font-bold text-primary-400 mb-4">
                +886-2-1234-5678
              </div>
              <p className="text-gray-400 text-sm">
                適用於系統故障、緊急停機等情況
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-bold text-white mb-4">一般諮詢</h3>
              <p className="text-gray-300 mb-4">技術諮詢與問題回報</p>
              <div className="text-lg font-bold text-primary-400 mb-4">
                support@sunrider-automation.com
              </div>
              <p className="text-gray-400 text-sm">
                工作時間：週一至週五 9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
