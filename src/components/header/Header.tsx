"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { FiMenu, FiX } from 'react-icons/fi';

import { Menu, Language } from './ui';

import { menuItems } from './data';

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { key: 'home', path: '/',  title: t('nav.home')},
    { key: 'about', path: '/about', title: t('nav.about') },
    { key: 'companies', path: '/companies', title: t('nav.companies') },
    { key: 'news', path: '/news', title: t('nav.news') },
    { key: 'fatwa', path: '/fatwa', title: t('nav.fatwa') },
    { key: 'articles', path: '/articles', title: t('nav.articles') },
    { key: 'certificate', path: '/certificate', title: t('nav.certificate') },
    { key: 'certification', path: '/certification', title: t('nav.certification') },
  ];


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Халал Даму</span>
          </Link>

          {/* Desktop Navigation */}
          <Menu menuItems={menuItems} t={t} />
          <Language />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      
    </header>
  );
};

export default Header; 