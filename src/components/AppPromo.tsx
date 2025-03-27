"use client";
import React from 'react';
import { FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AppPromo: React.FC = () => {
  // Заглушка для t
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'app.title': 'Halal Guide KZ — наше мобильное приложение',
      'app.description': 'Мобильный гид для поиска сертифицированных предприятий, определения их адреса на карте.'
    };
    return translations[key] || key;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('app.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('app.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white py-3 px-5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zm4.5-17c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5v-17zm9 17v-14h-9v14h9zm-4.5-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Google Play</div>
                  <div className="text-sm font-semibold">СКАЧАТЬ</div>
                </div>
              </a>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white py-3 px-5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">App Store</div>
                  <div className="text-sm font-semibold">СКАЧАТЬ</div>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-first md:order-last flex justify-center"
          >
            <div className="bg-white p-4 rounded-2xl shadow-lg max-w-xs">
              <div className="bg-gray-800 rounded-xl overflow-hidden relative pb-[200%]">
                <div className="absolute inset-0 flex flex-col">
                  <div className="bg-primary p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold">Halal Guide KZ</div>
                      <FiSmartphone size={24} />
                    </div>
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="mb-2">Мобильное приложение</div>
                      <div className="text-xl font-bold mb-6">Halal Guide KZ</div>
                      <div className="bg-white bg-opacity-10 p-3 rounded-lg mb-4">
                        Найдите ближайшие халал-кафе
                      </div>
                      <div className="bg-white bg-opacity-10 p-3 rounded-lg mb-4">
                        Проверьте сертификацию
                      </div>
                      <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                        Получите уведомления
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo; 