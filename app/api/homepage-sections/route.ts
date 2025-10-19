import { NextRequest, NextResponse } from 'next/server'
import { getHomepageSections, updateHomepageSection, addHomepageSection, deleteHomepageSection } from '@/lib/database'

export async function GET() {
  try {
    const sections = getHomepageSections()
    return NextResponse.json({ success: true, data: sections })
  } catch (error) {
    console.error('Homepage sections API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch homepage sections',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const sectionData = await request.json()
    const newSection = addHomepageSection(sectionData)
    return NextResponse.json({ success: true, data: newSection })
  } catch (error) {
    console.error('Homepage sections API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create homepage section',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedSection = updateHomepageSection(id, updates)
    
    if (!updatedSection) {
      return NextResponse.json({ success: false, error: 'Homepage section not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedSection })
  } catch (error) {
    console.error('Homepage sections API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update homepage section',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteHomepageSection(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Homepage section not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Homepage sections API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete homepage section',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
