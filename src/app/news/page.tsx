"use client";

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Spin } from 'antd';
import {FiArrowRight, FiCalendar} from "react-icons/fi";

import BreadCrumbs from "@/components/breadcrumbs";
import {useNews} from "@/app/news/useNews";
import {NewsType} from "@/types/news";
import {ROUTES, formatDate} from "@/libs";

// export const metadata: Metadata = {
//   title: 'Новости | Халал Даму',
//   description: 'Последние новости и события в сфере халяль-индустрии Казахстана и мира'
// };

export default function NewsPage() {
  const { news, isLoading, error } = useNews();

  if(isLoading) {
    return <><Spin size={"large"} fullscreen={true}/></>;
  }

  if(error) {
    return <>{error}</>;
  }

  return (
    <div className="container mx-auto mb-5">
      <BreadCrumbs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item: NewsType) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/article/article.jpg"
                alt="Article"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FiCalendar className="mr-2" />
                <span>{formatDate(item.createdAt)}</span>
                <span className="mx-2">•</span>
                <span>{item.category}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <Link href={ROUTES.NEWS_DETAIL(item._id)} className="inline-flex items-center text-primary font-medium hover:text-green-600">
                <span>Подробнее</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            Предыдущая
          </button>
          <button className="px-3 py-2 rounded-md bg-primary text-white">1</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            Следующая
          </button>
        </nav>
      </div>
    </div>
  );
}


