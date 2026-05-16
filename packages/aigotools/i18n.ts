import { createI18nServer } from 'next-intl/server';

export default createI18nServer({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
});
