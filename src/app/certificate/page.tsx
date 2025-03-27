import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Проверить сертификат | Халал Даму',
  description: 'Проверка подлинности сертификата Халал'
};

export default function CertificatePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Проверка сертификата</h1>
      
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="mb-6 text-gray-700">
          Введите номер сертификата для проверки его подлинности в базе данных сертифицированных компаний Халал Даму.
        </p>
        
        <div className="mb-6">
          <label htmlFor="certificate" className="block text-sm font-medium text-gray-700 mb-1">
            Номер сертификата
          </label>
          <input
            type="text"
            id="certificate"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Например: HD-2023-001234"
          />
        </div>
        
        <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Проверить сертификат
        </button>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium text-lg mb-2">Как найти номер сертификата?</h3>
          <p className="text-gray-600 text-sm">
            Номер сертификата указан в правом верхнем углу документа и состоит из буквенного префикса HD, года выдачи и
            шестизначного номера, например: HD-2023-001234.
          </p>
        </div>
      </div>
    </div>
  );
}
