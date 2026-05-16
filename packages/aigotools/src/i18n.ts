import { useI18n } from 'next-intl';

// 旧版 next-intl 兼容写法
export function useTranslations(namespace: string) {
  return useI18n().useTranslations(namespace);
}

export const locales = ['en', 'zh'];
export const defaultLocale = 'en';
