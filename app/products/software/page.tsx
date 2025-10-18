'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SoftwareProductPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">軟體整合服務</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              專業的軟體開發與系統整合服務，提供完整的自動化解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-dark-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-400 font-bold text-3xl">💻</span>
                  </div>
                  <p className="text-gray-300 text-lg">軟體開發</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">服務內容</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">系統整合</h3>
                    <p className="text-gray-300">
                      整合各種自動化設備和系統，建立統一的管理平台，提升整體運營效率。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">客製化開發</h3>
                    <p className="text-gray-300">
                      根據客戶需求開發客製化軟體，提供專屬的解決方案和功能模組。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">數據分析</h3>
                    <p className="text-gray-300">
                      建立數據分析平台，提供即時監控、趨勢分析和決策支援功能。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">維護支援</h3>
                    <p className="text-gray-300">
                      提供完整的軟體維護和技術支援服務，確保系統穩定運行。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
