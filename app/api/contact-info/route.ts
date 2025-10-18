import { NextResponse } from 'next/server'

// 模擬聯絡資訊數據
const contactInfo = {
  email: 'contact@sunrider-automation.com',
  phone: '+886-2-1234-5678',
  address: '台北市信義區信義路五段7號',
  emailDesc: '我們會在 24 小時內回覆',
  phoneDesc: '週一至週五 9:00-18:00',
  addressDesc: '歡迎預約參觀'
}

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: contactInfo })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch contact info' }, { status: 500 })
  }
}
