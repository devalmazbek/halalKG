"use client"

import { useState } from "react"
import Image from "next/image"
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import {Button} from "antd";

const testimonials = [
  {
    id: 1,
    name: "ТОО «Казахстанская Мясная Компания»",
    role: "Производитель мясной продукции",
    content:
      "Сертификация Халал от центра «Халал Даму» помогла нам выйти на новые рынки и увеличить продажи на 40%. Процесс сертификации был профессиональным и прозрачным.",
    image: "/images/testimonial.jpg",
  },
  {
    id: 2,
    name: "ТОО «Алматинский Молочный Завод»",
    role: "Производитель молочной продукции",
    content:
      "Благодаря сертификату Халал от «Халал Даму» мы смогли начать экспорт нашей продукции в страны Ближнего Востока. Эксперты центра оказали нам всестороннюю поддержку.",
    image: "/images/testimonial.jpg",
  },
  {
    id: 3,
    name: "ТОО «Астана Нан»",
    role: "Производитель хлебобулочных изделий",
    content:
      "Сотрудничество с центром «Халал Даму» позволило нам повысить качество продукции и завоевать доверие потребителей. Рекомендуем всем производителям!",
    image: "/images/testimonial.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Отзывы наших клиентов</h2>
          <div className="flex gap-2">
            <span className="cursor-pointer" onClick={prevTestimonial}>
              <FiArrowLeftCircle />
            </span>
            <span className="cursor-pointer" onClick={nextTestimonial}>
              <FiArrowRightCircle />
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-green-50">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg?height=200&width=200"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                {testimonials[currentIndex].content}
              </blockquote>
              <div>
                <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-500">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-green-600" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}