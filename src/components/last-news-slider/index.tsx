"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import NewsCard from '@/components/news-card';

import { LastNewsSliderData } from '@/app/home/model/data';
import { LastNewsSliderType } from '@/app/home/model/type';
import { useTranslation } from 'react-i18next';

const data: LastNewsSliderType[] = LastNewsSliderData;

export default function LastNewsSlider() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{t('title.last_news')}</h2>
          <Link href="/news" className="flex items-center text-primary hover:text-blue-700 transition-colors">
            <span className="mr-2">{t('title.all_news')}</span>
            <FiArrowRight />
          </Link>
        </div>
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{ clickable: true }}
          className="last_news_slider"
        >
          {data.map(item => (
            <SwiperSlide key={item.id} className="mb-10">
              <NewsCard
                title={item.title}
                description={item.description}
                thumbnail={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
