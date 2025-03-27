"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'hero.title': 'Халал Даму',
      'hero.subtitle': 'Учреждение по стандартизации и сертификации по стандартам шариата и стандартам халал.',
      'hero.action': 'Подробнее',
      'stats.foundation': 'Год основания',
      'stats.domestic': 'Отечественных предприятий',
      'stats.foreign': 'Иностранных предприятий', 
      'stats.professionals': 'Профессионалов'
    };
    return translations[key] || key;
  };

  return (
    <div className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl mb-8 text-gray-100">{t('hero.subtitle')}</p>
            <Link 
              href="/about"
              className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              {t('hero.action')}
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-accent text-3xl font-bold">2014</div>
                  <div className="text-sm mt-2">{t('stats.foundation')}</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-accent text-3xl font-bold">1600+</div>
                  <div className="text-sm mt-2">{t('stats.domestic')}</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-accent text-3xl font-bold">20+</div>
                  <div className="text-sm mt-2">{t('stats.foreign')}</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-accent text-3xl font-bold">100+</div>
                  <div className="text-sm mt-2">{t('stats.professionals')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 