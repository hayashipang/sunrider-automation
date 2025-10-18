'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import Footer from '@/components/Footer'

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

export default function Home() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fetchContent()
    
    return () => {
      setIsMounted(false)
    }
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content?type=hero')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result.success && isMounted) {
        setContent(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
      if (isMounted) {
        setContent([])
      }
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero content={content} />
      <Services />
      <Solutions />
      <Footer />
    </main>
  )
}
