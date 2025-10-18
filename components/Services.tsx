'use client'

import { motion } from 'framer-motion'
import { Eye, Brain, Bot, Code, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  href: string
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
}

interface ServicesProps {
  services?: Service[]
}

const iconMap = {
  Eye,
  Brain,
  Bot,
  Code
}

const defaultServices = [
  {
    icon: Eye,
    title: 'AOI 視覺檢測',
    description: '高精度自動光學檢測系統，提供快速、準確的產品品質檢測解決方案',
    features: ['高解析度影像處理', 'AI 智能缺陷識別', '即時檢測報告', '客製化檢測流程'],
    href: '/products/aoi'
  },
  {
    icon: Brain,
    title: 'AI 智能分析',
    description: '深度學習與機器學習技術，為您的數據提供智能分析與預測',
    features: ['深度學習模型', '預測性維護', '數據挖掘分析', '智能決策支援'],
    href: '/products/ai'
  },
  {
    icon: Bot,
    title: '機器手臂整合',
    description: '工業機器人系統整合，實現自動化生產與精準操作',
    features: ['多軸協調控制', '視覺引導系統', '安全防護機制', '遠程監控管理'],
    href: '/products/robotics'
  },
  {
    icon: Code,
    title: '軟體開發',
    description: '客製化軟體解決方案，整合各項自動化設備與系統',
    features: ['系統整合開發', '人機介面設計', '數據庫管理', '雲端服務部署'],
    href: '/products/software'
  }
]

export default function Services({ services = [] }: ServicesProps) {
  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">核心服務</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            提供全方位的自動化解決方案，從硬體整合到軟體開發，
            為您的企業打造完整的智能化生產環境
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(services.length > 0 ? services : defaultServices).map((service, index) => {
            const IconComponent = services.length > 0 && service.icon ? iconMap[service.icon as keyof typeof iconMap] : service.icon
            return (
              <motion.div
                key={services.length > 0 ? service.id : index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600/20 rounded-xl mb-6 group-hover:bg-primary-600/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
