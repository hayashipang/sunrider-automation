'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "什麼是 AOI 視覺檢測系統？",
      answer: "AOI（Automated Optical Inspection）自動光學檢測系統是一種利用光學技術進行產品品質檢測的自動化設備。它能夠快速、準確地識別產品表面的缺陷，包括劃痕、污點、變形等問題，大幅提升檢測效率和準確率。"
    },
    {
      question: "AI 智能系統如何提升檢測準確率？",
      answer: "我們的 AI 智能系統採用深度學習算法，能夠從大量檢測數據中學習和優化。通過持續的訓練和改進，系統可以識別更複雜的缺陷模式，並適應不同產品的檢測需求，從而達到 99.9% 以上的檢測準確率。"
    },
    {
      question: "機器手臂系統的精度如何？",
      answer: "我們的機器手臂系統採用先進的伺服控制技術，能夠實現微米級精度定位。具體精度取決於型號和應用場景，一般可達到 ±0.02mm 的重複定位精度，滿足高精度作業需求。"
    },
    {
      question: "系統整合需要多長時間？",
      answer: "系統整合時間因項目複雜度而異。一般來說，標準系統整合需要 2-4 週，包括安裝、配置、測試和培訓。複雜的客製化系統可能需要 6-12 週。我們會在項目開始前提供詳細的時間規劃。"
    },
    {
      question: "提供哪些技術支援服務？",
      answer: "我們提供全面的技術支援服務，包括 7x24 小時緊急支援熱線、遠端診斷與修復、現場技術服務、系統優化建議、操作培訓和維護保養指導。確保您的系統穩定運行。"
    },
    {
      question: "如何進行系統維護？",
      answer: "我們提供完整的維護保養計劃，包括定期檢查、清潔保養、軟體更新和性能優化。建議每季度進行一次專業維護，我們會提供詳細的維護手冊和培訓，幫助您的團隊進行日常維護。"
    },
    {
      question: "系統是否支援客製化開發？",
      answer: "是的，我們提供完整的客製化開發服務。根據您的具體需求，我們可以開發專屬的軟體功能、調整硬體配置、整合第三方系統，並提供相應的技術文檔和培訓服務。"
    },
    {
      question: "如何聯繫技術支援？",
      answer: "您可以通過多種方式聯繫我們的技術支援團隊：緊急支援請撥打 24/7 熱線 +886-2-1234-5678，一般諮詢請發送郵件至 support@sunrider-automation.com，或通過我們的線上客服系統。"
    }
  ]

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">常見問題</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              找到您需要的答案，如果還有其他問題，請隨時聯繫我們的技術支援團隊
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-dark-600 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              還有其他問題？
            </h2>
            <p className="text-gray-300 mb-8">
              我們的技術支援團隊隨時為您提供協助
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center"
              >
                聯繫我們
              </a>
              <a 
                href="/support" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                技術支援
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
