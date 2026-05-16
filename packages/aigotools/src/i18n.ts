import { createI18n } from 'next-intl';

// 旧版 next-intl 配置
const i18n = createI18n({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  messages: {
    en: () => import('../messages/en.json'),
    zh: () => import('../messages/zh.json'),
  },
});

export const { useTranslations, useLocale, useMessages } = i18n;
export default i18n;
