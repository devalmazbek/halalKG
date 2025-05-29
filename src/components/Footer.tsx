"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
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
      'about.description': 'ТОО «Халал Даму» — орган, занимающийся стандартизацией и сертификацией по нормам шариата и стандартным процедурам Халал. 8 октября 2014 года он был создан при Духовном управлении мусульман Казахстана.',
      'footer.address': 'РК, город Астана, улица Карасаза, 3.',
      'footer.email': 'kmdbhalal@mail.ru',
      'footer.partners': 'Наши партнеры',
      'footer.map': 'Интерактивная карта'
    };
    return translations[key] || key;
  };

  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'news', path: '/news' },
    { key: 'fatwa', path: '/fatwa' },
    { key: 'articles', path: '/articles' },
    { key: 'certificate', path: '/certificate' },
    { key: 'certification', path: '/certification' },
  ];

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Халал Даму</h3>
            <p className="text-gray-600 mb-4">
              {t('about.description')}
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <FiMapPin className="text-accent" />
              <span className="text-sm text-gray-600">{t('footer.address')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-accent" />
              <a href="mailto:kmdbhalal@mail.ru" className="text-sm text-gray-600 hover:text-gray-900">
                {t('footer.email')}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.home')}</h3>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.key}
                  href={item.path}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.partners')}</h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              {/* Заглушки для логотипов партнеров */}
              <div className="bg-gray-800 p-4 rounded flex items-center justify-center">
                <span className="text-xs text-center">Партнер 1</span>
              </div>
              <div className="bg-gray-800 p-4 rounded flex items-center justify-center">
                <span className="text-xs text-center">Партнер 2</span>
              </div>
              <div className="bg-gray-800 p-4 rounded flex items-center justify-center">
                <span className="text-xs text-center">Партнер 3</span>
              </div>
              <div className="bg-gray-800 p-4 rounded flex items-center justify-center">
                <span className="text-xs text-center">Партнер 4</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 mt-6">{t('footer.map')}</h3>
            <div className="bg-gray-800 p-4 rounded h-32 flex items-center justify-center text-white">
              <span className="text-sm text-center">{t('footer.map')}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Халал Даму. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 