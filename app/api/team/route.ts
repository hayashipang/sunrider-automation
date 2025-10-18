import { NextRequest, NextResponse } from 'next/server'
import { getTeamMembers, updateTeamMember, addTeamMember, deleteTeamMember } from '@/lib/database'

export async function GET() {
  try {
    const teamMembers = getTeamMembers()
    return NextResponse.json({ success: true, data: teamMembers })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch team members' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const memberData = await request.json()
    
    const newMember = addTeamMember(memberData)
    return NextResponse.json({ success: true, data: newMember })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to add team member' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json()
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const updatedMember = updateTeamMember(id, updates)
    
    if (!updatedMember) {
      return NextResponse.json({ success: false, error: 'Team member not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true, data: updatedMember })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update team member' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 })
    }
    
    const success = deleteTeamMember(id)
    
    if (!success) {
      return NextResponse.json({ success: false, error: 'Team member not found' }, { status: 404 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete team member' }, { status: 500 })
  }
}
