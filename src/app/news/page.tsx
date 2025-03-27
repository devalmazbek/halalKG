import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Новости | Халал Даму',
  description: 'Последние новости и события в сфере халяль-индустрии Казахстана и мира'
};

export default function NewsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Новости</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* Изображение новости */}
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{item.date}</span>
                <span className="mx-2">•</span>
                <span>{item.category}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <a href="#" className="text-primary font-medium hover:underline">
                Читать далее
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            Предыдущая
          </button>
          <button className="px-3 py-2 rounded-md bg-primary text-white">1</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            Следующая
          </button>
        </nav>
      </div>
    </div>
  );
}

// Временные данные для новостей
const news = [
  {
    id: 1,
    title: 'Форум производителей халяльной продукции прошел в Алматы',
    excerpt: 'В Алматы состоялся международный форум производителей халяльной продукции с участием представителей из 15 стран.',
    date: '15 января 2023',
    category: 'События'
  },
  {
    id: 2,
    title: 'Новые стандарты сертификации халяль вступили в силу',
    excerpt: 'С 1 февраля 2023 года в Казахстане вступили в силу обновленные стандарты сертификации халяльной продукции.',
    date: '1 февраля 2023',
    category: 'Стандарты'
  },
  {
    id: 3,
    title: 'Экспорт халяльной продукции из Казахстана вырос на 25%',
    excerpt: 'По данным Министерства торговли, экспорт сертифицированной халяльной продукции из Казахстана увеличился на 25% за первый квартал 2023 года.',
    date: '15 апреля 2023',
    category: 'Экономика'
  },
  {
    id: 4,
    title: 'Открытие нового центра сертификации Халал Даму в Шымкенте',
    excerpt: 'В Шымкенте состоялось торжественное открытие нового регионального центра сертификации Халал Даму.',
    date: '23 мая 2023',
    category: 'События'
  },
  {
    id: 5,
    title: 'Международная конференция по халяль-индустрии пройдет в Нур-Султане',
    excerpt: 'С 10 по 12 сентября в столице Казахстана пройдет международная конференция по развитию халяль-индустрии.',
    date: '1 августа 2023',
    category: 'Анонсы'
  },
  {
    id: 6,
    title: 'Халал Даму и Малайзийский центр халяль подписали меморандум о сотрудничестве',
    excerpt: 'Подписан меморандум о сотрудничестве между Халал Даму и ведущим сертификационным органом Малайзии.',
    date: '12 октября 2023',
    category: 'Сотрудничество'
  }
];
