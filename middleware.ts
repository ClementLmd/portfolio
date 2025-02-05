import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./app/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale =
    request.headers.get("accept-language")?.split(",")?.[0].split("-")?.[0] ||
    "en";
  const defaultLocale = locales.includes(locale) ? locale : "en";

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|icons|images).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
