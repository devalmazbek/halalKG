"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useTransform } from 'framer-motion';

type MenuProps = {
  menuItems: { key: string; path: string, title: string }[];
  t: (key: string) => string;
  onItemClick?: () => void;
  isMobile?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ menuItems, onItemClick, isMobile = false }) => {
  const { t } = useTranslation("nav");

  if (isMobile) {
    // Мобильное меню
    return (
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            onClick={onItemClick}
            className="text-gray-700 hover:text-primary py-2"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
  }

  // Десктоп меню
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {menuItems.map((item) => (
        <Link
          key={item.key}
          href={item.path}
          className="text-gray-700 hover:text-primary transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
