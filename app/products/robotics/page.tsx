'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RoboticsProductPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">機器手臂系統</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              高精度工業機器手臂，提供靈活、可靠的自動化解決方案
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
                    <span className="text-primary-400 font-bold text-3xl">🤖</span>
                  </div>
                  <p className="text-gray-300 text-lg">工業機器手臂</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">產品特色</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">高精度定位</h3>
                    <p className="text-gray-300">
                      採用先進的伺服控制技術，實現微米級精度定位，滿足高精度作業需求。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">靈活編程</h3>
                    <p className="text-gray-300">
                      支援多種編程方式，包括示教編程、離線編程，快速適應不同作業需求。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">安全防護</h3>
                    <p className="text-gray-300">
                      內建多重安全保護機制，確保人機協作安全，符合國際安全標準。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">模組化設計</h3>
                    <p className="text-gray-300">
                      採用模組化設計，可根據需求靈活配置，支援多種末端執行器。
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
