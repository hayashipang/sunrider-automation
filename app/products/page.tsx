import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Eye, Brain, Bot, Code, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 'aoi',
    icon: Eye,
    title: 'AOI 視覺檢測',
    subtitle: '高精度自動光學檢測系統',
    description: '採用先進的機器視覺技術，提供快速、準確的產品品質檢測解決方案。結合 AI 智能算法，能夠識別各種缺陷類型，確保產品品質一致性。',
    features: [
      '高解析度影像處理技術',
      'AI 智能缺陷識別算法',
      '即時檢測報告生成',
      '客製化檢測流程設計',
      '多種光源配置選項',
      '統計分析與趨勢預測'
    ],
    benefits: [
      '提升檢測準確率至 99.9%',
      '檢測速度提升 300%',
      '降低人工檢測成本 80%',
      '24/7 不間斷自動檢測'
    ],
    applications: [
      '電子元件檢測',
      'PCB 板品質控制',
      '機械零件尺寸測量',
      '包裝完整性檢查'
    ]
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI 智能分析',
    subtitle: '深度學習與機器學習解決方案',
    description: '運用最新的深度學習技術，為您的數據提供智能分析與預測。從數據挖掘到預測性維護，幫助企業做出更明智的決策。',
    features: [
      '深度學習模型開發',
      '預測性維護系統',
      '數據挖掘與分析',
      '智能決策支援系統',
      '自然語言處理',
      '圖像識別與分類'
    ],
    benefits: [
      '預測準確率達 95%',
      '維護成本降低 50%',
      '決策效率提升 200%',
      '異常檢測即時響應'
    ],
    applications: [
      '設備故障預測',
      '品質異常分析',
      '需求預測分析',
      '智能客服系統'
    ]
  },
  {
    id: 'robotics',
    icon: Bot,
    title: '機器手臂整合',
    subtitle: '工業機器人系統整合服務',
    description: '提供完整的工業機器人系統整合解決方案，包括多軸協調控制、視覺引導系統，實現精準的自動化操作。',
    features: [
      '多軸協調控制系統',
      '視覺引導與定位',
      '安全防護機制',
      '遠程監控與管理',
      '路徑規劃優化',
      '碰撞檢測與避免'
    ],
    benefits: [
      '操作精度提升至 0.1mm',
      '生產效率提升 150%',
      '安全事故降低 90%',
      '維護成本減少 60%'
    ],
    applications: [
      '自動化組裝作業',
      '精密零件加工',
      '物料搬運與分揀',
      '焊接與切割作業'
    ]
  },
  {
    id: 'software',
    icon: Code,
    title: '軟體開發',
    subtitle: '客製化軟體解決方案',
    description: '專業的軟體開發團隊，提供系統整合、人機介面設計、數據庫管理等服務，打造完整的數位化解決方案。',
    features: [
      '系統整合開發',
      '人機介面設計',
      '數據庫管理系統',
      '雲端服務部署',
      'API 開發與整合',
      '移動應用開發'
    ],
    benefits: [
      '開發週期縮短 40%',
      '系統穩定性達 99.9%',
      '用戶體驗優化',
      '維護成本降低 50%'
    ],
    applications: [
      'ERP 系統整合',
      'MES 製造執行系統',
      'SCADA 監控系統',
      '移動端管理應用'
    ]
  }
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">產品服務</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              提供全方位的自動化解決方案，從硬體整合到軟體開發，
              為您的企業打造完整的智能化生產環境
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={product.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <product.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-primary-400 font-medium">{product.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">核心功能</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">效益優勢</h3>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">應用領域</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-3 py-1 bg-dark-700 text-primary-400 text-sm rounded-full border border-dark-600"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-dark-700">
                  <Link 
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group/link"
                  >
                    <span>查看詳細資訊</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">準備開始您的自動化之旅？</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              我們的專業團隊將為您提供客製化的解決方案，
              幫助您實現智能化轉型目標
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                立即諮詢
              </Link>
              <Link href="/solutions" className="btn-secondary text-lg px-8 py-4">
                查看解決方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
