/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kg', 'en'],
  },
  
  localePath: './public/locales',
  
  // Настройки для NextJS App Router
  reloadOnPrerender: process.env.NODE_ENV === 'development'
} 