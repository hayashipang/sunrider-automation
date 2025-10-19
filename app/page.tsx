'use client'

import { useState, useEffect, useRef } from 'react'
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

export default function Home() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [solutions, setSolutions] = useState<Solution[]>([])
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    
    const fetchData = async () => {
      await Promise.all([
        fetchContent(),
        fetchServices(),
        fetchSolutions()
      ])
    }
    
    fetchData()
    
    // 定期刷新數據（每30秒）
    const interval = setInterval(() => {
      if (isMountedRef.current) {
        fetchSolutions()
      }
    }, 30000)
    
    return () => {
      isMountedRef.current = false
      clearInterval(interval)
    }
  }, [])

  const fetchContent = async () => {
    try {
      console.log('Fetching content...')
      const response = await fetch('/api/content?type=hero')
      console.log('Content response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Content API error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('Content API result:', result)
      
      if (result.success && isMountedRef.current) {
        setContent(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch content:', error)
      if (isMountedRef.current) {
        setContent([])
      }
    }
  }

  const fetchServices = async () => {
    try {
      console.log('Fetching services...')
      const response = await fetch('/api/services')
      console.log('Services response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Services API error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('Services API result:', result)
      
      if (result.success && isMountedRef.current) {
        setServices(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
      if (isMountedRef.current) {
        setServices([])
      }
    }
  }

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
      console.log('Solutions data with images:', result.data?.map((s: any) => ({ id: s.id, title: s.title, imageUrl: s.imageUrl })))
      console.log('isMounted:', isMountedRef.current)
      console.log('result.success:', result.success)
      console.log('result.data length:', result.data?.length)
      
      if (result.success && isMountedRef.current) {
        console.log('Setting solutions state:', result.data)
        setSolutions(result.data || [])
        console.log('Solutions state set successfully')
      } else {
        console.log('Not setting solutions state - success:', result.success, 'isMounted:', isMountedRef.current)
      }
    } catch (error) {
      console.error('Failed to fetch solutions:', error)
      if (isMountedRef.current) {
        setSolutions([])
      }
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero content={content} />
      <Services services={services} />
      <Solutions solutions={solutions} />
      <Footer />
    </main>
  )
}
