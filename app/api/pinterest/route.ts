import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PINTEREST_CONFIG } from '@/app/config/pinterest';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const boardId = searchParams.get('board');
  
  // Check for access token in cookies
  const cookieStore = cookies();
  const accessToken = cookieStore.get('pinterest_access_token')?.value || PINTEREST_CONFIG.API_TOKEN;
  
  try {
    if (boardId) {
      // Fetch pins for a specific board
      const boardData = await fetchPinsForBoard(boardId, accessToken);
      return NextResponse.json({ success: true, data: boardData });
    } else {
      // Fetch all boards
      const boards = await fetchAllBoards(accessToken);
      return NextResponse.json({ success: true, data: boards });
    }
  } catch (error) {
    console.error('Pinterest API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch Pinterest data' },
      { status: 500 }
    );
  }
}

async function fetchAllBoards(accessToken: string) {
  // API URL for fetching all boards for a user
  const url = `https://api.pinterest.com/v5/boards?owner=${PINTEREST_CONFIG.USERNAME}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Pinterest API error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.items || [];
}

async function fetchPinsForBoard(boardId: string, accessToken: string) {
  // Look up the board in our config to get the internal ID
  const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === boardId);
  if (!board) {
    throw new Error(`Board not found: ${boardId}`);
  }
  
  // API URL for fetching pins for a specific board
  const url = `https://api.pinterest.com/v5/boards/${PINTEREST_CONFIG.USERNAME}/${boardId}/pins`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Pinterest API error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  
  return {
    id: boardId,
    name: board.name,
    description: board.description,
    pins: data.items || []
  };
} 