'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function QualitySolutionPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">品質檢測系統</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI 驅動的視覺檢測系統，確保產品品質一致性，提升檢測效率
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
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">AI 智能識別</h3>
                    <p className="text-gray-300">
                      採用深度學習算法，自動識別各種缺陷類型，包括劃痕、污點、變形等問題。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">高速檢測</h3>
                    <p className="text-gray-300">
                      毫秒級檢測速度，滿足高速生產線需求，大幅提升檢測效率。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">高精度檢測</h3>
                    <p className="text-gray-300">
                      99.9% 檢測準確率，確保產品品質，減少不良品流出。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">即時報告</h3>
                    <p className="text-gray-300">
                      即時生成檢測報告，提供詳細的品質數據分析和趨勢預測。
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
                      <h4 className="font-semibold text-white">99.9% 檢測準確率</h4>
                      <p className="text-gray-300 text-sm">AI 算法確保高精度檢測</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">毫秒級檢測速度</h4>
                      <p className="text-gray-300 text-sm">滿足高速生產線需求</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">多種缺陷類型識別</h4>
                      <p className="text-gray-300 text-sm">全面覆蓋各種品質問題</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">即時品質報告</h4>
                      <p className="text-gray-300 text-sm">提供詳細的品質分析</p>
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
