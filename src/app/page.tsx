"use client";
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import NewsSection from '../components/NewsSection';
import CompaniesSection from '../components/CompaniesSection';
import CertificationSteps from '../components/CertificationSteps';
import ApplicationForm from '../components/ApplicationForm';
import AppPromo from '../components/AppPromo';

export default function Home() {
  return (
    <>
      <Hero />
      
      <Advantages />
      
      <NewsSection />
      
      <CompaniesSection />
      
      <CertificationSteps />
      
      <ApplicationForm />
      
      <AppPromo />
    </>
  );
}
