"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import NewsCard from '@/components/news-card';

import { LastNewsSliderData } from '@/app/home/model/data';
import { LastNewsSliderType } from '@/app/home/model/type';

const data: LastNewsSliderType[] = LastNewsSliderData;

export default function LastNewsSlider() {
  return (
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
  );
}
