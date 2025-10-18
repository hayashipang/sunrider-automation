'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CustomSolutionPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">客製化解決方案</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              根據您的特殊需求，提供量身定制的自動化解決方案
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
                <h2 className="text-2xl font-bold text-white mb-6">服務內容</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">需求分析</h3>
                    <p className="text-gray-300">
                      深入了解您的業務需求，分析現有流程，制定最適合的自動化策略。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">方案設計</h3>
                    <p className="text-gray-300">
                      根據需求設計客製化解決方案，包括硬體配置、軟體開發和系統整合。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">系統開發</h3>
                    <p className="text-gray-300">
                      專業團隊進行系統開發，確保符合您的特殊需求和品質標準。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">部署支援</h3>
                    <p className="text-gray-300">
                      提供完整的部署支援，包括安裝、測試、培訓和後續維護服務。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">開發流程</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">需求調研</h4>
                      <p className="text-gray-300 text-sm">深入了解業務需求和技術要求</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">方案設計</h4>
                      <p className="text-gray-300 text-sm">制定詳細的技術方案和實施計劃</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">系統開發</h4>
                      <p className="text-gray-300 text-sm">進行軟體開發和硬體整合</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">測試驗收</h4>
                      <p className="text-gray-300 text-sm">全面測試系統功能和性能</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">部署上線</h4>
                      <p className="text-gray-300 text-sm">系統部署和人員培訓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              開始您的客製化專案
            </h2>
            <p className="text-gray-300 mb-8">
              聯繫我們的專業團隊，討論您的客製化需求
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center justify-center"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
