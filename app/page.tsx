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
      const baseUrl = typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
      const response = await fetch(`${baseUrl}/api/content?type=hero`)
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

  const fetchServices = async () => {
    try {
      const baseUrl = typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
      const response = await fetch(`${baseUrl}/api/services`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
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
      const baseUrl = typeof window !== 'undefined' ? '' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
      const response = await fetch(`${baseUrl}/api/solutions`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
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
