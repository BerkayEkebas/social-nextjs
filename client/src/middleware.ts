import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Sadece "/settings" gibi korumalı rotaları kontrol et
  publicRoutes: (req) => {
    const pathname = req.nextUrl.pathname;
    return !pathname.startsWith("/settings");
  },
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // _next, statik dosyalar hariç tut
};
