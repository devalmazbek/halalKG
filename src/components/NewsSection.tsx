"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const NewsSection: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'news.title': 'Последние новости',
      'news.all': 'Все новости'
    };
    return translations[key] || key;
  };

  // Моковые данные для примера
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'ТҮРКІСТАН: ҚАЛА ИМАМДАРЫНА СЕМИНАР ӨТКІЗІЛДІ',
      date: '19 / март',
      image: '/images/news-1.jpg',
      excerpt: 'Түркістан қаласында имамдар үшін маңызды семинар өткізілді.'
    },
    {
      id: 2,
      title: 'АҚТӨБЕ: «TAKSIM» ЖӘНЕ «WOK POINT» СЕРТИФИКАТЫ ЖАҢАРТЫЛДЫ',
      date: '19 / март',
      image: '/images/news-2.jpg',
      excerpt: 'Ақтөбе қаласындағы «TAKSIM» және «WOK POINT» мейрамханаларының Халал сертификаты жаңартылды.'
    },
    {
      id: 3,
      title: 'ШЫМКЕНТ: 18 МЕШІТ АСХАНАСЫ ТЕКСЕРІЛДІ',
      date: '19 / март',
      image: '/images/news-3.jpg',
      excerpt: 'Шымкент қаласында 18 мешіт асханасы Халал стандарттарына сәйкестігіне тексерілді.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{t('news.title')}</h2>
          <Link href="/news" className="flex items-center text-primary hover:text-blue-700 transition-colors">
            <span className="mr-2">{t('news.all')}</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative">
                {/* Временная заглушка для изображения */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Изображение {item.id}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FiCalendar className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                  <Link href={`/news/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  href={`/news/${item.id}`}
                  className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Подробнее
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection; 