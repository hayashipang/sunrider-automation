'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">服務條款</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              請仔細閱讀以下服務條款，使用我們的服務即表示您同意遵守這些條款
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">1. 服務說明</h2>
                <p className="text-gray-300 mb-6">
                  Sunrider Automation 提供自動化整合服務，包括 AOI 視覺檢測、AI 智能系統、機器手臂整合和軟體開發服務。我們致力於為客戶提供高品質的自動化解決方案。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. 服務範圍</h2>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• AOI 視覺檢測系統設計與整合</li>
                  <li>• AI 智能系統開發與部署</li>
                  <li>• 機器手臂系統整合與編程</li>
                  <li>• 軟體開發與系統整合</li>
                  <li>• 技術支援與維護服務</li>
                  <li>• 教育訓練與技術諮詢</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. 客戶責任</h2>
                <p className="text-gray-300 mb-4">
                  客戶應提供以下配合：
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• 提供準確的技術需求和規格說明</li>
                  <li>• 配合現場勘查和系統安裝</li>
                  <li>• 提供必要的技術人員培訓配合</li>
                  <li>• 按時支付服務費用</li>
                  <li>• 遵守安全操作規範</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">4. 技術支援</h2>
                <p className="text-gray-300 mb-6">
                  我們提供 7x24 小時技術支援服務，包括遠端診斷、現場服務和緊急故障處理。技術支援範圍包括系統故障排除、軟體更新、性能優化和操作指導。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">5. 智慧財產權</h2>
                <p className="text-gray-300 mb-6">
                  所有由 Sunrider Automation 開發的軟體、技術文檔和專有技術均受智慧財產權保護。客戶不得未經授權複製、修改或分發相關技術資料。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. 保密條款</h2>
                <p className="text-gray-300 mb-6">
                  雙方應對在合作過程中獲悉的商業機密和技術資訊承擔保密義務，未經對方書面同意不得向第三方披露。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. 免責聲明</h2>
                <p className="text-gray-300 mb-6">
                  在適用法律允許的最大範圍內，Sunrider Automation 對因不可抗力、客戶操作不當或第三方因素造成的損失不承擔責任。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">8. 條款修改</h2>
                <p className="text-gray-300 mb-6">
                  我們保留隨時修改本服務條款的權利。修改後的條款將在網站上公布，繼續使用我們的服務即表示您接受修改後的條款。
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. 聯繫方式</h2>
                <p className="text-gray-300 mb-4">
                  如有任何問題或需要澄清，請聯繫我們：
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>電話：+886-2-1234-5678</p>
                  <p>郵箱：legal@sunrider-automation.com</p>
                  <p>地址：台北市信義區信義路五段7號</p>
                </div>

                <div className="mt-8 pt-6 border-t border-dark-600">
                  <p className="text-gray-400 text-sm">
                    最後更新日期：2024年1月1日
                  </p>
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
