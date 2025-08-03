'use client';

import React from "react";
import Image from "next/image";
import {Spin} from "antd";
import {FiCalendar} from "react-icons/fi";

import BreadCrumbs from "@/components/breadcrumbs";
import {useDetailNews} from "@/app/news/[id]/useDetailNews";
import {formatDate} from "@/libs";

export default function NewsDetailPage() {
  const {item, isLoading, error} = useDetailNews();

  if(isLoading) {
    return <><Spin size={"large"} fullscreen={true}/></>;
  }

  if(error) {
    return <>{error}</>;
  }

  return (
    <div className="container mx-auto mb-5">
      <BreadCrumbs title={item?.title} />
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/article/article.jpg"
          alt="Article"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <FiCalendar className="mr-2" />
        <span>{formatDate(item.createdAt)}</span>
        <span className="mx-2">•</span>
        <span>{item.category}</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-3">{item.title}</h1>
        <p className="text-gray-600">{item.content}</p>
      </div>
    </div>
  );
}