import { createI18nClient } from 'next-intl';

export default createI18nClient({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
});
