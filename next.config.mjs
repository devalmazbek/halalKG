/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import path from "path";

// Настройка i18next
import i18nConfig from './next-i18next.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
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