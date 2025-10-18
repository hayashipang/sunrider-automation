'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">成功案例</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              探索我們為客戶提供的成功自動化解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">A</span>
                  </div>
                  <p className="text-gray-300">半導體製造</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                半導體晶圓檢測系統
              </h3>
              <p className="text-gray-300 mb-4">
                為台灣知名半導體廠商部署 AOI 視覺檢測系統，提升檢測準確率至 99.9%
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">AOI</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">半導體</span>
              </div>
            </div>

            {/* Case 2 */}
            <div className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">B</span>
                  </div>
                  <p className="text-gray-300">面板製造</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                面板品質檢測自動化
              </h3>
              <p className="text-gray-300 mb-4">
                為面板製造商建立完整的品質檢測自動化系統，減少人工檢測成本 70%
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">視覺檢測</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">自動化</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">面板</span>
              </div>
            </div>

            {/* Case 3 */}
            <div className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">C</span>
                  </div>
                  <p className="text-gray-300">物流倉儲</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                智能倉儲機器人系統
              </h3>
              <p className="text-gray-300 mb-4">
                為電商物流中心部署智能機器人系統，提升倉儲效率 50%
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">機器人</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">物流</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
