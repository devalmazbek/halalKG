"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDatabase, FiCheckCircle, FiSend } from 'react-icons/fi';

const CertificationSteps: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'certification.title': 'Процесс получения сертификата «QMDB ХАЛАЛ»',
      'certification.step1': 'Оставьте заявку на сайте www.halaldamu.kz.',
      'certification.step2': 'Сбор и подача официальных документов предприятия',
      'certification.step3': 'Проведение аудита и лабораторных испытаний',
      'certification.step4': 'Выдача сертификата'
    };
    return translations[key] || key;
  };

  const steps = [
    {
      id: 1,
      icon: <FiSend className="w-10 h-10" />,
      title: t('certification.step1'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      icon: <FiFileText className="w-10 h-10" />,
      title: t('certification.step2'),
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      icon: <FiDatabase className="w-10 h-10" />,
      title: t('certification.step3'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 4,
      icon: <FiCheckCircle className="w-10 h-10" />,
      title: t('certification.step4'),
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('certification.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className={`${step.color} rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto`}>
                {step.icon}
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Шаг {step.id}</h3>
              <p className="text-gray-600 text-center">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationSteps; 