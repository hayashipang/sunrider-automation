'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ManufacturingSolutionPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">製造業自動化</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              完整的生產線自動化解決方案，提升效率與品質，實現智能製造
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
                <h2 className="text-2xl font-bold text-white mb-6">解決方案特色</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">智能生產線整合</h3>
                    <p className="text-gray-300">
                      整合 AOI 視覺檢測、機器手臂和 AI 智能系統，建立完整的智能生產線，實現無人化生產。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">實時品質監控</h3>
                    <p className="text-gray-300">
                      透過 AI 視覺檢測系統，實時監控產品品質，自動識別缺陷並進行分類處理。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">數據驅動優化</h3>
                    <p className="text-gray-300">
                      收集生產數據並進行分析，提供優化建議，持續提升生產效率和產品品質。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">靈活配置</h3>
                    <p className="text-gray-300">
                      模組化設計，可根據不同產品需求靈活配置，快速適應生產變化。
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
                      <h4 className="font-semibold text-white">提升生產效率 40%</h4>
                      <p className="text-gray-300 text-sm">自動化流程大幅提升生產速度</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">降低人工成本 60%</h4>
                      <p className="text-gray-300 text-sm">減少人力需求，降低營運成本</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">減少品質問題 80%</h4>
                      <p className="text-gray-300 text-sm">AI 檢測確保產品品質一致性</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">24/7 不間斷生產</h4>
                      <p className="text-gray-300 text-sm">自動化系統實現全天候生產</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              適用行業
            </h2>
            <p className="text-gray-300">
              我們的製造業自動化解決方案適用於多個行業
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">電子製造</h3>
              <p className="text-gray-300 text-sm">手機、平板、筆電等電子產品製造</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold text-xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">半導體</h3>
              <p className="text-gray-300 text-sm">晶圓製造、封裝測試等精密製造</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold text-xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">汽車製造</h3>
              <p className="text-gray-300 text-sm">汽車零組件和整車製造</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
