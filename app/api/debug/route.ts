import { NextResponse } from 'next/server'
import { getSolutions } from '@/lib/database'

export async function GET() {
  try {
    console.log('Debug API called')
    const solutions = getSolutions()
    console.log('Current solutions data:', solutions)
    
    return NextResponse.json({ 
      success: true, 
      data: solutions,
      count: solutions.length,
      withImages: solutions.filter(s => s.imageUrl).length
    })
  } catch (error) {
    console.error('Debug API error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Debug API failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
