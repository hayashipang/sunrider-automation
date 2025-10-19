import { NextRequest, NextResponse } from 'next/server'
import { getProducts, updateProduct, addProduct, deleteProduct } from '@/lib/database'

export async function GET() {
  try {
    const products = getProducts()
    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()
    
    const newProduct = addProduct(productData)
    return NextResponse.json({ success: true, data: newProduct })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add product' }, { status: 500 })
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

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteProduct(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete product' }, { status: 500 })
  }
}
