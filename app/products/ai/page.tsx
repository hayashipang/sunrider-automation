'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AIProductPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI 智能系統</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              人工智慧驅動的智能檢測與控制系統，提供更精準、更高效的解決方案
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
                    <span className="text-primary-400 font-bold text-3xl">AI</span>
                  </div>
                  <p className="text-gray-300 text-lg">人工智慧系統</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">產品特色</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">深度學習算法</h3>
                    <p className="text-gray-300">
                      採用最新的深度學習技術，持續學習和優化檢測算法，提升系統智能化水平。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">預測性維護</h3>
                    <p className="text-gray-300">
                      透過 AI 分析設備運行數據，預測潛在故障，實現預測性維護，降低停機時間。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">智能決策</h3>
                    <p className="text-gray-300">
                      基於大數據分析，提供智能決策建議，優化生產流程和品質控制。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">自適應學習</h3>
                    <p className="text-gray-300">
                      系統能夠根據實際使用情況自動調整參數，持續提升檢測準確率和效率。
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
