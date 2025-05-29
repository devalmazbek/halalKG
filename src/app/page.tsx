"use client";
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';
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

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Slider/>
        <section className='container mx-auto mt-8'>
          <h2 className='text-5xl mt-4'>{t('title.about')}</h2>
          <p className='uppercase text-base font-medium my-4 text-gray-400'>{t('title.statistic')}</p>
          <Statistic/>
        </section>
      
       <section className='mt-8'>
        <div className='container mx-auto '>
          <LastNewsSlider />
        </div>
      </section>
      <Advantages />
      
      {/* <NewsSection /> */}
      
      <CompaniesSection />
      
      <CertificationSteps />
      
      {/* <ApplicationForm /> */}
      
      {/* <AppPromo /> */}
    </>
  );
}
