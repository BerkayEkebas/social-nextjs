import { withClerkMiddleware } from '@clerk/nextjs/server';

const isProtectedRoute = (pathname: string) => pathname.startsWith('/settings');

export default withClerkMiddleware((req) => {
  if (isProtectedRoute(req.nextUrl.pathname)) {
    // Burada auth koruması mantığını kendin ekleyebilirsin
    // Örneğin kullanıcı giriş yapmamışsa 401 dönebilirsin
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
