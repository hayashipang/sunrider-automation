'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Solution {
  id: string
  title: string
  description: string
  benefits: string[]
  imageUrl?: string
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fetchSolutions()
    
    return () => {
      setIsMounted(false)
    }
  }, [])

  const fetchSolutions = async () => {
    try {
      console.log('Fetching solutions...')
      const response = await fetch('/api/solutions')
      console.log('Solutions response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Solutions API error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('Solutions API result:', result)
      
      if (result.success && isMounted) {
        setSolutions(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch solutions:', error)
      if (isMounted) {
        setSolutions([])
      }
    }
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">解決方案</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              為您的企業提供完整的自動化解決方案，提升效率與競爭力
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="card group">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary-400">主要優勢：</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0">
                    {solution.imageUrl ? (
                      <div className="w-full lg:w-80 h-64 rounded-xl border border-dark-600 overflow-hidden">
                        <img
                          src={solution.imageUrl}
                          alt={solution.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full lg:w-80 h-64 bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl border border-dark-600 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="w-8 h-8 bg-primary-400 rounded-full" />
                          </div>
                          <p className="text-gray-400">解決方案示意圖</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
