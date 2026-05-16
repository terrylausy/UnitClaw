import { defineI18nConfig } from 'next-intl/config';

export default defineI18nConfig(() => ({
  locales: ['en', 'cn'],
  defaultLocale: 'en',
}));
