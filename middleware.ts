import type { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest, response: NextResponse) {
  const currentUser = request.cookies.get('token')?.value
 
  // if ((!currentUser && !request.nextUrl.pathname.startsWith('/login')) || !request.nextUrl.pathname.startsWith('/new-password')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }

  if (!currentUser && (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/invite-user'))) {
    return Response.redirect(new URL('/login', request.url))
  }

  if (currentUser && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}