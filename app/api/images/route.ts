import { NextRequest, NextResponse } from 'next/server'
import { getImages, addImage, deleteImage } from '@/lib/database'

export async function GET() {
  try {
    const images = getImages()
    return NextResponse.json({ success: true, data: images })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch images' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const imageData = await request.json()
    
    const newImage = addImage(imageData)
    return NextResponse.json({ success: true, data: newImage })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add image' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteImage(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Image not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete image' }, { status: 500 })
  }
}
