"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from './Menu';
import { Language } from './Language';
import { useRouter } from 'next/navigation';

type MobileNavigationProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: { key: string; path: string, title: string }[];
};

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, toggleMenu, menuItems }) => {
  const router = useRouter();

  // const changeLanguage = (locale: string) => {
  //   router.push(`/${locale}`);
  //   toggleMenu();
  // };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-3">
            <Menu menuItems={menuItems} onItemClick={toggleMenu} isMobile />
            <Language isMobile toggleMenu={toggleMenu} />
          </div>
        </motion.div>
      )}
    </>
  );
};
