'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WarehouseSolutionPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">智能倉儲管理</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              機器人與 AI 結合的智能倉儲解決方案，提升倉儲效率與準確性
            </p>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">系統特色</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">自動化貨物分揀</h3>
                    <p className="text-gray-300">
                      智能機器人自動識別和分揀貨物，提高分揀準確率和效率。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">智能路徑規劃</h3>
                    <p className="text-gray-300">
                      AI 算法優化機器人移動路徑，減少移動時間和碰撞風險。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">庫存即時監控</h3>
                    <p className="text-gray-300">
                      實時監控庫存狀況，自動生成補貨提醒和庫存報告。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">減少人為錯誤</h3>
                    <p className="text-gray-300">
                      自動化流程減少人為操作錯誤，提升倉儲管理準確性。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">主要優勢</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">自動化貨物分揀</h4>
                      <p className="text-gray-300 text-sm">智能機器人提升分揀效率</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">智能路徑規劃</h4>
                      <p className="text-gray-300 text-sm">AI 優化移動路徑</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">庫存即時監控</h4>
                      <p className="text-gray-300 text-sm">實時掌握庫存狀況</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">減少人為錯誤</h4>
                      <p className="text-gray-300 text-sm">自動化流程提升準確性</p>
                    </div>
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
