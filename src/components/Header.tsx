"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  // Временная заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.companies': 'Компании',
      'nav.news': 'Новости',
      'nav.fatwa': 'Фетвы',
      'nav.articles': 'Статьи',
      'nav.certificate': 'Свидетельство Халал',
      'nav.certification': 'Сертификация',
    };
    return translations[key] || key;
  };
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (locale: string) => {
    // Для App Router
    router.push(`/${locale}`);
  };

  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'companies', path: '/companies' },
    { key: 'news', path: '/news' },
    { key: 'fatwa', path: '/fatwa' },
    { key: 'articles', path: '/articles' },
    { key: 'certificate', path: '/certificate' },
    { key: 'certification', path: '/certification' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Халал Даму</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.key}
                href={item.path}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => changeLanguage('ru')}
              className="text-sm px-2 py-1 rounded hover:bg-gray-100"
            >
              RU
            </button>
            <button 
              onClick={() => changeLanguage('kg')}
              className="text-sm px-2 py-1 rounded hover:bg-gray-100"
            >
              KG
            </button>
            <button 
              onClick={() => changeLanguage('en')}
              className="text-sm px-2 py-1 rounded hover:bg-gray-100"
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <Link 
                    key={item.key}
                    href={item.path}
                    className="text-gray-700 hover:text-primary py-2"
                    onClick={toggleMenu}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => {
                    changeLanguage('ru');
                    toggleMenu();
                  }}
                  className="text-sm px-3 py-1 rounded border border-gray-300"
                >
                  RU
                </button>
                <button 
                  onClick={() => {
                    changeLanguage('kg');
                    toggleMenu();
                  }}
                  className="text-sm px-3 py-1 rounded border border-gray-300"
                >
                  KG
                </button>
                <button 
                  onClick={() => {
                    changeLanguage('en');
                    toggleMenu();
                  }}
                  className="text-sm px-3 py-1 rounded border border-gray-300"
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 