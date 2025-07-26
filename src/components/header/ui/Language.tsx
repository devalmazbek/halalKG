'use client';

import React from 'react';
import i18n from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';

type LanguageProps = {
  isMobile?: boolean;
  toggleMenu?: () => void;
};

export const Language: React.FC<LanguageProps> = ({ isMobile = false, toggleMenu }) => {
  const router = useRouter();
  const pathname = usePathname(); // текущий путь, например /ru/about или /en

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // const pathWithoutLocale = pathname.replace(/^\/(ru|en|kg)/, '');
    // router.push(`/${lng}${pathWithoutLocale || '/'}`);

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
      {['ru'].map((lng) => (
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
