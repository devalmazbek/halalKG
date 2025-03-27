"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle, FiUsers } from 'react-icons/fi';

const Advantages: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'advantages.standard.title': 'МИРОВОЙ СТАНДАРТ',
      'advantages.standard.description': 'Сертификат «QMDB Халал» открывает путь на международный рынок Халал.',
      'advantages.brand.title': 'СООТВЕТСТВУЮЩАЯ МАРКА',
      'advantages.brand.description': 'Сертифицированная продукция и услуги высоко ценятся потребителями.',
      'advantages.quality.title': 'ГАРАНТИЯ КАЧЕСТВА',
      'advantages.quality.description': 'Предприятия, сертифицированные Халал, получают высокое качество и доверие.',
      'advantages.support.title': 'Профессиональная поддержка',
      'advantages.support.description': 'Предприятиям всегда оказывается информационная, профессиональная и профессиональная поддержка.'
    };
    return translations[key] || key;
  };

  const advantages = [
    {
      icon: <FiAward className="w-10 h-10" />,
      title: t('advantages.standard.title'),
      description: t('advantages.standard.description'),
      color: 'bg-blue-500'
    },
    {
      icon: <FiStar className="w-10 h-10" />,
      title: t('advantages.brand.title'),
      description: t('advantages.brand.description'),
      color: 'bg-green-500'
    },
    {
      icon: <FiCheckCircle className="w-10 h-10" />,
      title: t('advantages.quality.title'),
      description: t('advantages.quality.description'),
      color: 'bg-accent'
    },
    {
      icon: <FiUsers className="w-10 h-10" />,
      title: t('advantages.support.title'),
      description: t('advantages.support.description'),
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages; 