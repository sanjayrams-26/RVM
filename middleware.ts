import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'fallback_access_secret_key';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths requiring role guards
  const isAdminPath = pathname.startsWith('/admin');
  const isUserPath = pathname.startsWith('/user');
  const isEmployeePath = pathname.startsWith('/employee');

  if (!isAdminPath && !isUserPath && !isEmployeePath) {
    return NextResponse.next();
  }

  const token = request.cookies.get('rvm_access')?.value;

  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(JWT_ACCESS_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const role = payload.role as string;

    if (isAdminPath && role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (isUserPath && role !== 'user') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (isEmployeePath && role !== 'employee') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*', '/employee/:path*'],
};
