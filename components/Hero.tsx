'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

interface ContentItem {
  id: string
  type: string
  section: string
  title?: string
  subtitle?: string
  description?: string
  content?: string
  imageUrl?: string
  order: number
  isActive: boolean
  updatedAt: string
}

interface HeroProps {
  content?: ContentItem[]
}

export default function Hero({ content = [] }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">
                {content.find(item => item.section === 'hero-title')?.title || '釋放自動化'}
              </span>
              <br />
              <span className="text-white">
                {content.find(item => item.section === 'hero-subtitle')?.title || '的無限潛能'}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            {content.find(item => item.section === 'hero-description')?.content || 
             '專業的 AOI、AI、機器手臂、軟體整合服務\n為您的企業提供完整的自動化解決方案'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>開始合作</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>觀看介紹</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-dark-700"
          >
            <p className="text-gray-400 mb-6">信賴我們的客戶</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-500">100+</div>
              <div className="text-gray-400">|</div>
              <div className="text-2xl font-bold text-gray-500">50+</div>
              <div className="text-gray-400">|</div>
              <div className="text-2xl font-bold text-gray-500">99.9%</div>
              <div className="text-gray-400">|</div>
              <div className="text-2xl font-bold text-gray-500">24/7</div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-2 text-sm text-gray-500">
              <span>成功案例</span>
              <span>|</span>
              <span>合作夥伴</span>
              <span>|</span>
              <span>系統穩定性</span>
              <span>|</span>
              <span>技術支援</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
