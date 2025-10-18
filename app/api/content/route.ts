import { NextRequest, NextResponse } from 'next/server'
import { getContent, updateContent } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    console.log('Content API called')
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const section = searchParams.get('section')
    
    console.log('Content API params:', { type, section })
    const content = getContent(type || undefined, section || undefined)
    console.log('Content fetched:', content.length)
    return NextResponse.json({ success: true, data: content })
  } catch (error) {
    console.error('Content API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch content',
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
    
    const updatedContent = updateContent(id, updates)
    
    if (!updatedContent) {
      return NextResponse.json({ success: false, error: 'Content not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedContent })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update content' }, { status: 500 })
  }
}
