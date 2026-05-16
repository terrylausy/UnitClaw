import { createI18nServer } from 'next-intl/server';

export default createI18nServer({
  locales: ['en', 'cn'],
  defaultLocale: 'en',
});
