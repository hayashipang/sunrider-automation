'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'AOI 視覺檢測', href: '/products/aoi' },
    { name: 'AI 智能分析', href: '/products/ai' },
    { name: '機器手臂整合', href: '/products/robotics' },
    { name: '軟體開發', href: '/products/software' },
  ],
  company: [
    { name: '關於我們', href: '/about' },
    { name: '聯絡我們', href: '/contact' },
  ],
  support: [
    { name: '技術支援', href: '/support' },
    { name: '文件中心', href: '/docs' },
    { name: '常見問題', href: '/faq' },
    { name: '服務條款', href: '/terms' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">Sunrider</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              專業的自動化整合公司，提供 AOI、AI、機器手臂、軟體等全方位服務，
              為您的企業打造智能化生產環境。
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <span>contact@sunrider-automation.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <span>+886-2-1234-5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span>台北市信義區信義路五段7號</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">產品服務</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">公司資訊</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">技術支援</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">訂閱我們的技術資訊</h3>
              <p className="text-gray-300">獲取最新的自動化技術趨勢與解決方案</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="輸入您的電子郵件"
                className="flex-1 md:w-64 px-4 py-2 bg-dark-700 border border-dark-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors flex items-center">
                <span>訂閱</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Sunrider Automation. 版權所有。
          </p>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
              隱私政策
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
              服務條款
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie 政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
