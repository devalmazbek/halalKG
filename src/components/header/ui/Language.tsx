'use client';

import React from 'react';
import i18n from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';

const LOCALES = ['ru', 'kg', 'en'];

type LanguageProps = {
  isMobile?: boolean;
  toggleMenu?: () => void;
};

export const Language: React.FC<LanguageProps> = ({ isMobile = false, toggleMenu }) => {
  const router = useRouter();
  const pathname = usePathname(); // например "/ru/about?foo=bar"

  const changeLanguage = (lng: string) => {
    // 1. меняем словари i18next
    i18n.changeLanguage(lng);

    // 2. разбиваем текущий путь на сегменты
    const segments = pathname.split('/');
    // ['', 'ru', 'about', ...] или ['', 'about', ...] если нет префикса

    let newPath: string;
    if (LOCALES.includes(segments[1])) {
      // если первый сегмент — язык, просто заменяем его
      segments[1] = lng;
      newPath = segments.join('/');
    } else {
      // языка в начале нет — вставляем
      newPath = `/${lng}${pathname}`;
    }

    // 3. пушим новый маршрут
    router.push(newPath);

    // 4. закрываем меню, если нужно
    if (toggleMenu) toggleMenu();
  };

  return (
    <div
      className={
        isMobile
          ? 'flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200'
          : 'hidden md:flex items-center space-x-3'
      }
    >
      {LOCALES.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`text-sm px-3 py-1 rounded ${
            isMobile ? 'border border-gray-300' : 'hover:bg-gray-100'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
