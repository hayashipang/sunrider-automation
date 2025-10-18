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
    console.log('Images API POST called')
    
    // 檢查是否為 FormData（文件上傳）
    const contentType = request.headers.get('content-type')
    console.log('Content-Type:', contentType)
    
    if (contentType && contentType.includes('multipart/form-data')) {
      // 處理文件上傳
      const formData = await request.formData()
      const file = formData.get('image') as File
      const category = formData.get('category') as string
      const usedIn = formData.get('usedIn') as string
      
      console.log('File upload:', { 
        fileName: file?.name, 
        fileSize: file?.size, 
        category, 
        usedIn 
      })
      
      if (!file) {
        return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 })
      }
      
      // 模擬文件上傳 - 在實際應用中，這裡應該上傳到雲存儲
      const imageUrl = `/uploads/${Date.now()}-${file.name}`
      
      const imageData = {
        name: file.name,
        url: imageUrl,
        alt: file.name,
        category: category || 'general',
        size: `${(file.size / 1024).toFixed(2)} KB`,
        dimensions: 'Unknown',
        usedIn: usedIn ? [usedIn] : []
      }
      
      const newImage = addImage(imageData)
      console.log('Image added:', newImage)
      
      return NextResponse.json({ success: true, data: newImage })
    } else {
      // 處理 JSON 數據
      const imageData = await request.json()
      console.log('JSON image data:', imageData)
      
      const newImage = addImage(imageData)
      return NextResponse.json({ success: true, data: newImage })
    }
  } catch (error) {
    console.error('Images API POST error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to add image',
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
    
    const success = deleteImage(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Image not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete image' }, { status: 500 })
  }
}
