import { NextRequest, NextResponse } from 'next/server'
import { getSolutions, updateSolution, addSolution, deleteSolution } from '@/lib/database'

export async function GET() {
  try {
    console.log('Solutions API GET called')
    const solutions = getSolutions()
    console.log('Solutions fetched from database:', solutions.length)
    console.log('Solutions with images:', solutions.filter(s => s.imageUrl).length)
    return NextResponse.json({ success: true, data: solutions })
  } catch (error) {
    console.error('Solutions API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch solutions' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const solutionData = await request.json()
    
    const newSolution = addSolution(solutionData)
    return NextResponse.json({ success: true, data: newSolution })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add solution' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedSolution = updateSolution(id, updates)
    
    if (!updatedSolution) {
      return NextResponse.json({ success: false, error: 'Solution not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedSolution })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update solution' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteSolution(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Solution not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete solution' }, { status: 500 })
  }
}
