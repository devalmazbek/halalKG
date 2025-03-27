import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фетвы | Халал Даму',
  description: 'Религиозные постановления (фетвы) от Духовного управления мусульман Казахстана'
};

export default function FatwaPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Фетвы</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 mb-8 text-center">
          На данной странице вы можете ознакомиться с фетвами (религиозными постановлениями) 
          от Духовного управления мусульман Казахстана по различным вопросам халяль продукции.
        </p>
        
        <div className="space-y-6">
          {fatwas.map((fatwa) => (
            <div key={fatwa.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{fatwa.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">Дата: {fatwa.date}</span>
                <span>Категория: {fatwa.category}</span>
              </div>
              <p className="text-gray-700 mb-4">{fatwa.excerpt}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:text-blue-700"
              >
                Читать полностью
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Временные данные для фетв
const fatwas = [
  {
    id: 1,
    title: 'О халяльности пищевых добавок E-серии',
    date: '12 апреля 2023',
    category: 'Пищевые продукты',
    excerpt: 'Постановление о статусе различных пищевых добавок E-серии с точки зрения их халяльности и допустимости употребления в пищу мусульманами.'
  },
  {
    id: 2,
    title: 'Об использовании желатина в пищевой продукции',
    date: '8 июня 2023',
    category: 'Пищевые продукты',
    excerpt: 'Разъяснение по вопросу использования желатина в пищевой продукции и его статуса в соответствии с нормами шариата.'
  },
  {
    id: 3,
    title: 'О правилах забоя животных по стандарту Халал',
    date: '25 июля 2023',
    category: 'Мясная продукция',
    excerpt: 'Детальное разъяснение правил забоя животных в соответствии с исламскими требованиями для получения статуса халяльной продукции.'
  },
  {
    id: 4,
    title: 'О составе косметической продукции и ее халяльности',
    date: '10 сентября 2023',
    category: 'Косметика',
    excerpt: 'Постановление о компонентах косметической продукции и их соответствии стандартам Халал.'
  },
  {
    id: 5,
    title: 'О финансовых операциях и услугах в соответствии с нормами шариата',
    date: '5 ноября 2023',
    category: 'Финансы',
    excerpt: 'Разъяснение принципов исламского финансирования и допустимых с точки зрения шариата финансовых операций.'
  }
];
