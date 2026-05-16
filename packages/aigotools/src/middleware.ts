import createMiddleware from 'next-intl/middleware';
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

import { locales, defaultLocale } from '@/i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export default clerkMiddleware((auth, request) => {
  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
