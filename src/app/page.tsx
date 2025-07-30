"use client";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import dynamic from "next/dynamic";
import { Spin } from 'antd';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import NewsSection from '../components/NewsSection';
import CompaniesSection from '../components/CompaniesSection';
import CertificationSteps from '../components/CertificationSteps';
import ApplicationForm from '../components/ApplicationForm';
import AppPromo from '../components/AppPromo';
import { Slider } from '@/components/slider';
import Statistic from '@/components/statistic';
import LastNewsSlider from '@/components/last-news-slider';
import CertificateVerification from "@/components/certificate-verification";
import Testimonials from "@/components/testimonials";
import {Accordion} from "@/components/accordian";
import {useHome} from "@/app/useHome";

import {getLastNews} from "@/services/news-services";

import { useRegionsMap } from '@/components/map/useRegionMap';
import Button from "@/components/ui/button";


const InteractiveMap = dynamic(
  () => import('@/components/map').then(mod => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => <div className="w-full h-[400px] flex justify-center items-center"><Spin size='large' /></div>
  }
);

export default function Home() {
  const { t } = useTranslation();
  const { accordianData } = useHome()
  const {
    regions,
    markers,
    center,
    zoom,
    activeRegion,
    selectRegion,
    resetRegion
  } = useRegionsMap();

  useEffect(() => {
    getLastNews().then((data) => console.log(data));
  })


  return (
    <>
      <Slider/>
      <section className='container mx-auto my-8'>
        {/*<h2 className='text-5xl mt-4'>{t('title.about')}</h2>*/}
        {/*<p className='uppercase text-base font-medium my-4 text-gray-400'>{t('title.statistic')}</p>*/}
        <Statistic/>
      </section>
      <section className="bg-gray-50">
        <CompaniesSection />
      </section>

      {/* <section className='mt-8'>*/}
      {/*   <div className='container mx-auto '>*/}
      {/*    <LastNewsSlider />*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<Advantages />*/}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CertificateVerification />
          </div>
        </div>
      </section>

       <NewsSection />

      <Testimonials />
      <CertificationSteps />
      <section className="mt-6">
        {/*<MapNoSSR markers={markers} regions={regions} />*/}
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Карта регионов Кыргызстана</h1>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Список регионов */}
            <div className="w-full md:w-64 space-y-2">
              <Button
                text={'Вся страна'}
                className={`w-full p-2 text-left rounded`}
                onClick={resetRegion}
              />

              {regions.map(region => (
                <Button
                  text={region.name}
                  key={region.id}
                  onClick={() => selectRegion(region.id)}
                  className='w-full p-2 text-left rounded'
                />
              ))}
            </div>

            {/* Карта */}
            <div className="flex-1">
              <InteractiveMap
                center={center}
                zoom={zoom}
                markers={markers}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ответы на наиболее распространенные вопросы о сертификации Халал</p>
        </div>
        <Accordion
          accordion
          panels={accordianData}
          ghost
          expandIconPosition="end"
          className="home-accordion max-w-3xl mx-auto my-3"
        />
      </section>
      
       {/*<ApplicationForm />*/}
      
       {/*<AppPromo />*/}
    </>
  );
}
