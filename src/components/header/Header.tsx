"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { FiMenu, FiX } from 'react-icons/fi';

import { Menu, Language } from './ui';
import { MobileNavigation } from './ui/MobileMenu';

import { menuItems } from './data';
import { MenuItem } from './model';

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems: MenuItem[] = [
    { key: 'home', path: '/',  title: 'Главная'},
    { key: 'about', path: '/about', title: 'О нас' },
    { key: 'companies', path: '/companies', title: 'Компании' },
    { key: 'news', path: '/news', title: 'Новости' },
    { key: 'fatwa', path: '/fatwa', title: 'Фетвы' },
    { key: 'codes', path: '/codes', title: 'E - Коды' },
    // { key: 'articles', path: '/articles', title: t('nav.articles') },
    // { key: 'certificate', path: '/certificate', title: t('nav.certificate') },
    // { key: 'certification', path: '/certification', title: t('nav.certification') },
  ];


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src={'/logo.png'} alt={'logo'} width={50} height={50}></Image>
          </Link>

          {/* Desktop Navigation */}
          <Menu menuItems={menuItems}  />
         
          <Language />

          {/* Mobile Menu Button */}
          <MobileNavigation menuItems={menuItems} toggleMenu={toggleMenu} isOpen={isOpen}/>
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