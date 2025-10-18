import { NextRequest, NextResponse } from 'next/server'
import { getServices, updateService, addService, deleteService } from '@/lib/database'

export async function GET() {
  try {
    console.log('Services API called')
    const services = getServices()
    console.log('Services fetched:', services.length)
    return NextResponse.json({ success: true, data: services })
  } catch (error) {
    console.error('Services API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch services',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const serviceData = await request.json()
    
    const newService = addService(serviceData)
    return NextResponse.json({ success: true, data: newService })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add service' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedService = updateService(id, updates)
    
    if (!updatedService) {
      return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedService })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update service' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteService(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete service' }, { status: 500 })
  }
}
