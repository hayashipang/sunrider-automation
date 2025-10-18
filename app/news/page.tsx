'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">最新消息</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              了解 Sunrider Automation 的最新動態、技術發展和行業資訊
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News 1 */}
            <article className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">AI</span>
                  </div>
                  <p className="text-gray-300">AI 技術突破</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                  2024-01-15
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                AI 視覺檢測技術重大突破
              </h3>
              <p className="text-gray-300 mb-4">
                我們最新的 AI 視覺檢測系統在準確率和速度方面都有顯著提升，為製造業帶來革命性改變...
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                閱讀更多 →
              </a>
            </article>

            {/* News 2 */}
            <article className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">🏆</span>
                  </div>
                  <p className="text-gray-300">獲獎消息</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                  2024-01-10
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                榮獲 2024 年自動化創新獎
              </h3>
              <p className="text-gray-300 mb-4">
                Sunrider Automation 在 2024 年台灣自動化展覽會上榮獲「最佳自動化解決方案」獎項...
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                閱讀更多 →
              </a>
            </article>

            {/* News 3 */}
            <article className="card group">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-400 font-bold text-xl">🤝</span>
                  </div>
                  <p className="text-gray-300">合作夥伴</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                  2024-01-05
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                與國際大廠建立戰略合作
              </h3>
              <p className="text-gray-300 mb-4">
                我們與多家國際知名製造商建立戰略合作關係，共同推動工業 4.0 的發展...
              </p>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                閱讀更多 →
              </a>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
