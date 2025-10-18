import { NextRequest, NextResponse } from 'next/server'
import { getContactInfo, updateContactInfo } from '@/lib/database'

export async function GET() {
  try {
    const contactInfo = getContactInfo()
    
    // 轉換為前端需要的格式
    const formattedInfo = {
      email: contactInfo.find(info => info.type === 'email')?.value || 'contact@sunrider-automation.com',
      phone: contactInfo.find(info => info.type === 'phone')?.value || '+886-2-1234-5678',
      address: contactInfo.find(info => info.type === 'address')?.value || '台北市信義區信義路五段7號',
      emailDesc: contactInfo.find(info => info.type === 'email')?.description || '我們會在 24 小時內回覆',
      phoneDesc: contactInfo.find(info => info.type === 'phone')?.description || '週一至週五 9:00-18:00',
      addressDesc: contactInfo.find(info => info.type === 'address')?.description || '歡迎預約參觀'
    }
    
    return NextResponse.json({ success: true, data: formattedInfo })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch contact info' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedInfo = updateContactInfo(id, updates)
    
    if (!updatedInfo) {
      return NextResponse.json({ success: false, error: 'Contact info not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedInfo })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update contact info' }, { status: 500 })
  }
}
