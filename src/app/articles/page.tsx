import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Статьи | Халал Даму',
  description: 'Полезные статьи о сертификации Халал, стандартах и нормах'
};

export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Статьи</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* Здесь будет изображение */}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <a href="#" className="text-primary font-medium hover:underline">
                  Читать далее
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Временные данные для статей
const articles = [
  {
    id: 1,
    title: 'Что такое стандарт Халал?',
    excerpt: 'Основные принципы и требования к продукции, соответствующей стандартам Халал',
    date: '15 января 2023'
  },
  {
    id: 2,
    title: 'Процедура сертификации Халал в Казахстане',
    excerpt: 'Подробное руководство по процессу получения сертификата Халал',
    date: '22 февраля 2023'
  },
  {
    id: 3,
    title: 'Тренды рынка Халал продукции в 2023 году',
    excerpt: 'Анализ текущих тенденций и перспектив развития рынка Халал',
    date: '10 марта 2023'
  },
  {
    id: 4,
    title: 'Международные стандарты Халал',
    excerpt: 'Сравнение различных международных стандартов сертификации Халал',
    date: '5 апреля 2023'
  },
  {
    id: 5,
    title: 'Особенности производства Халал косметики',
    excerpt: 'Требования и специфика производства косметических средств по стандарту Халал',
    date: '18 мая 2023'
  },
  {
    id: 6,
    title: 'Халал и органическая продукция: сходства и различия',
    excerpt: 'Сравнительный анализ требований к халяльной и органической продукции',
    date: '29 июня 2023'
  }
];
