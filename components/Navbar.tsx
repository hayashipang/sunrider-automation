'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const navigation = [
    { name: '首頁', href: '/' },
    { 
      name: '產品服務', 
      href: '/products',
      submenu: [
        { name: 'AOI 視覺檢測', href: '/products/aoi' },
        { name: 'AI 智能分析', href: '/products/ai' },
        { name: '機器手臂整合', href: '/products/robotics' },
        { name: '軟體開發', href: '/products/software' },
      ]
    },
    { name: '案例分享', href: '/cases' },
    { name: '關於我們', href: '/about' },
    { name: '聯絡我們', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">Sunrider</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    className="flex items-center space-x-1 cursor-pointer group"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    
                    {/* Dropdown */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-dark-800 border border-dark-700 rounded-lg shadow-lg py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-700 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              開始合作
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-dark-700 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="py-2">
                    <div className="text-gray-300 font-medium mb-2">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full text-center block">
                開始合作
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
