import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "../button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    title: "Халал Даму",
    description:
      "Кыргызстан Мусулмандар Дин башкармалыгынын халал иштери боюнча кызматтарды жана продукцияларды сертификациялоо бөлүмү",
    img: "/images/slider.jpg",
  },
  {
    id: 2,
    title: "Халал Даму",
    description:
      "Кыргызстан Мусулмандар Дин башкармалыгынын халал иштери боюнча кызматтарды жана продукцияларды сертификациялоо бөлүмү",
    img: "/images/slider2.jpg",
  },
  {
    id: 3,
    title: "Халал Даму",
    description:
      "Кыргызстан Мусулмандар Дин башкармалыгынын халал иштери боюнча кызматтарды жана продукцияларды сертификациялоо бөлүмү",
    img: "/images/slider3.jpg",
  },
];

export const Slider: React.FC = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        className="slider w-full"
      >
        {sliderData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative min-h-[86dvh] flex items-center justify-center text-white"
          >
            
            <div className="absolute inset-0 z-0">
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                priority={item.id === 1}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>

            <div className="relative container mx-auto flex flex-col justify-center items-start z-10 text-center px-5 min-h-[inherit]">
              <h1 className="text-7xl font-bold">{item.title}</h1>
              <p className="max-w-[500px] text-base text-left text-gray-300 font-semibold">
                {item.description}
              </p>

              <Button text="Толугурак" size="large" className="mt-7" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
