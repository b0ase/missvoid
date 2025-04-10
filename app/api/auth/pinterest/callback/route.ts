import { NextResponse } from 'next/server';

export async function GET() {
  // Pinterest integration is disabled for the demo
  return NextResponse.redirect('/galleries?pinterest=disabled');
} 