import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // Redirect authenticated users away from auth pages
    if (token && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        const isAuthPage = pathname === '/login' || pathname === '/register';

        if (isAuthPage) return true;

        const isProtected = ['/dashboard', '/tasks', '/finance', '/notes'].some(
          (p) => pathname.startsWith(p)
        );
        if (isProtected && !token) return false;

        return true;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/tasks/:path*',
    '/finance/:path*',
    '/notes/:path*',
    '/login',
    '/register',
  ],
};
