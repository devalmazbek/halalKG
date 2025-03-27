"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CertificationSteps from '../../components/CertificationSteps';
import ApplicationForm from '../../components/ApplicationForm';

export default function CertificationPage() {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'nav.certification': 'Сертификация'
    };
    return translations[key] || key;
  };

  return (
    <div>
      {/* Заголовок страницы */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('nav.certification')}</h1>
          <div className="w-20 h-1 bg-accent mb-6"></div>
          <p className="max-w-3xl text-lg">
            Процесс получения сертификата «QMDB Халал» включает несколько этапов, от подачи заявки до
            выдачи сертификата соответствия.
          </p>
        </div>
      </div>

      {/* Шаги сертификации */}
      <CertificationSteps />

      {/* Требования */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Требования для получения сертификата</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Документы</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Заявление на получение сертификата «QMDB Халал»</li>
                <li>Свидетельство о государственной регистрации</li>
                <li>Технические документы по производству продукции</li>
                <li>Сертификаты качества на используемое сырье</li>
                <li>Детальная информация о составе продукции</li>
                <li>Документация о происхождении животного сырья</li>
                <li>Декларация о соответствии требованиям шариата</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Требования к производству</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Соответствие производственных помещений требованиям санитарии</li>
                <li>Использование только халяльного сырья</li>
                <li>Отсутствие запрещенных в исламе ингредиентов</li>
                <li>Отдельное хранение халяльной продукции</li>
                <li>Правильный убой животных в соответствии с нормами шариата</li>
                <li>Отсутствие контакта с запрещенными продуктами</li>
                <li>Применение разрешенных методов очистки и дезинфекции</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Виды сертификатов */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Виды сертификатов QMDB Халал</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Стандартный", period: "1 год", description: "Для большинства производителей пищевой продукции" },
              { title: "Премиум", period: "2 года", description: "Для компаний с проверенной историей и высоким уровнем соответствия" },
              { title: "Специализированный", period: "1 год", description: "Для косметической продукции, фармацевтики и непищевых товаров" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="text-primary font-semibold mb-4">Срок действия: {cert.period}</div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <ul className="text-sm space-y-1 text-gray-500">
                  <li>Включает аудит производства</li>
                  <li>Проверка ингредиентов</li>
                  <li>Лабораторные исследования</li>
                  <li>Мониторинг соответствия</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Форма заявки */}
      <ApplicationForm />
    </div>
  );
}
