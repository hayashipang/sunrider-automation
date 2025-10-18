import { NextRequest, NextResponse } from 'next/server'
import { getContent, updateContent } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const section = searchParams.get('section')
    
    const content = getContent(type || undefined, section || undefined)
    return NextResponse.json({ success: true, data: content })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch content' }, { status: 500 })
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
