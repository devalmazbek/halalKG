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
import CertificateVerification from "@/components/certificate-verification";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const { t } = useTranslation();

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
      
       {/*<ApplicationForm />*/}
      
       {/*<AppPromo />*/}
    </>
  );
}
