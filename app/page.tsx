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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fetchContent()
    fetchServices()
    fetchSolutions()
    
    return () => {
      setIsMounted(false)
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
      
      if (result.success && isMounted) {
        setServices(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
      if (isMounted) {
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
    <main className="min-h-screen">
      <Navbar />
      <Hero content={content} />
      <Services services={services} />
      <Solutions solutions={solutions} />
      <Footer />
    </main>
  )
}
