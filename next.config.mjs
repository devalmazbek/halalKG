/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import path from "path";

import createNextIntlPlugin from "next-intl/plugin";

// Настройка i18next
// import i18nConfig from './next-i18next.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const withNextIntlPlugin = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n: i18nConfig.i18n,
  
  // Интеграция с i18n для App Router 
  // (использует отдельную конфигурацию вместо встроенной)
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
};

export default nextConfig; 