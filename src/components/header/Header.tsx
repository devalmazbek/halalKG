"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

import { Menu, TopBar } from './ui';
import { MobileNavigation } from './ui/MobileMenu';

import { MenuItem } from './model/type'
import { useHeader } from './model/useHeader';
import Button from "@/components/ui/button";

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { socials } = useHeader();

  
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
      <div className="container mx-auto py-2">
        <TopBar socials={socials}/>
        <div className="flex justify-between items-center mt-2">
          <Menu menuItems={menuItems}  />
          <Link href="/certification">
            <Button variant="primary" size="small" text="Получить сертификат" />
          </Link>
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