"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

interface Company {
  id: number;
  name: string;
  certificateNumber: string;
  owner: string;
}

const CompaniesSection: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'companies.title': 'Последние сертифицированные предприятия',
      'companies.all': 'Все предприятия'
    };
    return translations[key] || key;
  };

  // Моковые данные для примера
  const companies: Company[] = [
    {
      id: 1,
      name: 'Kulikov',
      certificateNumber: '000040',
      owner: 'Семейные традиции ОсОО'
    },
    {
      id: 2,
      name: 'Данияр ет',
      certificateNumber: '000767*',
      owner: 'Ибраев ЖК'
    },
    {
      id: 3,
      name: 'USTA TÜRK KAFESI',
      certificateNumber: '001061',
      owner: 'Family Kitchen ЖШС'
    },
    {
      id: 4,
      name: 'Tobi',
      certificateNumber: '001200',
      owner: 'Tobi ЖК'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{t('companies.title')}</h2>
          <Link href="/companies" className="flex items-center text-primary hover:text-blue-700 transition-colors">
            <span className="mr-2">{t('companies.all')}</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500">
                  {company.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">«{company.name}»</h3>
                <div className="text-gray-600 mb-3 text-center">№ {company.certificateNumber}</div>
                <div className="text-sm text-gray-500 mb-4 text-center">«{company.owner}»</div>
                <div className="flex items-center text-green-600 font-medium">
                  <FiCheck className="mr-1" />
                  Сертифицированный
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection; 