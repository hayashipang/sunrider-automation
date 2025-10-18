'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: '製造業自動化',
    description: '完整的生產線自動化解決方案，提升效率與品質',
    benefits: [
      '提升生產效率 40%',
      '降低人工成本 60%',
      '減少品質問題 80%',
      '24/7 不間斷生產'
    ],
    image: '/images/manufacturing.jpg'
  },
  {
    title: '品質檢測系統',
    description: 'AI 驅動的視覺檢測系統，確保產品品質一致性',
    benefits: [
      '99.9% 檢測準確率',
      '毫秒級檢測速度',
      '多種缺陷類型識別',
      '即時品質報告'
    ],
    image: '/images/quality-inspection.jpg'
  },
  {
    title: '智能倉儲管理',
    description: '機器人與 AI 結合的智能倉儲解決方案',
    benefits: [
      '自動化貨物分揀',
      '智能路徑規劃',
      '庫存即時監控',
      '減少人為錯誤'
    ],
    image: '/images/warehouse.jpg'
  }
]

export default function Solutions() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">行業解決方案</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            針對不同行業需求，提供客製化的自動化解決方案，
            幫助企業實現數位轉型與智能化升級
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/solutions"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
                >
                  <span>查看詳細方案</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl border border-dark-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-primary-400 rounded-full" />
                      </div>
                      <p className="text-gray-400">解決方案示意圖</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/5 rounded-full blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
