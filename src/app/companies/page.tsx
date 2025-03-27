import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сертифицированные компании | Халал Даму',
  description: 'Список компаний, получивших сертификат Халал от Центра стандартизации и сертификации «Халал Даму»'
};

export default function CompaniesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Сертифицированные компании</h1>
      
      <div className="mb-10">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Поиск по названию компании или номеру сертификата"
              className="flex-grow px-4 py-3 focus:outline-none"
            />
            <button className="bg-primary text-white px-6 py-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Название компании</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Номер сертификата</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Категория</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Дата выдачи</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Срок действия</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{company.name}</td>
                <td className="py-3 px-4">{company.certificateNumber}</td>
                <td className="py-3 px-4">{company.category}</td>
                <td className="py-3 px-4">{company.issueDate}</td>
                <td className="py-3 px-4">{company.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 flex justify-center">
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

// Временные данные для компаний
const companies = [
  {
    id: 1,
    name: 'ТОО "Халал Фуд Продактс"',
    certificateNumber: 'HD-2023-000125',
    category: 'Пищевая продукция',
    issueDate: '15.01.2023',
    expiryDate: '15.01.2024'
  },
  {
    id: 2,
    name: 'ИП "Нурлан и Ко"',
    certificateNumber: 'HD-2023-000256',
    category: 'Мясная продукция',
    issueDate: '22.02.2023',
    expiryDate: '22.02.2024'
  },
  {
    id: 3,
    name: 'ТОО "Казахстанские сладости"',
    certificateNumber: 'HD-2023-000378',
    category: 'Кондитерские изделия',
    issueDate: '10.03.2023',
    expiryDate: '10.03.2024'
  },
  {
    id: 4,
    name: 'АО "Молочная долина"',
    certificateNumber: 'HD-2023-000419',
    category: 'Молочная продукция',
    issueDate: '05.04.2023',
    expiryDate: '05.04.2024'
  },
  {
    id: 5,
    name: 'ТОО "Чистая косметика"',
    certificateNumber: 'HD-2023-000527',
    category: 'Косметика',
    issueDate: '18.05.2023',
    expiryDate: '18.05.2024'
  }
];
