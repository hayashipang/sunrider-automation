import { NextRequest, NextResponse } from 'next/server'
import { getProducts, updateProduct } from '@/lib/database'

export async function GET() {
  try {
    const products = getProducts()
    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedProduct = updateProduct(id, updates)
    
    if (!updatedProduct) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedProduct })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update product' }, { status: 500 })
  }
}
