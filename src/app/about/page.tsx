"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Advantages from '../../components/Advantages';

export default function AboutPage() {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'about.title': 'ТОО «Халал Даму»',
      'about.description': 'ТОО «Халал Даму» — орган, занимающийся стандартизацией и сертификацией по нормам шариата и стандартным процедурам Халал. 8 октября 2014 года он был создан при Духовном управлении мусульман Казахстана.'
    };
    return translations[key] || key;
  };

  return (
    <div>
      {/* Заголовок страницы */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-accent mb-6"></div>
          <p className="max-w-3xl text-lg">{t('about.description')}</p>
        </div>
      </div>

      {/* История */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">История центра «Халал Даму»</h2>
              <div className="space-y-4">
                <p>8 октября 2014 года был создан Центр стандартизации и сертификации «Халал Даму» при Духовном управлении мусульман Казахстана.</p>
                <p>С момента основания Центр активно работает над развитием халал-индустрии в Казахстане, устанавливая высокие стандарты качества и соответствия продукции принципам шариата.</p>
                <p>За годы работы Центр «Халал Даму» выдал сертификаты более чем 1600 отечественным и 20 иностранным предприятиям, что подтверждает высокий уровень доверия к нашей сертификации.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Наша миссия</h3>
              <p className="mb-6">Обеспечение потребителей качественной и соответствующей нормам шариата продукцией через надежную систему сертификации и стандартизации.</p>
              
              <h3 className="text-xl font-bold mb-4">Наши ценности</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Соблюдение норм шариата</li>
                <li>Честность и прозрачность</li>
                <li>Профессионализм</li>
                <li>Качество и ответственность</li>
                <li>Развитие халал-индустрии</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <Advantages />

      {/* Наша команда */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Заглушки для членов команды */}
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Имя Фамилия</h3>
                  <p className="text-gray-600 mb-4">Должность</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
