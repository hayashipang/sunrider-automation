'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AOIProductPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AOI 視覺檢測</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              高精度自動光學檢測系統，提供快速、準確的產品品質檢測解決方案
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
                    <span className="text-primary-400 font-bold text-3xl">AOI</span>
                  </div>
                  <p className="text-gray-300 text-lg">自動光學檢測系統</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">產品特色</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">高解析度影像處理</h3>
                    <p className="text-gray-300">
                      採用先進的影像處理技術，提供超高解析度檢測能力，確保微小缺陷無所遁形。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">AI 智能缺陷識別</h3>
                    <p className="text-gray-300">
                      整合人工智慧技術，自動學習和識別各種缺陷類型，提升檢測準確率。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">即時檢測報告</h3>
                    <p className="text-gray-300">
                      即時生成詳細的檢測報告，提供完整的品質數據分析和趨勢預測。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">客製化檢測流程</h3>
                    <p className="text-gray-300">
                      根據客戶需求客製化檢測流程，靈活適應不同產品和檢測要求。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mt-16">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">應用領域</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">半導體</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">半導體製造</h3>
                  <p className="text-gray-300 text-sm">晶圓檢測、封裝測試</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">面板</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">面板製造</h3>
                  <p className="text-gray-300 text-sm">LCD/OLED 品質檢測</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">PCB</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">PCB 製造</h3>
                  <p className="text-gray-300 text-sm">電路板缺陷檢測</p>
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
