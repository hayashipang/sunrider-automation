'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

interface ContentItem {
  id: string
  type: string
  section: string
  title?: string
  subtitle?: string
  description?: string
  content?: string
  order: number
  isActive: boolean
  updatedAt: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [content, setContent] = useState<ContentItem[]>([])
  const [contactInfo, setContactInfo] = useState({
    email: 'contact@sunrider-automation.com',
    phone: '+886-2-1234-5678',
    address: '台北市信義區信義路五段7號',
    emailDesc: '我們會在 24 小時內回覆',
    phoneDesc: '週一至週五 9:00-18:00',
    addressDesc: '歡迎預約參觀'
  })

  useEffect(() => {
    fetchContent()
    fetchContactInfo()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?type=contact')
      const result = await response.json()
      if (result.success) {
        setContent(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
    }
  }

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info')
      const result = await response.json()
      if (result.success) {
        setContactInfo(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch contact info:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模擬表單提交
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">
                {content.find(item => item.section === 'hero-title')?.title || '聯絡我們'}
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {content.find(item => item.section === 'hero-title')?.subtitle || 
               content.find(item => item.section === 'description')?.content ||
               '準備開始您的自動化之旅？我們的專業團隊將為您提供客製化的解決方案'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">發送訊息</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">訊息已發送！</h3>
                  <p className="text-gray-300">我們會盡快回覆您的訊息</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        電子郵件 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="請輸入您的電子郵件"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        公司名稱
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="請輸入公司名稱"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        聯絡電話
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="請輸入聯絡電話"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      詢問主題 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">請選擇詢問主題</option>
                      <option value="aoi">AOI 視覺檢測</option>
                      <option value="ai">AI 智能分析</option>
                      <option value="robotics">機器手臂整合</option>
                      <option value="software">軟體開發</option>
                      <option value="consultation">技術諮詢</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      詳細訊息 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="請詳細描述您的需求或問題..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>發送訊息</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">聯絡資訊</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                {content.find(item => item.section === 'description')?.content ||
                 '我們期待與您合作，為您的企業提供最優質的自動化解決方案。請隨時與我們聯絡，我們將在 24 小時內回覆您的訊息。'}
              </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">電子郵件</h3>
                    <p className="text-gray-300">{contactInfo.email}</p>
                    <p className="text-gray-400 text-sm">{contactInfo.emailDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">電話</h3>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                    <p className="text-gray-400 text-sm">{contactInfo.phoneDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">地址</h3>
                    <p className="text-gray-300">{contactInfo.address}</p>
                    <p className="text-gray-400 text-sm">{contactInfo.addressDesc}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">營業時間</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>週一 - 週五</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>週六</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>週日</span>
                    <span>休息</span>
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
